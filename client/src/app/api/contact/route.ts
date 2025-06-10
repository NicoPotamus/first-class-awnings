import { NextResponse } from 'next/server';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    const messageText = `
New Contact Form Submission:
---------------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
City: ${formData.city}
ZIP: ${formData.zip}
Message:
${formData.message}
`;

    const receivingEmail = process.env.RECEIVING_EMAIL;
    if (!receivingEmail) {
      console.error('Receiving email environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Recipient email not configured' },
        { status: 500 }
      );
    }

    const data = await mg.messages.create('firstclassawnings.com', {
      from: 'FirstClassAwnings Site <postmaster@firstclassawnings.com>',
      to: [`Nicolas DeMilio <${process.env.RECEIVING_EMAIL}>`],
      subject: `New Contact Form Submission from ${formData.name}`,
      text: messageText,
      'h:Reply-To': formData.email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    console.error('Failed to send email:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

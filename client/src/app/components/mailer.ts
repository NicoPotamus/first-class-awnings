interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  message: string;
}

export async function sendContactFormMessage(formData: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    const data = await response.json();
    console.log('Message sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send message:', error);
    throw error;
  }
}
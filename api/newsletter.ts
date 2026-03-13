import { Resend } from 'resend';

interface RequestBody {
  email: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email }: RequestBody = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send subscription confirmation email
    const response = await resend.emails.send({
      from: 'TechXtraSol <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to TechXtraSol Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Welcome to TechXtraSol Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter. You'll be the first to hear about:</p>
          <ul>
            <li>New products and services</li>
            <li>Industry insights and best practices</li>
            <li>Special offers and discounts</li>
            <li>Latest technology updates</li>
          </ul>
          <p>Check your inbox regularly for valuable updates from TechXtraSol Limited.</p>
          <p>Best regards,<br/><strong>TechXtraSol Team</strong></p>
        </div>
      `,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    // Optional: Here you could save the email to your database
    // await db.newsletters.create({ email, subscribedAt: new Date() })

    return res.status(200).json({ 
      success: true,
      message: 'Successfully subscribed to newsletter',
      emailId: response.data?.id,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ 
      error: 'Failed to subscribe',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

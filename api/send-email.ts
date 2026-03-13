import { Resend } from 'resend';

interface RequestBody {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, subject = 'New Contact Form Submission' }: RequestBody = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: 'TechXtraSol <onboarding@resend.dev>',
      to: email,
      subject: 'We received your inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out to TechXtraSol Limited!</p>
          <p>We've received your message and our team will get back to you as soon as possible.</p>
          
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>Best regards,<br/>
          <strong>TechXtraSol Limited Team</strong></p>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'biinorman1@gmail.com',
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="font-size: 12px; color: #666;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Check if both emails were sent successfully
    if (userEmailResponse.error || adminEmailResponse.error) {
      console.error('Email sending error:', { userEmailResponse, adminEmailResponse });
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: userEmailResponse.error || adminEmailResponse.error 
      });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully',
      userEmailId: userEmailResponse.data?.id,
      adminEmailId: adminEmailResponse.data?.id,
    });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

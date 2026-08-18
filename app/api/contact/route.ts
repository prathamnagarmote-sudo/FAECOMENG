import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Multi-recipient configuration
const RECIPIENT_EMAILS = process.env.ENQUIRY_RECIPIENT_EMAILS
  ? process.env.ENQUIRY_RECIPIENT_EMAILS.split(',').map((e) => e.trim())
  : ['info@faecom.com'];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);

      // Send dual-recipient email notification
      await resend.emails.send({
        from: 'FAECOM Website <onboarding@resend.dev>',
        to: RECIPIENT_EMAILS,
        subject: `New Technical Proposal Inquiry: ${name} (${company || 'Individual'})`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #1A184D; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; background: #FFFFFF;">
            <div style="border-bottom: 2px solid #FF6B2C; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #1A184D; margin: 0; font-size: 22px;">New Project Enquiry Received</h2>
              <p style="color: #FF6B2C; margin: 4px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">FAECOM INC. Corporate Portal</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: bold; width: 140px;">Client Name:</td>
                <td style="padding: 10px 0; color: #0F172A; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: bold;">Work Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #FF6B2C; font-weight: bold; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px 0; color: #0F172A;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: bold;">Company / Firm:</td>
                <td style="padding: 10px 0; color: #0F172A;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: bold;">Required Service:</td>
                <td style="padding: 10px 0; color: #1A184D; font-weight: bold;">${service || 'General Inquiry'}</td>
              </tr>

            </table>

            <div style="margin-top: 20px; padding: 16px; background: #F8FAFC; border-radius: 8px; border-left: 4px solid #1A184D;">
              <h4 style="margin: 0 0 8px 0; color: #1A184D; font-size: 14px; text-transform: uppercase;">Project Description / Notes:</h4>
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
            </div>

            <div style="margin-top: 24px; border-top: 1px solid #E2E8F0; padding-top: 14px; text-align: center; font-size: 12px; color: #94A3B8;">
              This inquiry was submitted from the FAECOM INC. website contact form and delivered to <strong>${RECIPIENT_EMAILS.join(', ')}</strong>.
            </div>
          </div>
        `,
      });
    } else {
      console.log('--- ENQUIRY RECEIVED (API KEY NOT SET) ---');
      console.log(`Delivering to: ${RECIPIENT_EMAILS.join(', ')}`);
      console.log(body);
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully and routed to both engineering mailboxes.',
      recipients: RECIPIENT_EMAILS,
    });
  } catch (err: unknown) {
    console.error('Error submitting enquiry:', err);
    return NextResponse.json(
      { error: 'Internal server error processing enquiry.' },
      { status: 500 }
    );
  }
}

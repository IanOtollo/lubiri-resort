import { NextRequest, NextResponse } from 'next/server';
import { sendBookingEmails } from '@/lib/emails/emailService';

export async function POST(request: NextRequest) {
  try {
    const booking = await request.json();

    // Validate required fields
    if (!booking.guest_email || !booking.guest_name) {
      return NextResponse.json(
        { error: 'Missing required booking information' },
        { status: 400 }
      );
    }

    // Send emails
    const result = await sendBookingEmails(booking);

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send emails', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error sending emails:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}

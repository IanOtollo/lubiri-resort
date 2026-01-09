import * as brevo from '@getbrevo/brevo';
import { getCustomerConfirmationEmail } from './customerEmail';
import { getAdminAlertEmail } from './adminEmail';

interface BookingEmailData {
  id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  room_name: string;
  check_in: string;
  check_out: string;
  number_of_guests: number;
  total_amount: number;
  special_requests?: string;
  created_at: string;
}

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ''
);

export async function sendBookingEmails(booking: BookingEmailData) {
  try {
    await sendCustomerEmail(booking);
    await sendAdminEmail(booking);
    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { success: false, error };
  }
}

async function sendCustomerEmail(booking: BookingEmailData) {
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  
  sendSmtpEmail.subject = 'Booking Confirmed - Lubiri Resort #' + booking.id.slice(0, 8).toUpperCase();
  sendSmtpEmail.htmlContent = getCustomerConfirmationEmail(booking);
  sendSmtpEmail.sender = { 
    name: 'Lubiri Resort', 
    email: 'ianotollo@outlook.com'
  };
  sendSmtpEmail.to = [
    { email: booking.guest_email, name: booking.guest_name }
  ];

  const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
  console.log('Customer email sent');
  return data;
}

async function sendAdminEmail(booking: BookingEmailData) {
  const sendSmtpEmail = new brevo.SendSmtpEmail();
  
  sendSmtpEmail.subject = 'New Booking #' + booking.id.slice(0, 8).toUpperCase() + ' - ' + booking.guest_name;
  sendSmtpEmail.htmlContent = getAdminAlertEmail(booking);
  sendSmtpEmail.sender = { 
    name: 'Lubiri System', 
    email: 'ianotollo@outlook.com'
  };
  sendSmtpEmail.to = [
    { email: 'ianotollo@outlook.com', name: 'Lubiri Admin' }
  ];

  const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
  console.log('Admin email sent');
  return data;
}

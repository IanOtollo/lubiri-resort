interface BookingData {
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
}

export function getCustomerConfirmationEmail(booking: BookingData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Booking Confirmation</title>
</head>
<body style="font-family: Arial; padding: 20px; background: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px;">
    <h1 style="color: #1e293b;">Lubiri Resort</h1>
    <h2 style="color: #f59e0b;">Booking Confirmed!</h2>
    
    <p>Dear ${booking.guest_name},</p>
    <p>Thank you for choosing Lubiri Resort!</p>
    
    <div style="background: #f9fafb; padding: 15px; margin: 20px 0;">
      <h3>Booking Details</h3>
      <p>Reference: #${booking.id.slice(0, 8).toUpperCase()}</p>
      <p>Room: ${booking.room_name}</p>
      <p>Guests: ${booking.number_of_guests}</p>
      <p>Check-in: ${new Date(booking.check_in).toLocaleDateString()}</p>
      <p>Check-out: ${new Date(booking.check_out).toLocaleDateString()}</p>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; text-align: center;">
      <h2 style="color: #f59e0b;">KES ${booking.total_amount.toLocaleString()}</h2>
      <p>Status: Pending Payment</p>
    </div>
    
    <p>We look forward to hosting you!</p>
    <p>The Lubiri Resort Team</p>
  </div>
</body>
</html>
  `;
}

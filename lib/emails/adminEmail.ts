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
  created_at: string;
}

export function getAdminAlertEmail(booking: BookingData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Booking Alert</title>
</head>
<body style="font-family: Arial; padding: 20px; background: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px;">
    <h1 style="color: #dc2626;">NEW BOOKING ALERT</h1>
    <h2>Booking #${booking.id.slice(0, 8).toUpperCase()}</h2>
    
    <p style="color: #dc2626; font-weight: bold;">Action Required: Review this booking</p>
    
    <div style="background: #f9fafb; padding: 15px; margin: 20px 0;">
      <h3>Guest Information</h3>
      <p>Name: ${booking.guest_name}</p>
      <p>Email: ${booking.guest_email}</p>
      <p>Phone: ${booking.guest_phone}</p>
      <p>Guests: ${booking.number_of_guests}</p>
    </div>
    
    <div style="background: #f9fafb; padding: 15px; margin: 20px 0;">
      <h3>Reservation Details</h3>
      <p>Room: ${booking.room_name}</p>
      <p>Check-in: ${new Date(booking.check_in).toLocaleDateString()}</p>
      <p>Check-out: ${new Date(booking.check_out).toLocaleDateString()}</p>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; text-align: center;">
      <h2 style="color: #92400e;">KES ${booking.total_amount.toLocaleString()}</h2>
      <p style="font-weight: bold;">PAYMENT PENDING</p>
    </div>
    
    <p>Lubiri Resort Admin System</p>
  </div>
</body>
</html>
  `;
}

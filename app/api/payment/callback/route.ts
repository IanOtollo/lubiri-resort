import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderTrackingId = searchParams.get('OrderTrackingId');
  const orderNotificationId = searchParams.get('OrderNotificationId');

  if (!orderTrackingId || !orderNotificationId) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/failed`);
  }

  try {
    const pesapalUrl = 'https://cybqa.pesapal.com/pesapalv3/api';

    // Get access token
    const tokenResponse = await fetch(`${pesapalUrl}/Auth/RequestToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.token;

    // Get transaction status
    const statusResponse = await fetch(
      `${pesapalUrl}/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
        },
      }
    );

    const statusData = await statusResponse.json();

    // Update booking based on payment status
    if (statusData.payment_status_description === 'Completed') {
      await supabase
        .from('bookings')
        .update({ 
          status: 'confirmed',
          payment_status: 'paid',
          payment_reference: orderTrackingId 
        })
        .eq('id', orderNotificationId);

      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/success?booking=${orderNotificationId}`);
    } else {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/failed`);
    }

  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/payment/failed`);
  }
}
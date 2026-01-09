import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { bookingId, amount, email, firstName, lastName, phone } = await request.json();

    const pesapalUrl = 'https://cybqa.pesapal.com/pesapalv3/api';

    // Step 1: Get access token
    console.log('Requesting Pesapal token...');
    console.log('Consumer Key:', process.env.PESAPAL_CONSUMER_KEY);
    console.log('Consumer Secret:', process.env.PESAPAL_CONSUMER_SECRET?.substring(0, 10) + '...');
    
    const tokenResponse = await fetch(`${pesapalUrl}/Auth/RequestToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });

    const tokenData = await tokenResponse.json();
    console.log('Token response status:', tokenResponse.status);
    console.log('Token response data:', tokenData);
    
    if (!tokenData.token) {
      console.error('Failed to get token. Full response:', tokenData);
      throw new Error('Failed to get access token');
    }

    const accessToken = tokenData.token;

    // Step 2: Submit order
    const orderPayload = {
      id: bookingId,
      currency: 'KES',
      amount: amount,
      description: `Lubiri Resort Booking - ${bookingId.slice(0, 8)}`,
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/callback`,
      notification_id: bookingId,
      billing_address: {
        email_address: email,
        phone_number: phone,
        country_code: 'KE',
        first_name: firstName,
        last_name: lastName,
      },
    };

    const orderResponse = await fetch(`${pesapalUrl}/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderPayload),
    });

    const orderData = await orderResponse.json();

    if (!orderData.redirect_url) {
      throw new Error('Failed to get payment URL');
    }

    return NextResponse.json({
      success: true,
      redirect_url: orderData.redirect_url,
      order_tracking_id: orderData.order_tracking_id,
    });

  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate payment', details: String(error) },
      { status: 500 }
    );
  }
}
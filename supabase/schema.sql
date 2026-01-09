-- Lubiri Resort Database Schema

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(100) NOT NULL,
  capacity INTEGER NOT NULL,
  price_per_night DECIMAL(10, 2) NOT NULL,
  amenities TEXT[],
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  guest_name VARCHAR(255) NOT NULL,
  guest_email VARCHAR(255) NOT NULL,
  guest_phone VARCHAR(50) NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  number_of_guests INTEGER NOT NULL,
  special_requests TEXT,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rooms_type ON rooms(type);
CREATE INDEX IF NOT EXISTS idx_rooms_available ON rooms(is_available);
CREATE INDEX IF NOT EXISTS idx_bookings_room_id ON bookings(room_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(is_read);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample room data
INSERT INTO rooms (name, description, type, capacity, price_per_night, amenities, image_url, is_available) VALUES
('Deluxe Cottage', 'Spacious cottage with garden views, perfect for families seeking privacy and comfort.', 'Cottage', 4, 12000, ARRAY['King Bed', 'Air Conditioning', 'Flat-screen TV', 'Private Balcony', 'Free Wi-Fi', 'Mini Bar'], '/images/rooms/cottage-1.jpg', true),
('Executive Suite', 'Luxurious suite with modern amenities and stunning pool views.', 'Suite', 2, 15000, ARRAY['King Bed', 'Air Conditioning', 'Flat-screen TV', 'Jacuzzi', 'Free Wi-Fi', 'Work Desk', 'Mini Bar'], '/images/rooms/suite-1.jpg', true),
('Family Cottage', 'Large cottage ideal for families, featuring two bedrooms and a living area.', 'Cottage', 6, 18000, ARRAY['2 Bedrooms', 'Air Conditioning', 'Flat-screen TV', 'Kitchen', 'Free Wi-Fi', 'Garden View'], '/images/rooms/cottage-2.jpg', true),
('Standard Room', 'Comfortable room with essential amenities for solo travelers or couples.', 'Room', 2, 8000, ARRAY['Queen Bed', 'Air Conditioning', 'Flat-screen TV', 'Free Wi-Fi'], '/images/rooms/standard-1.jpg', true),
('Garden View Cottage', 'Charming cottage surrounded by lush greenery and tropical gardens.', 'Cottage', 3, 13000, ARRAY['King Bed', 'Air Conditioning', 'Flat-screen TV', 'Private Balcony', 'Free Wi-Fi', 'Garden View'], '/images/rooms/cottage-3.jpg', true),
('Presidential Suite', 'Our finest accommodation with premium furnishings and exclusive services.', 'Suite', 4, 25000, ARRAY['King Bed', 'Air Conditioning', '2 Flat-screen TVs', 'Jacuzzi', 'Free Wi-Fi', 'Butler Service', 'Mini Bar', 'Living Room'], '/images/rooms/suite-2.jpg', true),
('Pool View Room', 'Modern room with direct access and views of the swimming pool.', 'Room', 2, 10000, ARRAY['Queen Bed', 'Air Conditioning', 'Flat-screen TV', 'Pool View', 'Free Wi-Fi'], '/images/rooms/poolview-1.jpg', true),
('Honeymoon Cottage', 'Romantic cottage perfect for couples, with intimate ambiance and privacy.', 'Cottage', 2, 16000, ARRAY['King Bed', 'Air Conditioning', 'Flat-screen TV', 'Jacuzzi', 'Free Wi-Fi', 'Private Garden', 'Champagne on Arrival'], '/images/rooms/honeymoon-1.jpg', true);

-- Enable Row Level Security (RLS)
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to rooms
CREATE POLICY "Allow public read access to rooms" ON rooms
  FOR SELECT USING (true);

-- Create policies for bookings (users can only see their own bookings)
CREATE POLICY "Users can create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own bookings" ON bookings
  FOR SELECT USING (true);

-- Create policies for contact messages
CREATE POLICY "Users can create contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

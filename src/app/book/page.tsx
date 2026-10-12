import type {Metadata} from 'next';
import {BookingPreview} from '@/components/BookingPreview';

export const metadata: Metadata = {
  title: 'Booking Preview',
  description: 'Explore the Solace Aesthetics treatment menu in an illustrative booking preview. For real availability and appointments, continue to our live Ovatu booking page.',
  alternates: {canonical: '/book/'},
};

export default function BookPage() {
  return <BookingPreview/>;
}

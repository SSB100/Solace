import type {Metadata} from 'next';
import {CheckoutPreview} from '@/components/ShopPreview';

export const metadata: Metadata = {
  title: 'Checkout Preview',
  description: 'Review your Solace product selections in an illustrative checkout. No personal details, card information, real orders or payments.',
  alternates: {canonical: '/checkout/'},
};

export default function CheckoutPage() {
  return <CheckoutPreview/>;
}

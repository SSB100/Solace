import type {Metadata} from 'next';
import {CartPageContent} from '@/components/ShopPreview';

export const metadata: Metadata = {
  title: 'Demo Shopping Bag',
  description: 'Explore your Solace skincare and beauty selections in an on-site shop demo. No real orders or payments.',
  alternates: {canonical: '/cart/'},
};

export default function CartPage() {
  return <CartPageContent/>;
}

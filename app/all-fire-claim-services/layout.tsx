import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Fire Recovery Claim Services | LA Fire Recovery Law',
  description: 'Browse our complete list of specialized legal services for different groups affected by the LA wildfires. Find the information most relevant to your situation.',
  keywords: 'fire recovery services, wildfire claims, LA fire claims, fire damage attorneys, property damage, business interruption, lost wages, fire injury'
};

export default function AllFireClaimServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
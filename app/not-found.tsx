import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Unfortunately, we could not find your requested page or resource.',
};

export default function NotFound() {
  return (
    <div className={'not-found'}>
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find your requested page or resource.</p>
    </div>
  );
}

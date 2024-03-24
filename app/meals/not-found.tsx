import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Unfortunately, we could not find your requested meal data.',
};

export default function NotFound() {
  return (
    <div className={'not-found'}>
      <h1>Meal Not Found</h1>
      <p>Unfortunately, we could not find your requested meal data.</p>
    </div>
  );
}

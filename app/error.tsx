'use client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error',
  description: 'Error Occurred while fetching meal data.',
};

export default function Error() {
  return (
    <div className={'error'}>
      <h1>An Error Occurred!</h1>
      <p>Failed to fetch meal data, please try again!</p>
    </div>
  );
}

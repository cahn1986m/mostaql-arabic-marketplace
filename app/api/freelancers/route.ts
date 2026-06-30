import { NextResponse } from 'next/server';

const freelancers = Array.from({ length: 10 }).map((_, index) => ({
  name: `مستقل ${index + 1}`,
  title: 'مستقل محترف',
  rating: 95 + index * 0.5,
  country: 'مصر',
  isOnline: index % 2 === 0
}));

export async function GET() {
  return NextResponse.json(freelancers);
}

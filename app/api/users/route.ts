import { NextResponse } from 'next/server';

const users = Array.from({ length: 8 }).map((_, index) => ({
  id: `user-${index + 1}`,
  name: `مستقل ${index + 1}`,
  title: 'مطور مستقل',
  country: 'الاردن',
  rating: 4.7 + index * 0.05
}));

export async function GET() {
  return NextResponse.json(users);
}

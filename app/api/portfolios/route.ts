import { NextResponse } from 'next/server';

const portfolios = Array.from({ length: 12 }).map((_, index) => ({
  title: `عمل فني ${index + 1}`,
  likes: 10 + index * 5,
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
}));

export async function GET() {
  return NextResponse.json(portfolios);
}

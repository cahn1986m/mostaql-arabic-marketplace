import { NextResponse } from 'next/server';

const sampleProjects = Array.from({ length: 15 }).map((_, index) => ({
  id: `proj-${index + 1}`,
  title: `مشروع برمجي ${index + 1}`,
  author: `عميل ${index + 1}`,
  createdAt: `${index + 1} ساعة مضت`,
  proposals: 3 + index,
  description: 'وصف مختصر للمشروع يتضمن المهارات المطلوبة والنتيجة المتوقعة من المستقل.',
  category: ['برمجة', 'تصميم', 'تسويق'][index % 3]
}));

export async function GET() {
  return NextResponse.json(sampleProjects);
}

import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.portfolio.deleteMany();
  await prisma.proposal.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  const password = await bcrypt.hash('Mostaql2026!', 10);

  const freelancers = [
    { name: 'علي الهاشمي', email: 'ali@example.com', title: 'مطور ويب محترف', country: 'الإمارات', bio: 'بناء واجهات مستخدم حديثة وتجربة مستخدم عربية مميزة.', role: 'FREELANCER', rating: 4.9, isOnline: true, verified: true },
    { name: 'سارة الرفاعي', email: 'sara@example.com', title: 'مصممة UX/UI', country: 'مصر', bio: 'تصميم واجهات جذابة وسهلة الاستخدام للمنصات الرقمية.', role: 'FREELANCER', rating: 4.8, isOnline: false, verified: true },
    { name: 'خالد محمود', email: 'khaled@example.com', title: 'مطور تطبيقات موبايل', country: 'السعودية', bio: 'تطوير تطبيقات أندرويد و iOS بواجهات عربية احترافية.', role: 'FREELANCER', rating: 4.7, isOnline: true, verified: false },
    { name: 'هند علي', email: 'hind@example.com', title: 'كاتبة محتوى', country: 'لبنان', bio: 'كتابة محتوى عربي إبداعي ومتوافق مع معايير SEO.', role: 'FREELANCER', rating: 4.95, isOnline: true, verified: true },
    { name: 'يوسف الصالح', email: 'yousef@example.com', title: 'مسوق رقمي', country: 'الكويت', bio: 'إطلاق حملات إعلانية ناجحة وتحسين ظهور العلامات التجارية.', role: 'FREELANCER', rating: 4.6, isOnline: false, verified: true },
    { name: 'منى حسين', email: 'mona@example.com', title: 'مصممة جرافيك', country: 'الأردن', bio: 'تصاميم احترافية للهوية البصرية والإعلانات الرقمية.', role: 'FREELANCER', rating: 4.85, isOnline: true, verified: true },
    { name: 'أحمد جمال', email: 'ahmad@example.com', title: 'مهندس بيانات', country: 'تونس', bio: 'تحليل البيانات وبناء تقارير ذكية لاتخاذ قرارات أسرع.', role: 'FREELANCER', rating: 4.75, isOnline: false, verified: false },
    { name: 'ليلى حسن', email: 'laila@example.com', title: 'مترجمة محترفة', country: 'عمان', bio: 'ترجمة تقنية وإدارية بدقة وسرعة.', role: 'FREELANCER', rating: 4.7, isOnline: true, verified: true },
    { name: 'مصطفى أيوب', email: 'mostafa@example.com', title: 'مختص SEO', country: 'المغرب', bio: 'تحسين ترتيب الموقع في محركات البحث وزيادة الزيارات.', role: 'FREELANCER', rating: 4.65, isOnline: true, verified: false },
    { name: 'ريم فؤاد', email: 'reem@example.com', title: 'مصممة موشن جرافيك', country: 'الجزائر', bio: 'إنتاج فيديوهات قصيرة ورسوم متحركة جذابة.', role: 'FREELANCER', rating: 4.9, isOnline: false, verified: true },
    { name: 'عمر عيد', email: 'omer@example.com', title: 'مهندس برمجيات', country: 'البحرين', bio: 'تطوير تطبيقات ويب متكاملة باستخدام أحدث التقنيات.', role: 'FREELANCER', rating: 4.8, isOnline: true, verified: true },
    { name: 'نجوى سعيد', email: 'najwa@example.com', title: 'مختصة تجربة مستخدم', country: 'سوريا', bio: 'تصميم تجارب مستخدم عربية سلسة ومؤثرة.', role: 'FREELANCER', rating: 4.92, isOnline: false, verified: true },
    { name: 'طارق منصور', email: 'tareq@example.com', title: 'مطور full-stack', country: 'قطر', bio: 'بناء منصات تجارة إلكترونية ومواقع احترافية.', role: 'FREELANCER', rating: 4.82, isOnline: true, verified: false },
    { name: 'روان نجيب', email: 'rowan@example.com', title: 'مدربة محتوى', country: 'اليمن', bio: 'أنشئ محتوى تعليمي مميز ومخططات تدريب متكاملة.', role: 'FREELANCER', rating: 4.6, isOnline: false, verified: true },
    { name: 'جمال عبيد', email: 'jamal@example.com', title: 'مستشار أعمال', country: 'العراق', bio: 'خدمات استشارية لزيادة الإنتاجية وتحسين الأداء.', role: 'FREELANCER', rating: 4.55, isOnline: true, verified: false },
    { name: 'سلمى نصر', email: 'salma@example.com', title: 'مصممة واجهات', country: 'مصر', bio: 'تصميم واجهات عربية عصرية وسهلة الاستخدام.', role: 'FREELANCER', rating: 4.78, isOnline: true, verified: true },
    { name: 'عبد الرحمن الكيلاني', email: 'abdurahman@example.com', title: 'مطور ذكاء اصطناعي', country: 'السودان', bio: 'نماذج AI وتكامل تعلم الآلة في التطبيقات.', role: 'FREELANCER', rating: 4.7, isOnline: false, verified: true },
    { name: 'هدى شوقي', email: 'hoda@example.com', title: 'محللة تسويق', country: 'الأردن', bio: 'إدارة استراتيجيات تسويق ومتابعة الأداء الرقمي.', role: 'FREELANCER', rating: 4.63, isOnline: true, verified: false },
    { name: 'مريم حاتم', email: 'mariam@example.com', title: 'كاتبة محتوى تسويقي', country: 'مصر', bio: 'كتابة محتوى جذاب لحملات التواصل الاجتماعي.', role: 'FREELANCER', rating: 4.88, isOnline: false, verified: true },
    { name: 'سجاد رفيق', email: 'sajjad@example.com', title: 'مصمم علامة تجارية', country: 'الكويت', bio: 'هوية بصرية متكاملة من اللوجو إلى دليل الأسلوب.', role: 'FREELANCER', rating: 4.69, isOnline: true, verified: true }
  ];

  const createdUsers = await Promise.all(
    freelancers.map((user) =>
      prisma.user.create({
        data: {
          ...user,
          password,
          role: 'FREELANCER'
        }
      })
    )
  );

  const clients = [
    {
      name: 'شركة الريادة',
      email: 'client1@example.com',
      title: 'عميل',
      country: 'السعودية',
      bio: 'نسعى لتنفيذ مشاريع تقنية مبتكرة.',
      role: 'CLIENT'
    },
    {
      name: 'مجموعة النخبة',
      email: 'client2@example.com',
      title: 'عميل',
      country: 'مصر',
      bio: 'نبحث عن مستقلين موهوبين لتطوير أعمالنا.',
      role: 'CLIENT'
    }
  ];

  const createdClients = await Promise.all(
    clients.map((user) =>
      prisma.user.create({
        data: {
          ...user,
          password,
          role: 'CLIENT'
        }
      })
    )
  );

  const categories = [
    'برمجة', 'تصميم', 'تسويق', 'كتابة', 'أعمال', 'هندسة', 'ذكاء اصطناعي', 'دعم', 'تدريب'
  ];

  const projectTemplates = [
    {
      title: 'تطوير موقع إلكتروني لشركة ناشئة',
      description: 'موقع مخصص للشركة يشمل صفحة رئيسية، خدمات، اتصال ونموذج تواصل.',
      category: 'برمجة',
      skills: ['Next.js', 'React', 'Tailwind'],
      budgetMin: 500,
      budgetMax: 1200,
      duration: '1-2 أسابيع'
    },
    {
      title: 'تصميم هوية بصرية كاملة',
      description: 'شعار، بطاقات عمل، كتيب صغير وتصميم سوشيال ميديا.',
      category: 'تصميم',
      skills: ['Photoshop', 'Illustrator', 'Branding'],
      budgetMin: 250,
      budgetMax: 700,
      duration: '2 أسابيع-شهر'
    },
    {
      title: 'كتابة محتوى مدونة احترافية',
      description: 'كتابة مقالات SEO ومحتوى موقع متوافق مع العلامة التجارية.',
      category: 'كتابة',
      skills: ['SEO', 'كتابة عربية', 'تحرير المحتوى'],
      budgetMin: 150,
      budgetMax: 400,
      duration: 'أقل أسبوع'
    },
    {
      title: 'إطلاق حملة تسويق رقمي على فيسبوك',
      description: 'إنشاء استراتيجية إعلانات وتحسين الحملات للوصول للمستخدمين.',
      category: 'تسويق',
      skills: ['Facebook Ads', 'Analytics', 'Copywriting'],
      budgetMin: 300,
      budgetMax: 900,
      duration: '1-2 أسابيع'
    },
    {
      title: 'تصميم تجربة مستخدم لتطبيق موبايل',
      description: 'دراسة واجهة المستخدم وتصميم شاشات تفاعلية عالية الجودة.',
      category: 'هندسة',
      skills: ['Figma', 'UX', 'UI'],
      budgetMin: 400,
      budgetMax: 1000,
      duration: '2 أسابيع-شهر'
    }
  ];

  const projects = Array.from({ length: 30 }).map((_, index) => {
    const template = projectTemplates[index % projectTemplates.length];
    const author = createdClients[index % createdClients.length];
    return {
      title: `${template.title} (${index + 1})`,
      description: template.description,
      category: template.category,
      skills: template.skills.join(', '),
      budgetMin: template.budgetMin,
      budgetMax: template.budgetMax,
      duration: template.duration,
      authorId: author.id
    };
  });

  const createdProjects = await Promise.all(
    projects.map((project) => prisma.project.create({ data: project }))
  );

  await Promise.all(
    createdProjects.slice(0, 20).map((project, index) =>
      prisma.proposal.create({
        data: {
          amount: project.budgetMin + 100,
          duration: project.duration,
          coverLetter: 'يسعدني تقديم عرض لهذا المشروع مع خبرتي في المجال.',
          projectId: project.id,
          freelancerId: createdUsers[index % createdUsers.length].id
        }
      })
    )
  );

  const portfolios = [
    { title: 'واجهة تطبيق مالي', category: 'تصميم', likes: 120, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
    { title: 'منصة تجارة إلكترونية', category: 'برمجة', likes: 98, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' },
    { title: 'شعار شركة تقنية', category: 'تصميم', likes: 75, image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7' },
    { title: 'خطة تسويق رقمي', category: 'تسويق', likes: 54, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0' },
    { title: 'تقارير بيانات تفاعلية', category: 'هندسة', likes: 88, image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514' },
    { title: 'محتوى مدونة SEO', category: 'كتابة', likes: 43, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' },
    { title: 'دورة تدريبية عن القيادة', category: 'تدريب', likes: 66, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
    { title: 'استراتيجية الذكاء الاصطناعي', category: 'ذكاء اصطناعي', likes: 31, image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3' },
    { title: 'دعم فني للموقع', category: 'دعم', likes: 22, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
    { title: 'أرشفة الوثائق الإدارية', category: 'أعمال', likes: 39, image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454' },
    { title: 'تصميم إعلان فيديو', category: 'تصميم', likes: 54, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { title: 'نموذج بيانات متقدم', category: 'هندسة', likes: 66, image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3' },
    { title: 'خدمات ترجمة احترافية', category: 'كتابة', likes: 47, image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454' },
    { title: 'إدارة حملات بريدية', category: 'تسويق', likes: 29, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2' },
    { title: 'ورشة عمل تدريبية', category: 'تدريب', likes: 58, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' }
  ];

  await Promise.all(
    portfolios.map((portfolio, index) =>
      prisma.portfolio.create({
        data: {
          ...portfolio,
          userId: createdUsers[index % createdUsers.length].id
        }
      })
    )
  );

  const reviews = [
    { comment: 'عمل احترافي ونتيجة رائعة، أنصح بالتعاون مرة أخرى.', rating: 5 },
    { comment: 'تواصل ممتاز وتسليم في الوقت المحدد.', rating: 5 },
    { comment: 'خبرة جيدة وجودة عالية في التنفيذ.', rating: 4 },
    { comment: 'المشروع تم تنفيذه بشكل متقن ودقيق.', rating: 5 },
    { comment: 'فهم سريع للاحتياجات وسهل التعامل معه.', rating: 5 },
    { comment: 'مدروس ومنظم في العمل، تجربة جيدة.', rating: 4 }
  ];

  await Promise.all(
    reviews.map((review, index) =>
      prisma.review.create({
        data: {
          ...review,
          giverId: createdClients[index % createdClients.length].id,
          receiverId: createdUsers[index % createdUsers.length].id
        }
      })
    )
  );

  console.log('Seed data created successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

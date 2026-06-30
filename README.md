# مستقل - منصة العمل الحر العربية

منصة عمل حر عربية مبنية باستخدام Next.js 14 App Router، TypeScript، Tailwind CSS، Prisma مع SQLite، وNextAuth.

## الميزات

- RTL كامل باللغة العربية
- صفحات مشاريع، مستقلين، معرض أعمال، تصنيفات، مؤسسة، تسجيل الدخول، إنشاء حساب، إضافة مشروع، تفاصيل مشروع، ملف مستقل
- مكونات شاملة مثل Navbar، Footer، بطاقة مشروع، بطاقة مستقل، فلتر الشريط الجانبي، تقييم النجوم، قائمة التصنيفات، أكوردين الأسئلة
- قاعدة بيانات Prisma مع SQLite للنسخة المحلية
- NextAuth للمصادقة
- صفحات ثابتة للسياسات والمعلومات

## المتطلبات

- Node.js 20 أو أحدث
- npm أو pnpm

## التثبيت المحلي

1. انسخ المشروع إلى جهازك:

   ```bash
   git clone <repo-url>
   cd وظفني
   ```

2. ثبت التبعيات:

   ```bash
   npm install
   ```

3. أنشئ ملف البيئة:

   ```bash
   cp .env.example .env
   ```

4. اضبط المتغيرات في `.env` إذا لزم الأمر:

   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="YOUR_SECRET"
   ```

5. ادفع مخطط Prisma إلى SQLite:

   ```bash
   npm run db:push
   ```

6. شغّل بيانات التجربة:

   ```bash
   npm run db:seed
   ```

7. شغّل التطبيق محلياً:

   ```bash
   npm run dev
   ```

## نشر على GitHub

1. أنشئ مستودعاً جديداً على GitHub.
2. أضف الملفات وادفع التغييرات:

   ```bash
   git init
   git add .
   git commit -m "Initial commit - منصة مستقل عربية"
   git branch -M main
   git remote add origin <github-repo-url>
   git push -u origin main
   ```

## نشر على Vercel

1. سجّل الدخول إلى [Vercel](https://vercel.com) واربط حساب GitHub.
2. أنشئ مشروع جديد واختر المستودع.
3. تأكد من إضافة متغيرات البيئة:
   - `DATABASE_URL` = `file:./dev.db` (للتجريب محلياً عادة لا تستخدم SQLite في الإنتاج)
   - `NEXTAUTH_URL` = `https://<your-vercel-domain>`
   - `NEXTAUTH_SECRET` = قيمة سرية قوية
4. نفّذ نشر المشروع.

## سكريبتات مهمة

- `npm run dev` - تشغيل التطبيق محلياً
- `npm run build` - بناء التطبيق
- `npm run start` - تشغيل التطبيق بعد البناء
- `npm run db:push` - دفع مخطط Prisma إلى SQLite
- `npm run db:seed` - إضافة بيانات تجربة
- `npm run db:studio` - فتح Prisma Studio

## ملاحظات

- يمكن تعديل البيانات المنقولة في `prisma/seed.ts` إذا رغبت في إضافة بيانات عربية أكثر.
- لإنشاء صور مخصصة، يمكن استخدام Midjourney مع وصف عربي مناسب للصفحة أو المشروع.

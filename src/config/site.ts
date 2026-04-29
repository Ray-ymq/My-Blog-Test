export const siteConfig = {
  title: '我的个人博客',
  author: '你的名字',
  description: '记录技术、项目和长期思考的个人空间。',
  siteUrl: 'https://example.com',
  avatar: '/avatar.svg',
  nav: [
    { label: '首页', href: '/' },
    { label: '文章', href: '/blog' },
    { label: '关于', href: '/about' }
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-name' },
    { label: 'Email', href: 'mailto:you@example.com' }
  ]
} as const;

import { lazy } from 'react';

interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

interface BlogPost {
  slug: string;
  frontmatter: Frontmatter;
  content: React.ComponentType;
}

const posts: BlogPost[] = [
  {
    slug: 'border-security-challenges-2024',
    frontmatter: {
      title: 'Border Security Challenges in 2024',
      date: '2024-03-15',
      excerpt: 'An analysis of current border security challenges and proposed solutions.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80'
    },
    content: lazy(() => import('../posts/border-security-challenges-2024.mdx'))
  },
  {
    slug: 'technology-border-patrol',
    frontmatter: {
      title: 'Advanced Technology in Modern Border Patrol',
      date: '2024-03-10',
      excerpt: 'How technology is revolutionizing border security operations.',
      image: 'https://images.unsplash.com/photo-1580752300992-559f8e0734e0?auto=format&fit=crop&q=80'
    },
    content: lazy(() => import('../posts/technology-border-patrol.mdx'))
  },
  {
    slug: 'community-impact',
    frontmatter: {
      title: 'Impact on Border Communities',
      date: '2024-03-05',
      excerpt: 'Understanding the effects of border policies on local communities.',
      image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80'
    },
    content: lazy(() => import('../posts/community-impact.mdx'))
  }
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
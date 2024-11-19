import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { getPostBySlug } from '../lib/blog';
import LoadingSpinner from './LoadingSpinner';
import { ErrorBoundary } from './ErrorBoundary';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  const Content = post.content;

  return (
    <div className="py-24 bg-gray-50">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {post.frontmatter.image && (
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.frontmatter.title}
        </h1>
        <div className="text-gray-500 mb-8">
          {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
        </div>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <div className="prose prose-lg max-w-none">
              <Content />
            </div>
          </Suspense>
        </ErrorBoundary>
      </article>
    </div>
  );
}
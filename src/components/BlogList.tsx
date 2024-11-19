import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { getAllPosts } from '../lib/blog';

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Updates</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <Link to={`/blog/${post.slug}`}>
                {post.frontmatter.image && (
                  <img
                    src={post.frontmatter.image}
                    alt={post.frontmatter.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.frontmatter.title}
                </h2>
                <div className="text-sm text-gray-500 mb-4">
                  {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
                </div>
                <p className="text-gray-600">{post.frontmatter.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium">Read more →</div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
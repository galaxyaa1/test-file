import React from 'react';
import './Blog.css';

interface BlogPostProps {
  title: string;
  date: string;
  tags: string;
  content: string;
}

const BlogPostItem: React.FC<BlogPostProps> = ({ title, date, tags, content }) => (
  <div className="blog-post">
    <h2 className="blog-post-title">{title}</h2>
    <div className="blog-post-details">
      <span className="blog-post-date">{date}</span>
      <span className="separator">|</span>
      <span className="blog-post-tags">{tags}</span>
    </div>
    <p className="blog-post-content">{content}</p>
  </div>
);

const BlogPost: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: 'UI Interactions of the Week',
      date: '12 Feb 2019',
      tags: 'Express, Handlebars',
      content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      title: 'Understanding React Lifecycle',
      date: '13 Feb 2019',
      tags: 'React, JavaScript',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    {
      title: 'CSS Grid Layout',
      date: '14 Feb 2019',
      tags: 'CSS, Grid',
      content: 'Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },
    {
      title: 'JavaScript ES6 Features',
      date: '15 Feb 2019',
      tags: 'JavaScript, ES6',
      content: 'Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.'
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogPostItem
          key={index}
          title={post.title}
          date={post.date}
          tags={post.tags}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default BlogPost;

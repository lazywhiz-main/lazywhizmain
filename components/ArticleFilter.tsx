'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Article = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
};

type ArticleFilterProps = {
  articles: Article[];
  categories: string[];
};

export default function ArticleFilter({ articles, categories }: ArticleFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // フィルタリングされた記事
  const filteredArticles = selectedCategory === 'すべて' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      {/* フィルター */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-lg shadow-sm hover:shadow transition-all ${
              selectedCategory === category 
                ? 'bg-brand-500 text-white' 
                : 'bg-white hover:bg-brand-200 text-text-high border border-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* 記事リスト */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-brand-200 text-brand-600 px-3 py-1 text-xs rounded-full font-medium">
                  {article.category}
                </span>
                <span className="text-xs text-text-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-high">{article.title}</h3>
              <p className="mb-6 text-text-medium">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-medium">{article.date}</span>
                <Link 
                  href={`/toolkit/${article.id}`}
                  className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
                >
                  <span>続きを読む</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 
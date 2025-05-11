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
  isRecommended?: boolean;
  isNew?: boolean;
};

type ArticleFilterProps = {
  articles: Article[];
  categories: string[];
};

// フィルターボタンコンポーネントを分離（クライアントコンポーネント）
const FilterButton = ({
  category,
  isSelected,
  onClick
}: {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-lg hover:shadow transition-all font-ui ${
      isSelected 
        ? 'bg-brand-500 text-white' 
        : 'bg-white hover:bg-brand-200 text-text-high border border-neutral-200'
    }`}
  >
    {category}
  </button>
);

export default function ArticleFilter({ articles, categories }: ArticleFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  // フィルタリングされた記事
  const filteredArticles = selectedCategory === 'すべて' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      {/* フィルター */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, index) => (
          <FilterButton
            key={index}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      
      {/* 記事リスト */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredArticles.map((article) => (
          <div 
            key={article.id} 
            className={
              article.isRecommended ? 'card-highlighted' :
              article.isNew ? 'card-new' : 'card'
            }
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-brand-200 text-brand-600 px-3 py-1 text-xs rounded-full font-ui">
                  {article.category}
                </span>
                <span className="text-xs text-text-medium flex items-center font-ui">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-heading mb-3 text-text-high">{article.title}</h3>
              <p className="mb-4 text-text-medium font-body">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-medium font-ui">{article.date}</span>
                <Link 
                  href={`/toolkit/${article.id}`}
                  className={`inline-flex items-center font-ui ${
                    article.isRecommended ? 'text-orange-300 hover:text-orange-600' :
                    article.isNew ? 'text-coral-500 hover:text-coral-600' :
                    'text-brand-500 hover:text-brand-600'
                  }`}
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
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/lib/constants';

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = useTranslations('gallery');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Gallery filters">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px]
              ${activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-surface-card dark:bg-surface-dark-card text-text-dark dark:text-text-light hover:bg-primary/10'
              }`}
          >
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="tabpanel">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden group"
          >
            <div
              className="h-52 lg:h-60 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
              style={{ backgroundColor: `${item.color}20` }}
              role="img"
              aria-label={t(`items.${item.id - 1}.title`)}
            >
              <div className="text-center p-4">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}30` }}
                >
                  <svg className="w-6 h-6" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} strokeWidth={2} />
                    <circle cx={8.5} cy={8.5} r={1.5} strokeWidth={2} />
                    <polyline points="21 15 16 10 5 21" strokeWidth={2} />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: item.color }}>
                  {t(`items.${item.id - 1}.title`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

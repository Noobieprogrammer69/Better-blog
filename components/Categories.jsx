import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="border__bg shadow__bg shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl bg__color-for_recent mb-8 font-semibold border-b pb-4">
            Categories
        </h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='bg__color'>
                  {category.name}
              </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories
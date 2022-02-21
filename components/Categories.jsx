import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services'

const Categories = ({ index }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="border__bg shadow__bg shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl bg__color-for_recent mb-8 font-semibold border-b pb-4">
            Categories
        </h3>
        {categories.map((category) => (
            <Link key={index} href={`/category/${category.slug}`}>
                <span className={`cursor-pointer block bg__color-categories_recent ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
            </Link>
        ))}
    </div>
  )
}

export default Categories
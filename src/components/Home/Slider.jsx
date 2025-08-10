import React from 'react'
import blogData from '@/assets/data/blogData';
import SliderCard from './SliderCard';

const BlogSlider = () => {
  return (
    <div className='mt-5 w-75 blog-slider-container'>
      <h3>Recent Blogs</h3>
      <hr/>
      <div className='d-flex flex-row gap-3 blog-slider'>
        {blogData.map((post) => (
          <SliderCard key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default BlogSlider
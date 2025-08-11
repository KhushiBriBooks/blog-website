import React from 'react'
import blogData from '@/assets/data/blogData';
import SliderCard from './SliderCard';
import { Container } from 'react-bootstrap';

const BlogSlider = () => {
  return (
    <Container className='mt-5'>
      <h3>Recent Blogs</h3>
      <hr/>
      <div className='d-flex flex-row gap-3 blog-slider'>
        {blogData.map((post) => (
          <SliderCard key={post.id} post={post}/>
        ))}
      </div>
    </Container>
  )
}

export default BlogSlider
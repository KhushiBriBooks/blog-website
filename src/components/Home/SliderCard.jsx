import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SliderCard = ({ post }) => {
    const blogTitle = post.title;
    const postTitle = blogTitle.slice(0 , 50) + "....";
    
    return (
        <div className='d-flex flex-column align-items-center blog-slider-card p-3'>
            <div className='position-relative slider-blog-image border'>
                <Image
                src={post.images[0]}
                alt='Blog Image'
                fill
                style={{objectFit: "cover", borderRadius: "50%"}}
            />
            </div>
            <div className="slider-card-content"> 
                <Link href={`/blog/${post.slug}`} className='text-dark fs-5 fw-bold text-decoration-none flex-nowrap blog-title'>{postTitle}</Link>
                <p className='blog-excerpt'>{post.excerpt}</p>
            <hr />
            <div className='d-flex flex-row p-2 gap-2 tag-chips-container'>
                {post.tags.map((tag, idx) => (
                    <span key={idx} className='tag-chips p-2 badge badge-pill'>
                        #{tag}
                    </span>
                ))}
            </div>
            </div>
        </div>
    )
}

export default SliderCard
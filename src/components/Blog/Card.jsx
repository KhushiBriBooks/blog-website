import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post }) => {
    return (
        <div className='w-100 border rounded d-flex flex-row gap-4 p-3 blog-card'>
            <Image
                src={post.images[0]}
                alt='blog image'
                width={300}
                height={200}
                className='blog-card-image'
            />
            <div className='blog-card-content'>
                <h3>
                    <Link href={`/blog/${post.slug}`} className='text-dark fs-4 text-decoration-none blog-title'>{post.title}</Link>
                </h3>
                <div className="d-flex align-items-center">
                    <Image
                        src="/images/author.jpg"
                        alt="author"
                        width={30}
                        height={30}
                        className="rounded-circle me-2"
                    />
                    <div>
                        <div className="fw-bold">{post.author}</div>
                        <small>{post.date}</small>
                    </div>
                </div>
                <p>{post.excerpt}</p>
                <div className="mt-3 d-flex flex-row p-2 gap-2">
                    {post.tags.map((tag, idx) => (
                        <span key={idx} className='tag-chips p-2 badge badge-pill'>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogCard
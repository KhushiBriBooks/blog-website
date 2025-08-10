import blogData from "@/assets/data/blogData";
import Subscription from "@/components/Blog/Subscription";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="p-5">Blog not found.</p>;
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="container py-5 d-flex flex-column flex-lg-row gap-5 ">
        <div className="w-75 ms-5 blog-slug-container">
          <h1 className="mb-3">{blog.title}</h1>

          <div className="d-flex align-items-center gap-3 mb-3">
            <Image
              src="/images/author.jpg"
              alt={blog.author}
              width={50}
              height={50}
              className="rounded-circle"
            />
            <div>
              <p className="mb-0 fw-bold">{blog.author}</p>
              <small className="text-muted">{formattedDate}</small>
            </div>
          </div>

          <div className="mb-4">
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge bg-secondary me-2"
                style={{ backgroundColor: "#b98c5e" }}
              >
                # {tag}
              </span>
            ))}
          </div>

          <Image
            src={blog.images[0]}
            alt={blog.title}
            width={800}
            height={500}
            className="img-fluid mb-3"
          />
          <p className="lead">{blog.excerpt}</p>
          {blog.content.slice(0, 2).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <Image
            src={blog.images[1]}
            alt={blog.title}
            width={800}
            height={500}
            className="img-fluid my-3"
          />

          {blog.content.slice(2).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

          <Subscription />
      </div>
    </Layout>
  );
}

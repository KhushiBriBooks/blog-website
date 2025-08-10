import BlogClient from "@/components/Blog/BlogClient";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Blogs",
  description: "All Blogs are listed here",
};

const Blog = () => {
  return (
    <Layout title={metadata.title} description={metadata.description}>
      <BlogClient />
    </Layout>
  );
};

export default Blog;

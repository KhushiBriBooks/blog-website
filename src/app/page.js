import SubscribeSection from "@/components/Home/SubscribeSection";
import './globals.css';
import BlogSlider from "@/components/Home/Slider";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Home",
  description: "Landing Page"
}

export default function Home() {
  return (
    <Layout title={metadata.title} description={metadata.description}>
    <div>
      <HeroSection />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <BlogSlider />
        <SubscribeSection />
      </div>
    </div>
    </Layout>
  );
}

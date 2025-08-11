import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import React from 'react'
import { Button } from 'react-bootstrap'

export const metadata = {
  title: "About us",
  description: "Learn more about us"
}

const About = () => {
    return (
        <Layout title={metadata.title} description={metadata.description}>
            <div className='d-flex flex-row justify-content-center align-items-center gap-3 mt-5 mb-5 about-section'>
                <Image
                    src="/images/about-image.jpeg"
                    alt="author image"
                    width={450}
                    height={500}
                    className='ms-4'
                />
                <div className='w-50 ms-5 about-section-content'>
                    <h2 className='mb-5 fw-bold fs-1'>Our Story</h2>
                    <p>Dolor cupidatat pariatur mollit consequat magna labore elit eiusmod magna. Eiusmod excepteur voluptate quis id veniam. Occaecat eu nisi officia sint pariatur do aute minim est in in eu laboris. Elit ipsum pariatur et consectetur duis. Eiusmod amet aliqua labore proident. Voluptate elit qui non esse excepteur pariatur qui fugiat magna laboris id ex eiusmod.</p>
                    <p> Consectetur commodo labore culpa ut veniam cupidatat id et Lorem qui incididunt. Commodo officia labore exercitation labore id mollit sit consectetur non nostrud velit dolore id culpa. Excepteur exercitation aute veniam quis sit ut laboris exercitation veniam. Do aliquip amet dolor ad adipisicing laborum fugiat elit et. Id aute est aute laborum ad dolor. Sunt aliquip qui fugiat magna cupidatat nostrud labore incididunt incididunt nulla.</p>
                    <Button className='explore-btn'>Explore More</Button>
                </div>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center gap-3 mt-5 mb-5 about-section-2'>
                <div className='w-50 me-5 about-section-content'>
                    <h2 className='mb-5 fw-bold fs-1'>My Cookbook</h2>
                    <p>Ad proident ea voluptate exercitation reprehenderit deserunt aute consectetur veniam voluptate. In elit laborum labore et reprehenderit velit quis. Nulla excepteur exercitation officia in. Fugiat commodo culpa consequat voluptate nisi commodo excepteur ipsum. Duis anim in aute veniam nulla quis incididunt qui cillum aute non officia adipisicing minim. Ex dolore ex ad aute non tempor ea enim fugiat ea excepteur dolore. Amet qui deserunt sunt tempor aute sint do.</p>
                    <p>Consectetur ea ex et labore tempor ea et est veniam esse magna quis ex. Anim reprehenderit dolore ullamco et commodo nulla adipisicing exercitation occaecat ex qui cupidatat minim. Anim occaecat minim excepteur duis dolor. Elit eu cillum commodo dolor ullamco nostrud.</p>
                </div>

                <Image 
                src="/images/cookbook.jpg"
                alt="cookbook image"
                width={400}
                height={500}
                />
            </div>
        </Layout>
    )
}

export default About
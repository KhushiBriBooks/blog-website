'use client'
import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaBowlFood } from 'react-icons/fa6';
import BlogCard from './Card';
import blogData from "@/assets/data/blogData";
import Subscription from './Subscription';

const BlogClient = () => {
 const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogData);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(blogData);
    } else {
      const lowerCaseInput = searchTerm.toLowerCase();
      const results = blogData.filter((post) => {
        const title = post.title.toLowerCase().includes(lowerCaseInput);
        const tags = post.tags?.find((tag) =>
          tag.toLowerCase().includes(lowerCaseTerm)
        );

        return title || tags;
      });
      setFilteredPosts(results);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(blogData);
    }
  }, [searchTerm]);

  return (
      <div className="d-flex flex-column gap-3 p-3">
        <div className="d-flex gap-2 flex-wrap justify-content-center mb-4 mt-4">
          <InputGroup className="w-lg-50 w-75">
            <InputGroup.Text>
              <FaBowlFood />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-2"
            />
            <Button onClick={handleSearch} className="search-btn">
              Search
            </Button>
          </InputGroup>
        </div>

        <div className="d-flex flex-column flex-lg-row gap-4">
          <div className="d-flex flex-column gap-4 w-75 ms-5 blog-card-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <p className="fw-bold fs-3">No blog posts found.</p>
            )}
          </div>

          <Subscription />
        </div>
      </div>
  );
}

export default BlogClient
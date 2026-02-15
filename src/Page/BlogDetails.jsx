
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import Blogs from "../components/Blogs";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found</div>;

  return (
<div>
      <div className="px-[16px] 2xl:px-[32px] pt-[40px]">

      {/* Go Back */}
      <div
        className="flex items-center gap-2 cursor-pointer mb-[32px]"
        onClick={() => navigate(-1)}
      >
        <span className="text-[16px] font-semibold">← Go Back</span>
      </div>

      {/* ===== TOP TITLE SECTION ===== */}
      <div className="max-w-[1000px] mx-auto text-center mb-[40px]">
        <h1 className="text-[32px] 2xl:text-[50px] font-semibold text-[#1D0B01] mb-[16px]">
          {blog.title}
        </h1>

       <div className="flex items-center justify-center gap-[16px] text-[#282828] text-[18px]">
         <p className="">
  {blog.date} 
</p>
<span> • </span>
<p> {blog.readTime}</p>
       </div>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="max-w-[1100px] mx-auto mb-[60px]">
        <img
          src={blog.product}
          alt={blog.title}
          className="w-full rounded-[24px] object-cover h-[288px] md:h-[505px] lg:h-[560px]"
        />
      </div>

      {/* ===== MAIN CONTENT AREA ===== */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[70px]">

        {/* ===== TABLE OF CONTENTS (LEFT SIDE) ===== */}
        <div className="hidden lg:block sticky top-[150px] h-fit">
          <h3 className="text-[25px] md:text-[32px] font-semibold mb-[20px] text-[#282828]">
            Table of Contents
          </h3>

          <ul className="space-y-[12px] text-[18px] text-[#3A3F42]">
            {blog.content.map((section, index) => (
              <li key={index} className="cursor-pointer hover:text-[#1D0B01]">
                {index + 1}. {section.heading}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== BLOG CONTENT (RIGHT SIDE) ===== */}
        <div className="lg:col-span-2 space-y-[60px]">
          {blog.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-[26px] 2xl:text-[34px] font-semibold text-[#282828] mb-[24px]">
                {section.heading}
              </h2>

              <p className="text-[#282828] text-[16px] 2xl:text-[18px] leading-relaxed mb-[24px]">
                {section.text}
              </p>

              {section.subText && (
                <p className="text-[#282828] text-[16px] 2xl:text-[18px] leading-relaxed mb-[24px]">
                  {section.subText}
                </p>
              )}

              {section.img && (
                <img
                  src={section.img}
                  alt={section.heading}
                  className="w-full rounded-[20px] object-cover mt-[32px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Related Blogs */}
      <div className="mt-[80px]">
        <Blogs />
      </div>
</div>
  );
};


export default BlogDetails;

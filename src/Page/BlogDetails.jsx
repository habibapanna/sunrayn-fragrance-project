
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";


const BlogDetails = () => {
     const navigate = useNavigate();
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="px-[16px] 2xl:px-[32px] py-[32px]">
<div className="flex gap-[10px] cursor-pointer">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0013 15.8327L4.16797 9.99935L10.0013 4.16602" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.8346 10H4.16797" stroke="#282828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            <button className="text-16px cursor-pointer font-semibold"
            onClick={() => navigate(-1)}>Go Back</button></div>
      {/* Hero Section */}
      <section className="2xl:max-w-[800px] mx-auto grid grid-cols-1 gap-[50px] items-center">
        <img
          src={blog.product}
          alt={blog.title}
          className="rounded-[20px] w-full 2xl:w-[800px] 2xl:h-[500px] object-cover"
        />

        <div className="mt-[32px]">
          <h1 className="text-[#1D0B01] mb-[48px] text-[32px] 2xl:text-[40px] text-center">
            {blog.title}
          </h1>
        <div className="border mb-[48px] border-[#282828]/25"></div>
          <p className="text-[#282828] text-[16px] lg:text-[18px]">
            {blog.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="2xl:max-w-[800px] mx-auto space-y-[48px] mt-[48px]">
       {blog.content.map((section, index) => (
  <div key={index} className="mb-[48px]">
    <h2 className="text-[28px] 2xl:text-[35px] text-[#1D0B01] mb-[32px]">
      {section.heading}
    </h2>
    <p className="text-[#282828] text-[16px] 2xl:text-[18px] leading-relaxed mb-[16px]">
      {section.text}
    </p>
    <p className="text-[#282828] text-[16px] 2xl:text-[18px] leading-relaxed mb-[16px]">
      {section.subText}
    </p>

    {/* Show image if exists */}
    {section.img && (
      <img
        src={section.img}
        alt={section.heading}
        className="rounded-[20px] w-full 2xl:w-[800px] object-cover mt-[32px]"
      />
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default BlogDetails;

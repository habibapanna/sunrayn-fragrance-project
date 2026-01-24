import React from "react";
import Call from '../assets/Frame (9).png'
import Email from '../assets/Frame (10).png'
import Location from '../assets/Frame (11).png'
import Upload from '../assets/Upload.png'

const Contact = () => {
  return (
    <div className="bg-white px-[32px]  py-[64px]">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-[32px] lg:text-[50px] text-[#282828] font-semibold mb-3">We’re Here to Help</h1>
        <p className="text-[#282828] text-[18px] lg:text-[20px] max-w-xl mx-auto">
          Have a question about our fragrances or your order? Our team is happy
          to help and will get back to you shortly.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-[#F6F7F2]  rounded-3xl p-10">
          <h2 className="text-[25px] lg:text-[32px] font-semibold mb-2 text-[#1D0B01]">Contact SANRAYN</h2>
          <p className="text-[#282828] mb-8 text-[16px]">
            Our team is ready to assist with questions, support needs, and new
            project requested.
          </p>

          <div className="space-y-6 text-[#282828]">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <img src={Call} alt="" />
              </div>
              <div>
                <p className=" text-[15px]">Call Us</p>
                <p className="font-medium text-[16px]">+1 (555) 682-9147</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <img src={Email} alt="" />
              </div>
              <div>
                <p className="text-[15px]">Email Us</p>
                <p className="font-medium text-[16px]">support@sanrayn.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <img src={Location} alt="" />
              </div>
              <div>
                <p className="text-[15px]">Location</p>
                <p className="font-medium text-[16px]">
                  1234 Serenity Blvd, Suite 210, LA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#FAFAF7] rounded-3xl p-10 text-[16px]">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="label">
                <span className="label-text text-[#231F20]">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Steve Henry"
                className="input input-bordered w-full rounded-full  text-[#282828]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text  text-[#231F20]">Email</span>
              </label>
              <input
                type="email"
                placeholder="info@yourmail.com"
                className="input input-bordered w-full rounded-full"
              />
            </div>

            {/* Attachments */}
            <div>
              <label className="label">
                <span className="label-text  text-[#231F20]">Attachments</span>
              </label>
              <div className="border-2 border-dashed rounded-2xl p-8 text-center border-[#282828]/20 hover:bg-gray-50 cursor-pointer transition">
                <img src={Upload} alt="" className="mx-auto" />
                <p className="text-[#282828]">Upload or drag files</p>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text  text-[#231F20]">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full rounded-2xl min-h-[120px]  text-[#282828]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full py-[l4px] px-[16px] font-bold rounded-full bg-[#DBAB35] text-[#1D0B01] border-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

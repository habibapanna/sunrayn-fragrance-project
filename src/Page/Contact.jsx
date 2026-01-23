import React from "react";
import { Phone, Mail, MapPin, Upload } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white  px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-[50px] text-[#282828] font-semibold mb-3">We’re Here to Help</h1>
        <p className="text-[#282828] text-[20px] max-w-xl mx-auto">
          Have a question about our fragrances or your order? Our team is happy
          to help and will get back to you shortly.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-[#F6F7F2] text-black rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-2">Contact SANRAYN</h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to assist with questions, support needs, and new
            project requested.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-medium">+1 (555) 682-9147</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-medium">support@sanrayn.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">
                  1234 Serenity Blvd, Suite 210, LA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#FAFAF7] text-black rounded-3xl p-10">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Steve Henry"
                className="input input-bordered w-full rounded-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Attachments</span>
              </label>
              <div className="border-2 border-dashed rounded-2xl p-8 text-center hover:bg-gray-50 cursor-pointer transition">
                <Upload className="mx-auto mb-2 text-gray-500" />
                <p className="text-gray-500">Upload or drag files</p>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full rounded-2xl min-h-[120px]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-full rounded-full bg-[#E1B23A] hover:bg-[#d1a531] text-black border-none"
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

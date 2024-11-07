import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="w-4/5 h-4/5 mt-4 px-6 border-2 border-pink-500 rounded-xl shadow-lg text-center mx-10 bg-white">
        {/* 标题 */}
        <div className="flex justify-center flex-col lg:pb-10 pb-4 gap-4 pt-10">
          <h1 className="text-3xl font-bold ">Contact Us</h1>
          <p className="text-gray-600 ">Leave us a message and someone will be in touch soon</p>
        </div>

        {/* 表单 */}
        <form className="flex flex-col space-y-4 mx-10 items-center">
          <div className="flex flex-col justify-center items-center gap-4 w-full pt-6 lg:pb-10 md:pb-4">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="name" className="block text-gray-700 text-sm mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="name" className="block text-gray-700 text-sm mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
              />
            </div>

            <div className="flex flex-col items-start w-full">
              <label htmlFor="name" className="block text-gray-700 text-sm mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold rounded-full py-2 mt-16 hover:bg-pink-600 transition-colors w-32 h-10"
          >
            SEND
          </button>
        </form>

        <div>
          <p className="text-gray-600 text-sm mt-8 font-medium pb-4">
            Feel free to reach us for a referral or any enquiries, someone will be in touch in 48 hours. Home care
            package and disability services.
          </p>
        </div>

        {/* 底部文字 */}
      </div>
    </div>
  );
};

export default ContactForm;

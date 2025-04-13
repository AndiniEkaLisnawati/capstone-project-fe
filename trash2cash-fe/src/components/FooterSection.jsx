import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-100 text-black px-6 py-16 md:px-20 lg:px-40">


      <div className="grid md:grid-cols-2 gap-10 mt-[80px] mb-[80px]"    >
        <div className="space-y-6">
          <div className="border-b pb-4 text-lg md:text-xl font-medium flex justify-between items-center">
            <span>How do I sign up for the project?</span>
            <span className="text-blue-600 text-2xl font-bold">+</span>
          </div>
          <div className="border-b pb-4 text-lg md:text-xl font-medium flex justify-between items-center">
            <span>What thing that I should prepare before starting?</span>
            <span className="text-blue-600 text-2xl font-bold">+</span>
          </div>
          <div className="border-b pb-4 text-lg md:text-xl font-medium flex justify-between items-center">
            <span>Does my company need help for marketing advices?</span>
            <span className="text-blue-600 text-2xl font-bold">+</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help You?</h2>
          <p className="text-lg text-gray-600 mb-4">
            Follow our newsletter. We will regularly update our latest project and availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-3 rounded-full border w-full sm:w-auto"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
              Lets Talk
            </button>
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-600 font-semibold text-lg">
              More FAQ →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t pt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-lg"      >
        <div>
          <div className="flex items-center mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
            <h3 className="font-bold text-xl">Trash To Cash</h3>
          </div>
          <div className="flex gap-4 text-2xl mb-4">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
            Contact Us
          </button>
        </div>

        <div className="space-y-2">
          <p>Work With Us</p>
          <p>Private Coaching</p>
          <p>About Us</p>
        </div>
        <div className="space-y-2">
          <p>Advertise With Us</p>
          <p>Our Work</p>
          <p>FAQs</p>
        </div>
        <div className="space-y-2">
          <p>Support Us</p>
          <p>Our Commitment</p>
          <p>Report a Bug</p>
          <p>Business Advices</p>
          <p>Our Team</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Trash To Cash, Inc. – All Rights Reserved</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#">Terms of use</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

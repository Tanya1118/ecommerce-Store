import React from 'react';
import EmailIcon from '../img/email.png';
import InstagramIcon from '../img/instagram.jpeg';
import TwitterIcon from '../img/twitter.png';
import CompanyImage from '../img/aboutb.png'; // Path to your company image

const About = () => {
  return (
    <div className="container mx-auto py-16 flex flex-wrap items-center"> {/* Flex container */}
      <div className="w-full md:w-1/2 px-4"> {/* Left half on small screens, full width on medium screens and above */}
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">About Glam Mart</h1> {/* Centered text on small screens, left-aligned on medium screens and above */}
        <p className="text-lg mb-4">
          At Glam Mart, we believe that shopping should be an experience, not a chore. We offer a curated selection of the latest fashion trends, beauty products, and lifestyle essentials to help you express your unique style and personality.
        </p>
        <p className="text-lg mb-4">
          Our mission is to empower individuals to look and feel their best by providing access to high-quality products at affordable prices. Whether you're looking for the perfect outfit for a special occasion or simply want to update your everyday wardrobe, Glam Mart has you covered.
        </p>
        <p className="text-lg mb-4">
          We are committed to providing exceptional customer service and creating a positive shopping experience for our customers. Thank you for choosing Glam Mart for all your fashion and beauty needs!
        </p>
        <div className="flex items-center justify-center md:justify-start"> {/* Centered content on small screens, left-aligned on medium screens and above */}
          <img src={EmailIcon} alt="Email Icon" className="w-8 h-8 mr-4" />
          <a href="mailto:contact@glammart.com" className="text-lg text-black-500 hover:underline">contact@glammart.com</a>
        </div>
        <div className="flex items-center justify-center md:justify-start mt-4"> {/* Centered content on small screens, left-aligned on medium screens and above */}
          <img src={InstagramIcon} alt="Instagram Icon" className="w-8 h-8 mr-4" />
          <a href="https://www.instagram.com/glammart/" target="_blank" rel="noopener noreferrer" className="text-lg text-black-500 hover:underline">@glammart</a>
        </div>
        <div className="flex items-center justify-center md:justify-start mt-4"> {/* Centered content on small screens, left-aligned on medium screens and above */}
          <img src={TwitterIcon} alt="Twitter Icon" className="w-8 h-8 mr-4" />
          <a href="https://twitter.com/glammart" target="_blank" rel="noopener noreferrer" className="text-lg text-black-500 hover:underline">@glammart</a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4"> {/* Right half on small screens, full width on medium screens and above */}
        <img src={CompanyImage} alt="" className="w-full md:w-auto rounded-lg shadow-md" /> {/* Responsive image with rounded corners and shadow */}
      </div>
    </div>
  );
};

export default About;

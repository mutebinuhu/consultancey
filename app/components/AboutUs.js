// src/components/AboutUs.js
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 ">
        <div className='md:flex'>
      <div className="px-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Your Business Name, your trusted partner in securing real estate investments. We understand the importance of making informed decisions when it comes to property, and our mission is to provide you with the tools and knowledge needed to safeguard your investments.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Your Business Name we have a team of dedicated experts with a wealth of experience in real estate and land verification. Our commitment to transparency, integrity, and client satisfaction sets us apart. We leverage cutting-edge technology to deliver accurate and reliable results, ensuring that you have the information necessary to make sound investment choices.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Whether you are a first-time investor or a seasoned property buyer, Your Business Name is here to support you. Our comprehensive land verification services cover everything from title deed checks to boundary inspections and legal compliance assessments.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We believe in building lasting relationships with our clients, and your success is our success. Thank you for considering Your Business Name for your real estate needs. Feel free to reach out to us with any questions or to get started on securing your investments.
          </p>
        </div>
      </div>
      <div className="bg-cover bg-center h-screen w-full md:w-1/2" style={{ backgroundImage: `url(/images/property.jpg)` }}>
        <div className='hidden'>      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
      </div>
      </div>
      <div className="px-8 py-16">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Our mission</h2>
          <p className="text-gray-700 leading-relaxed">
          At  Business Name, our mission is to empower you with the information and tools needed to make secure and informed decisions when it comes to real estate investments. We believe in transparency, integrity, and protecting your hard-earned money.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

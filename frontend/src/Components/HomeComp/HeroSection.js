import React, { useState } from 'react';

const HeroSection = () => {
  const [heroContent] = useState({
    heroTitle: "Our Services",
    heroSubtitle: "We acknowledge that navigating the immigration process can be complex and stressful, leading to numerous questions and concerns. We are determined in our commitment to offering personalized support, ensuring timely responses to inquiries, and providing regular updates on Immigration applications."
  });

  return (
    <section className="hero">
      <h1>{heroContent.heroTitle}</h1>
      <p>{heroContent.heroSubtitle}</p>
    </section>
  );
};

export default HeroSection;

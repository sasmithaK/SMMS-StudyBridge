import React, { useState } from 'react';

const ContentBlocks = () => {
  // Hardcoded content for the four blocks
  const [content] = useState([
    {
      title: "Student Visa Assistance",
      description: "Embarking on an educational journey in a foreign country is an exciting yet intricate process."
    },
    {
      title: "Documentation Support",
      description: "Navigating the maze of paperwork can be overwhelming. We simplify the documentation."
    },
    {
      title: "Work Visa Solutions",
      description: "Unlock global career opportunities with our tailored work visa solutions."
    },
    {
      title: "Legal Consultation",
      description: "Understanding the legal aspects of immigration is crucial. Our legal experts are available to help."
    }
  ]);

  return (
    <section className="content-blocks">
      {content.map((block, index) => (
        <div key={index} className="block">
          <h2>{block.title}</h2>
          <p>{block.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ContentBlocks;

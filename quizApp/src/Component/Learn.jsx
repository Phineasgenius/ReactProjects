import React from 'react';
import './Learn.css';

function Learn() {
  const studyMaterials = [
    {
      title: "Mathematics",
      topics: ["Basic Arithmetic", "Algebra", "Geometry", "Statistics"],
      description: "Learn fundamental math concepts including arithmetic operations, algebraic expressions, geometric shapes, and statistical analysis."
    },
    {
      title: "Geography",
      topics: ["World Capitals", "Continents", "Oceans", "Famous Landmarks"],
      description: "Explore geography topics including countries, capitals, geographical features, and landmarks around the world."
    },
    {
      title: "Science",
      topics: ["Physics", "Chemistry", "Biology", "Astronomy"],
      description: "Discover science fundamentals covering physical laws, chemical reactions, living organisms, and space exploration."
    },
    {
      title: "History",
      topics: ["Ancient Civilizations", "Medieval Period", "Modern Era", "Famous Events"],
      description: "Study historical events and periods from ancient times to the present day."
    },
    {
      title: "Arts & Culture",
      topics: ["Famous Artists", "Music Genres", "Literature", "Architecture"],
      description: "Explore the world of arts, music, literature, and cultural heritage."
    },
    {
      title: "Technology",
      topics: ["Programming Basics", "Artificial Intelligence", "Web Development", "Cybersecurity"],
      description: "Learn about modern technology, programming concepts, and digital innovation."
    }
  ];

  return (
    <div className="learn-container">
      <div className="learn-content">
        <h1>Study Materials</h1>
        <p className="learn-intro">Prepare for the quiz by exploring our comprehensive study materials</p>
        
        <div className="materials-grid">
          {studyMaterials.map((material, index) => (
            <div key={index} className="material-card">
              <h2>{material.title}</h2>
              <p className="material-description">{material.description}</p>
              <div className="topics-list">
                <h3>Key Topics:</h3>
                <ul>
                  {material.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;

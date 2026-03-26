import React from 'react';
import './Learn.css';

function Learn() {
  const studyMaterials = [
    {
      title: "Mathematics",
      topics: ["Basic Arithmetic", "Algebra", "Geometry", "Statistics"],
      description: "Learn fundamental math concepts including arithmetic operations, algebraic expressions, geometric shapes, and statistical analysis.",
      links: [
        { label: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
        { label: "Math is Fun", url: "https://www.mathsisfun.com/" },
        { label: "Brilliant Math", url: "https://brilliant.org/topics/math/" }
      ]
    },
    {
      title: "Geography",
      topics: ["World Capitals", "Continents", "Oceans", "Famous Landmarks"],
      description: "Explore geography topics including countries, capitals, geographical features, and landmarks around the world.",
      links: [
        { label: "National Geographic", url: "https://www.nationalgeographic.com/" },
        { label: "World Atlas", url: "https://www.worldatlas.com/" },
        { label: "Google Earth", url: "https://www.google.com/earth/" }
      ]
    },
    {
      title: "Science",
      topics: ["Physics", "Chemistry", "Biology", "Astronomy"],
      description: "Discover science fundamentals covering physical laws, chemical reactions, living organisms, and space exploration.",
      links: [
        { label: "Science Daily", url: "https://www.sciencedaily.com/" },
        { label: "NASA Science", url: "https://science.nasa.gov/" },
        { label: "Khan Academy Science", url: "https://www.khanacademy.org/science" }
      ]
    },
    {
      title: "History",
      topics: ["Ancient Civilizations", "Medieval Period", "Modern Era", "Famous Events"],
      description: "Study historical events and periods from ancient times to the present day.",
      links: [
        { label: "History.com", url: "https://www.history.com/" },
        { label: "BBC History", url: "https://www.bbc.co.uk/history" },
        { label: "Khan Academy History", url: "https://www.khanacademy.org/humanities/world-history" }
      ]
    },
    {
      title: "Arts & Culture",
      topics: ["Famous Artists", "Music Genres", "Literature", "Architecture"],
      description: "Explore the world of arts, music, literature, and cultural heritage.",
      links: [
        { label: "Google Arts & Culture", url: "https://artsandculture.google.com/" },
        { label: "Met Museum", url: "https://www.metmuseum.org/" },
        { label: "Smithsonian Arts", url: "https://www.si.edu/" }
      ]
    },
    {
      title: "Technology",
      topics: ["Programming Basics", "Artificial Intelligence", "Web Development", "Cybersecurity"],
      description: "Learn about modern technology, programming concepts, and digital innovation.",
      links: [
        { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
        { label: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { label: "Codecademy", url: "https://www.codecademy.com/" }
      ]
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
              {material.links && material.links.length > 0 && (
                <div className="resource-links">
                  <h4>Learn More</h4>
                  <ul>
                    {material.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;

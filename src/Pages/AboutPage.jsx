import React from "react";
import img1 from "../assets/images/movie1.jpg";
import "../Styles/about.css"
const AboutPage = () => {
  const aboutData = {
    title: "About MovieVerse",
    description: `MovieVerse is a movie reviews platform made for true cinema lovers. 
    We offer honest reviews, ratings, and community feedback on the latest blockbusters, hidden gems, and timeless classics. 
    Whether you're choosing what to watch next or want to share your opinion, MovieVerse is your space.`,
    mission: `To help movie fans make smarter watch decisions through reliable, community-driven reviews and ratings.`,
    vision: `To become the most trusted and engaging movie review platform for audiences around the world.`,
    features: [
      "Verified reviews from real users",
      "Star ratings and written opinions",
      "Mobile-friendly and responsive design",
    ],
    contact: {
      email: "contact@movieverse.com",
      location: "Cairo, Egypt",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="position-relative text-center text-white">
        <div
          className="gradient-bg w-100 "
          style={{ height: "240px", filter: "brightness(50%)" }}
        >
        </div>
       
        <h1 className="position-absolute top-50 start-50 translate-middle mb-4 text-shadow">
          About Us
        </h1>
      </div>

      {/* About Content */}
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-12 ">
            <h2 className="mb-4 text-info">{aboutData.title}</h2>
            <p>{aboutData.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <h4 className="mt-4 text-info">Our Mission</h4>
            <p>{aboutData.mission}</p>
            <h4 className="mt-4 text-info">Our Vision</h4>
            <p>{aboutData.vision}</p>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div class="feature">
        <div class="container py-5">
          <div class="text-center mb-5">
            <h2 class="section-heading display-4 mb-3 fw-semibold">
              Why Choose Us
            </h2>
            <h2 class="text-light lead">
              Explore our powerful tools designed to enhance your workflow
            </h2>
          </div>

          <div
            class="row g-4 flex align-items-center mb-4"
            style={{ height: "400px" }}
          >
            {aboutData.features.map((feature) => (
              <div class="col-md-4">
                <div class="card feature-card h-100 p-4 bg-dark">
                  <div class="icon-wrapper ">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="icon"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 class="card-title text-info">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center text-light mt-8">
            <h2 className="my-4 ">Contact Us</h2>
            <h3>Email: {aboutData.contact.email}</h3>
            <h3>Location: {aboutData.contact.location}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;


            

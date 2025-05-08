import React from "react";
import { Link } from "react-router"; 
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{ background: "#13203f", padding: "10px 0" }}
    >
      {/* Social media section */}
      <div className="container">
        <section className="mb-2 d-flex justify-content-center gap-3">
          <Link to="#!" className="text-info">
            <IoLogoFacebook size={22} />
          </Link>
          <Link to="#!" className="text-info">
            <IoLogoTwitter size={22} />
          </Link>
          <Link to="#!" className="text-info">
            <IoLogoGoogle size={22} />
          </Link>
          <Link to="#!" className="text-info">
            <IoLogoInstagram size={22} />
          </Link>
          <Link to="#!" className="text-info">
            <IoLogoLinkedin size={22} />
          </Link>
          <Link to="#!" className="text-info">
            <IoLogoGithub size={22} />
          </Link>
        </section>
      </div>

      <p className="text-light small mb-0">
        © 2025 Copyright:{" "}
        <Link className="text-info" to="/">
          MovieVerse.com
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

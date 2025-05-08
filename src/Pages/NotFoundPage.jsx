import React from 'react';
import notFound from "../assets/images//notFound.png"
import { Link } from 'react-router';
const NotFoundPage = () => {
    return (
      <>
        <div
          className="container-fluid d-flex align-items-center justify-content-center my-4"
          style={{ minHeight: "100vh" }}
        >
          <div className="row w-100 text-center">
            <div className="col-12 col-md-6">
              <img src={notFound} alt="Page Not Found" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <h2 style={{ fontSize: "52px" }}>OOPS! Page Not Found</h2>
              <Link to="/">
                <button
                  className="mt-4 btn btn-light"
                  style={{ fontSize: "32px", fontWeight:"700" }}
                >
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default NotFoundPage;

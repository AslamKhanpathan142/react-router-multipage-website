import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <footer className="py-5 ">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5 className="text-info mb-3">Section</h5>
                <ul className="nav flex-column gap-2">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className="text-info mb-3">Section</h5>
                <ul className="nav flex-column gap-2">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5 className="text-info mb-3">Section</h5>
                <ul className="nav flex-column gap-2">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3 text-white">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      fdprocessedid="j5ji9"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      fdprocessedid="mh2fma"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
              <p>© 2024 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#facebook"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <section className="text-center text-lg-start">
      <style>
        {`
          .cascading-right {
            margin-right: -50px;
          }

          @media (max-width: 991.98px) {
            .cascading-right {
              margin-right: 0;
            }
          }
        `}
      </style>

      {/* Jumbotron */}
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          {/* Form Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right bg-body-tertiary"
              style={{ backdropFilter: "blur(30px)" }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">สมัครสมาชิก</h2>
                <form>
                  {/* First & Last Name */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-floating">
                        <input type="text" id="firstName" className="form-control" placeholder="ชื่อจริง" />
                        <label htmlFor="firstName">ชื่อจริง</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-floating">
                        <input type="text" id="lastName" className="form-control" placeholder="นามสกุล" />
                        <label htmlFor="lastName">นามสกุล</label>
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="form-floating mb-4">
                    <input type="text" id="company" className="form-control" placeholder="ชื่อเว็บไซต์" />
                    <label htmlFor="company">เบอร์โทรติดต่อ</label>
                  </div>

                  {/* URL Company */}
                  <div className="form-floating mb-4">
                    <input type="url" id="urlcompany" className="form-control" placeholder="URL เว็บไซต์" />
                    <label htmlFor="urlcompany">URL เว็บไซต์</label>
                  </div>

                  {/* Email input */}
                  <div className="form-floating mb-4">
                    <input type="email" id="email" className="form-control" placeholder="Email address" />
                    <label htmlFor="email">Email address</label>
                  </div>




                  <Link to="/home">
                    <button type="button" className="btn btn-primary btn-block mb-4">
                      สมัครสมาชิก
                    </button>
                  </Link>

                </form>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="img/cover.jpg"
              className="w-100 rounded-4 shadow-4"
              alt="Signup Illustration"
            />
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
  );
};

export default Register;

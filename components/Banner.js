import React from "react";

function Banner({ isMentorLoggedIn }) {
  return (
    <section className="slider-area ">
      <div className="slider-active slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: "1423px" }}>
            <div
              className="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              tabIndex="0"
              style={{
                width: "1423px",
                position: "relative",
                left: "0px",
                top: "0px",
                zIndex: 999,
                opacity: 1,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="hero__caption">
                      <h1
                        data-animation="fadeInLeft"
                        data-delay="0.2s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.8s" }}
                      >
                        Grab your Intern with GrabTern
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-delay="0.4s"
                        className="animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "1s" }}
                      >
                        Book a meeting with a past intern to receive one-on-one
                        mentoring and enhance your chances of landing your ideal
                        intern.
                      </p>
                      <a
                        href="/mentors"
                        className="btn hero-btn animate__animated animate__fadeInLeft"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        tabIndex="0"
                        style={{ animationDelay: "1s" }}
                      >
                        Find Mentor
                      </a>{" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;
                      {/* {isMentorLoggedIn === false ?(<a href="/mentorRegister" className="btn hero-btn animate__animated animate__fadeInLeft" data-animation="fadeInLeft" data-delay="1s" tabIndex="0" style={{animationDelay: "1s"}}>Be a Mentor</a>):null}  */}
                      {isMentorLoggedIn === true ? (
                        <>
                          <a
                            href="/dashboard"
                            className="btn hero-btn animate__animated animate__fadeInLeft"
                            data-animation="fadeInLeft"
                            data-delay="1s"
                            tabIndex="0"
                            style={{ animationDelay: "1s" }}
                          >
                            Dashboard
                          </a>
                        </>
                      ) : (
                        <a
                          href="/mentorRegister"
                          className="btn hero-btn animate__animated animate__fadeInLeft"
                          data-animation="fadeInLeft"
                          data-delay="1s"
                          tabIndex="0"
                          style={{ animationDelay: "1s" }}
                        >
                          Be a Mentor
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

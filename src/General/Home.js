export default function Home(){
  return(
    <>
    <div className="hero_area">
    
    {/*<!-- slider section --> */}
    <section className=" slider_section">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="detail-box">
                <h1>

                  The Best <br/>
                  Deals For Parking lots
                </h1>
                <p>
                Autospan is a topmost service provider based on Information Technology (IT), who ensures to provide essential solution for software needs with premium results. We have a team of professionals who are highly unswerving and focused on first-class customer service to earn their fullest contentment. Our main aim is to bring surefire results through our hard work in order to develop enduring relationships with our customers. We vanity ourselves for having pioneering talent and agility for offering right solution for our valuable customers and in providing them with a wonderful support network which is more analogous to develop personal relationship apart from just creating business partnership.
                </p>
                <div>
                  <a href="">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="detail-box">
                <h1>

                  The Best <br/>
                  Deals For Parking lots
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div>
                  <a href="">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>

    </section>
    {/* <!-- end slider section --> */}
  </div>

  {/* <!-- find section --> */}
  <section className="find_section">
    <div className="container">
      <form action="">
        <div className=" form-row">
          <div className="col-lg-3">
            <label for="carPark">Select Car Park</label>
            <select name="" id="carPark" className="form-control">
              <option value="">First Floor</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </select>
          </div>
          <div className="col-lg-3">
            <label for="parkingName">Your Name Here</label>
            <input type="text" className="form-control" placeholder="jack frod " id="parkingName"/>
          </div>

          <div className="col-lg-3">
            <label for="parkingNumber">Your Phone Number</label>
            <input type="text" className="form-control" placeholder="+01 1234567890 " id="parkingNumber"/>
          </div>
          <div className="col-lg-3">
            <div className="btn-container">
              <button type="submit" className="">
                Request a call
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  </section>

  {/* <!-- end find section --> */}

  {/* <!-- feature section --> */}
  <section className="feature_section layout_padding2">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/money.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Save Money
              </h5>
              <p>
                It is a long established fact that a reader will be distracted by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/clock.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Save Time
              </h5>
              <p>
                It is a long established fact that a reader will be distracted by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/man.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Save Stress
              </h5>
              <p>
                It is a long established fact that a reader will be distracted by the readable content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end feature section --> */}

  {/* <!-- why section --> */}
  <section className="why_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                Why Choose Us
              </h2>
            </div>

            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            </p>
            <div>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-container">
            <div className="row">
              <div className="col-sm-6">
                <div className="img-box">
                  <img src="images/w-1.jpg" alt=""/>
                  <a href="">
                    <img src="images/link.png" alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-box">
                  <img src="images/w-2.jpg" alt=""/>
                  <a href="">
                    <img src="images/link.png" alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-box">
                  <img src="images/w-3.jpg" alt=""/>
                  <a href="">
                    <img src="images/link.png" alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-box">
                  <img src="images/w-4.jpg" alt=""/>
                  <a href="">
                    <img src="images/link.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end why section -->

  <!-- service section --> */}

  <section className="service_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Services
        </h2>
      </div>
      <p>
      A car service is when you take your car to a garage for a routine check up. A mechanic will look at your car’s condition and check parts for wear and tear, like brakes, oil, filters and engine belt.
      </p>
      <div className="box">
        <div className="img-box">
                    

        </div>
        <div className="detail-box">
          <h5>
            Car Wash
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
            consectetur adipiscing eullamco
          </p>
          <div>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          
        </div>
        <div className="detail-box">
          <h5>
            Concierge Options
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
            consectetur adipiscing eullamco
          </p>
          <div>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          

        </div>
        <div className="detail-box">
          <h5>
            Close And Handy
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
            consectetur adipiscing eullamco
          </p>
          <div>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          

        </div>
        <div className="detail-box">
          <h5>
            Safe And Secure
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet,
            consectetur adipiscing eullamco
          </p>
          <div>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end service section --> */}

  {/* <!-- client section --> */}

  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          What Our Customers Say
        </h2>
      </div>
      <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="3"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  laboris nisi
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  laboris nisi
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  laboris nisi
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  laboris nisi
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  laboris nisi
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* <!-- end client section --> */}

  {/* <!-- rate section --> */}

  <section className="rate_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Parking Options and Rates
        </h2>
      </div>
      <div className="rate_container">
        <div className="box">
          <div className="detail-box">
            <div className="price">
              <h3>
                $ <span>30</span> /day

              </h3>
              <h6>
                Basic
              </h6>
            </div>
            <p>
              long established fact a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
          <div className="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="box">
          <div className="detail-box">
            <div className="price">
              <h3>
                $ <span>40</span> /day

              </h3>
              <h6>
                Standard
              </h6>
            </div>
            <p>
              long established fact a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
          <div className="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="box">
          <div className="detail-box">
            <div className="price">
              <h3>
                $ <span>50</span> /day

              </h3>
              <h6>
                Premium
              </h6>
            </div>
            <p>
              long established fact a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
          <div className="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end rate section --> */}

  {/* <!-- contact section --> */}

  <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="text" placeholder="Name"/>
                  </div>
                  <div>
                    <input type="email" placeholder="Email"/>
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number"/>
                  </div>
                  <div className="">
                    <input type="text" placeholder="Message" className="message_input"/>
                  </div>
                  <div className="mt-5 d-flex justify-content-center ">
                    <button type="submit">
                      Send
                    </button>
                  </div>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* 
  <!-- end contact section --> */}

  {/* <!-- info section --> */}

  <section className="info_section ">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h6>
            Subscribe Now
          </h6>
          <p>
            There are many variations of passages of Lorem Ipsum available,
          </p>
          <form action="">
            <input type="text" placeholder="Enter your email"/>
            <div className="d-flex justify-content-end">
              <button>
                subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-2">
          <h6>
            Information
          </h6>
          <ul>
            <li>
              <a href="">
                There are many
              </a>
            </li>
            <li>
              <a href="">
                variations of
              </a>
            </li>
            <li>
              <a href="">
                passages of Lorem
              </a>
            </li>
            <li>
              <a href="">
                Ipsum available,
              </a>
            </li>
            <li>
              <a href="">
                but the majority
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <h6>
            Helpful Links
          </h6>
          <ul>
            <li>
              <a href="">
                There are many
              </a>
            </li>
            <li>
              <a href="">
                variations of
              </a>
            </li>
            <li>
              <a href="">
                passages of Lorem
              </a>
            </li>
            <li>
              <a href="">
                Ipsum available,
              </a>
            </li>
            <li>
              <a href="">
                but the majority
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <h6>
            Invesments
          </h6>
          <ul>
            <li>
              <a href="">
                There are many
              </a>
            </li>
            <li>
              <a href="">
                variations of
              </a>
            </li>
            <li>
              <a href="">
                passages of Lorem
              </a>
            </li>
            <li>
              <a href="">
                Ipsum available,
              </a>
            </li>
            <li>
              <a href="">
                but the majority
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <h6>
            Contact Us
          </h6>
          <div className="info_link-box">
            <a href="">
              <img src="images/location.png" alt=""/>
              <span>Surya Enclave ,Jalandhar City</span>
            </a>
            <a href="">
              <img src="images/call.png" alt=""/>
              <span>+91 6280338944</span>
            </a>
            <a href="">
              <img src="images/envelope.png" alt=""/>
              <span>ritikay0413@gmail.com</span>
            </a>
          </div>
          <div className="info_social">
            <div>
              <a href="">
                <img src="images/fb.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="images/twitter.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="images/linkedin.png" alt=""/>
              </a>
            </div>
            <div>
              <a href="">
                <img src="images/insta.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info section --> */}
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="js/custom.js"></script>
    
    </>
  )
}
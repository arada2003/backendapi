import "../style.css";
import "../bootstrap.min.css";
import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarRegis from "../component/navbarRegis";

const HomeRegis = () => {
  return (
    
    <div>


      <Helmet>
        <meta charset="utf-8" />
        <title>Gym Service Provider</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Other Styles */}
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
      </Helmet>

<NavbarRegis />
      <div class="container-fluid featurs py-5">
        <div class="container py-5">
          <div class="row g-4 rounded bg-light p-4">
            <div class="featurs-item text-center rounded bg-light p-4">
              <div class="featurs-content text-center">
                <h5>เราคือ</h5>
                <p class="mb-0">แพลตฟอร์ม Affiliate Service สำหรับการจองคลาสออกกำลังกาย ที่ช่วยให้คุณแนะนำและสร้างรายได้จากการเชื่อมต่อลูกค้ากับยิมชั้นนำทั่วประเทศ! จองง่าย ได้ค่าคอมทันที!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
        <h1 class="mb-2">Gym ชั้นนำ</h1>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img src="img/L.jpg" className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded border border-dark">
                  <img src="img/L.jpg" className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-primary rounded border border-primary">
                  <img src="img/L.jpg" className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Exotic Vegitable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5 ">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img src="img/L.jpg" className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="#">
                <div className="service-item bg-dark rounded border border-dark">
                  <img src="img/L.jpg" className="img-fluid rounded-top w-100" alt="" />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Fruits</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRegis;

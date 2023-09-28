import Howtowork from "../component/howtowork"
import Search from "../search"

export default function Home() {
  
    return (
      <>
      <section class="banner-section banner-slider" style={{backgroundImage:'url(/assets/img/banner.jpg)'}}>
            <div class="container-fluid">
                <div class="home-banner">
                    <div class="row align-items-center">
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-down">
                            <p class="explore-text"> <span><i class="fa-solid fa-thumbs-up me-2"></i></span>100% Trusted
                                car driving schools platform in the World</p>
                            <h1>Find Your Best <br/>
                                <span>car driving schools for driving </span>
                            </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s</p>
                            <div class="view-all">
                                <a href="listing-grid.html" class="btn btn-view d-inline-flex align-items-center">View
                                    all Cars <span><i class="feather-arrow-right ms-2"></i></span></a>
                            </div>
                        </div>
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-down">
                            <div class="banner-imgs">
                                <img src="assets/img/car-right.png" class="img-fluid aos" alt="bannerimage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
        <Search/>
        <Howtowork/>
      </>
    )
  }
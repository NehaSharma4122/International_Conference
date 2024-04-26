import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h1>ADS - 2024</h1>
                <div className="side">
                  <p>
                    ADS International AI Data science Conference, IICC Conference Hall, New Delhi, India
                    <br /><br />
                    <a style={{color:"lightblue"}}>info@ads.com</a>
                  </p>
                  <div className="menu">
                    <h3>MENU</h3>
                    <a><i className="bi bi-arrow-right-short"></i> Partner with ADS</a>
                    <a><i className="bi bi-arrow-right-short"></i> Blogs</a>
                    <a><i className="bi bi-arrow-right-short"></i> Training</a>
                    <a><i className="bi bi-arrow-right-short"></i> Jobs</a>
                    <a><i className="bi bi-arrow-right-short"></i> FAQ</a>
                  </div>
                  <div className="menu">
                  <h3>EXTRAS</h3>
                  <a><i className="bi bi-arrow-right-short"></i> Newsletter</a>
                  <a><i className="bi bi-arrow-right-short"></i> About</a>
                  <a><i className="bi bi-arrow-right-short"></i> Code of Conduct</a>
                  <a><i className="bi bi-arrow-right-short"></i> Privacy Policy</a>
                  </div>
                </div>
                <div className="social-links mt-3">
                  <a href="https://twitter.com/VITAIIoT">
                    <span className="social">
                      <i className="bi bi-twitter"></i>
                    </span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61552160249000">
                    <span className="social">
                      <i className="bi bi-facebook"></i>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/vitaiiot/">
                    <span className="social">
                      <i className="bi bi-instagram"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/vitaiiot-india-985352295/">
                    <span className="social">
                      <i className="bi bi-linkedin"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>ADS 2024</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
    // <footer id="footer">
    //   <div classNameName="container">
    //     <h3>Inter-con 2024</h3>
    //     <p>The Next Generation AI</p>
    //     <div classNameName="social-links">
    //       <a href="https://twitter.com/vit_univ" classNameName="twitter">
    //         <i classNameName="bx bxl-twitter"></i>
    //       </a>
    //       <a href="https://www.facebook.com/VITuniversity/" classNameName="facebook">
    //         <i classNameName="bx bxl-facebook"></i>
    //       </a>
    //       <a href="https://www.instagram.com/vellore_vit/" classNameName="instagram">
    //         <i classNameName="bx bxl-instagram"></i>
    //       </a>
    //       <a
    //         href="https://www.youtube.com/c/VITUniversityVellore"
    //         classNameName="youtube"
    //       >
    //         <i classNameName="bx bxl-youtube"></i>
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/school/vellore-institute-of-technology/"
    //         classNameName="linkedin"
    //       >
    //         <i classNameName="bx bxl-linkedin"></i>
    //       </a>
    //     </div>
    //     <div classNameName="copyright">
    //       &copy; Copyright{" "}
    //       <strong>
    //         <span>Inter-con</span>
    //       </strong>
    //       . All Rights Reserved
    //     </div>
    //     <div classNameName="credits">Designed by : Swastika, SCOPE, VIT Vellore</div>
    //   </div>
    // </footer>
  );
};

export default Footer;

import React from "react";
import style from "./Footer.module.scss";
import logo from "../../Assets/oie_hSmUWMk0obba.png";

const Footer = () => {
  return (
    <div className={style.FooterContainer}>
      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.Address}>
            <h3>Fire Blocks</h3>
            <p>
              {" "}
              Address: 4440 5 ST NW EDMONTON AB, T6T 0Z9, CANADA <br />
            </p>
          </div>
          <div className={style.email}>
            <p>
              Contact Us :{" "}
              <a href="mailto:support@fireblocks.biz">support@fireblocks.biz</a>
            </p>
            {/* <div className={style.socials}>
              <a target="_blank" href=" https://twitter.com/univmagnanimo ">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                target="_blank"
                href="https://universomagnanimounipessoal.medium.com/"
              >
                <i className="fa-brands fa-medium"></i>
              </a>
              <a
                href=" https://www.linkedin.com/company/universo-magnanimo"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div> */}
            <p className={style.footerText}>
              {" "}
              © Fire Blocks, all rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

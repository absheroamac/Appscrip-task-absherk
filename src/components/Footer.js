import React from "react";
import style from "./Footer.module.css";
import USAFlag from "../assets/footer/usa.png";
import Dot from "../assets/footer/icon.svg";
import Image from "next/image";
import InstagramIcon from "../assets/footer/instagram.svg";
import LinkedInIcon from "../assets/footer/linkedin.svg";
import AcceptsIcons from "../assets/footer/acceptsIcons.png";
import Collapsible from "./shopLayout/filtering/filterPanel/Collapsible";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        {/* First Grid */}
        <div className={style.firstGrid}>
          {/*  First Container */}
          <div className={style.firstContainer}>
            <div className={style.content}>
              <h4>BE THE FIRST TO KNOW</h4>
              <p>Sign up for updates from mettā muse.</p>
            </div>
            <div className={style.subscribeContainer}>
              <input
                type="text"
                className={style.input}
                placeholder="Enter your e-mail..."
              />
              <button className={style.button}>SUBSCRIBE</button>
            </div>
            <hr className={style.smVisible} />
          </div>
          {/*  Second Container */}
          <div className={style.secondContainer}>
            <div className={`${style.content} ${style.contactUs}`}>
              <h4>CONTACT US</h4>
              <ul>
                <li>+44 221 133 5360</li>
                <Dot className={style.smVisible} />
                <li>customercare@mettamuse.com</li>
              </ul>
            </div>
            <hr className={style.smVisible} />
            <div className={style.content}>
              <h4>CURRENCY</h4>
              <div className={style.currency}>
                <Image
                  src={USAFlag}
                  width={"24px"}
                  height={"24px"}
                  alt="USD ICON"
                />
                <Dot />
                <h5>USD</h5>
              </div>
              <p className={style.smHidden}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr />

        {/* Second Grid */}
        <div className={style.secondGrid}>
          {/* First Container md */}
          <div className={`${style.content} ${style.smHidden}`}>
            <h4>mettā muse</h4>
            <ul>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Stories</a>
              </li>
              <li>
                <a>Artisans</a>
              </li>
              <li>
                <a>Boutiques</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>EU Compliances Docs</a>
              </li>
            </ul>
          </div>
          {/* First Container sm */}
          <div className={style.smVisible}>
            <Collapsible title={"mettā muse"} className={style.content}>
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Stories</a>
                </li>
                <li>
                  <a>Artisans</a>
                </li>
                <li>
                  <a>Boutiques</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>EU Compliances Docs</a>
                </li>
              </ul>
            </Collapsible>
          </div>
          {/* Second Container md */}
          <hr className={style.smVisible} />
          <div className={`${style.content} ${style.smHidden}`}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a>Orders & Shipping</a>
              </li>
              <li>
                <a>Join/Login as a Seller</a>
              </li>
              <li>
                <a>Payment & Pricing</a>
              </li>
              <li>
                <a>Return & Refunds</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          {/* Second Container sm */}
          <div className={style.smVisible}>
            <Collapsible title={"QUICK LINKS"} className={style.content}>
              <ul>
                <li>
                  <a>Orders & Shipping</a>
                </li>
                <li>
                  <a>Join/Login as a Seller</a>
                </li>
                <li>
                  <a>Payment & Pricing</a>
                </li>
                <li>
                  <a>Return & Refunds</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms & Conditions</a>
                </li>
              </ul>
            </Collapsible>
          </div>

          <hr className={style.smVisible} />
          {/* Third Container md */}
          <div className={`${style.thirdContainer} ${style.smHidden}`}>
            <div className={style.content}>
              <h4>Follow Us</h4>
              <div className={style.socialIcons}>
                <button>
                  <InstagramIcon />
                </button>
                <button>
                  <LinkedInIcon />
                </button>
              </div>
            </div>

            <div className={`${style.paymentPartners} ${style.content}`}>
              <h4>mettā muse Accepts</h4>
              <Image
                src={AcceptsIcons}
                alt="Payment Partneres"
                width={"376px"}
                height={"35px"}
                layout="responsive"
              />
            </div>
          </div>

          {/* Third Container sm */}

          <div className={style.smVisible}>
            <Collapsible title={"FOLLOW US"} className={style.content}>
              <div className={style.socialIcons}>
                <button>
                  <InstagramIcon />
                </button>
                <button>
                  <LinkedInIcon />
                </button>
              </div>
            </Collapsible>
          </div>
          <hr className={style.smVisible} />

          <div className={`${style.paymentPartners} ${style.smVisible}`}>
            <h4>mettā muse Accepts</h4>
            <Image
              src={AcceptsIcons}
              alt="Payment Partneres"
              width={"376px"}
              height={"35px"}
              layout="responsive"
            />
          </div>
        </div>
        <div className={style.copyRight}>
          <span>Copyright © 2023 mettamuse. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

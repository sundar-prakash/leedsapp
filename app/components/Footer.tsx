import { ArrowTopRightIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhatsappIcon } from "react-share";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-12 ">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-8 ">
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/other/footer.png"
              alt="LeadsApp"
              width={200}
              height={50}
            />
            <p className="">Effortlessly manage, nurture and convert leads</p>
            <div className="flex flex-col md:flex-row gap-5 ">
              <Link href="https://itunes.apple.com/us/app/apple-store/id6453606859?mt=8%27">
                <Image
                  src="/other/app-store-badge.svg"
                  alt="app-store-badge"
                  width={120}
                  height={40}
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.leedsapp">
                <Image
                  src="/other/google-play-badge.svg"
                  alt="google-play-badge"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing & Plans</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 ">
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4" id="contact">
            <h3 className="font-bold">Contact Us</h3>
            <ul className="space-y-2 ">
              <li className="">
                <Link href="mailto:support@leedsapp.com">
                  Email: support@leedsapp.com
                </Link>
              </li>
              <li className="">
                <Link href="tel:+91 9787575752">Phone: +91 97875 75752</Link>
              </li>
            </ul>
            <Link
              target="_blank"
              href="https://wa.me/919787575752"
              className="border rounded-xl bg-[#f4fdf8] border-[#2dc764] p-6 text-black flex flex-col gap-6"
            >
              <p>Need help? Chat with our support team on WhatsApp</p>
              <div className="flex flex-row items-center justify-between gap-5">
                <div className="flex flex-row items-center gap-5">
                  <WhatsappIcon size={30} className="rounded-[0.4rem]" />
                  <p>+91 97875 75752</p>
                </div>
                <svg
                  id="fi_7268615"
                  enable-background="new 0 0 515.283 515.283"
                  height="20"
                  viewBox="0 0 515.283 515.283"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="m372.149 515.283h-286.268c-22.941 0-44.507-8.934-60.727-25.155s-25.153-37.788-25.153-60.726v-286.268c0-22.94 8.934-44.506 25.154-60.726s37.786-25.154 60.727-25.154h114.507c15.811 0 28.627 12.816 28.627 28.627s-12.816 28.627-28.627 28.627h-114.508c-7.647 0-14.835 2.978-20.241 8.384s-8.385 12.595-8.385 20.242v286.268c0 7.647 2.978 14.835 8.385 20.243 5.406 5.405 12.594 8.384 20.241 8.384h286.267c7.647 0 14.835-2.978 20.242-8.386 5.406-5.406 8.384-12.595 8.384-20.242v-114.506c0-15.811 12.817-28.626 28.628-28.626s28.628 12.816 28.628 28.626v114.507c0 22.94-8.934 44.505-25.155 60.727-16.221 16.22-37.788 25.154-60.726 25.154zm-171.76-171.762c-7.327 0-14.653-2.794-20.242-8.384-11.179-11.179-11.179-29.306 0-40.485l237.397-237.398h-102.648c-15.811 0-28.626-12.816-28.626-28.627s12.815-28.627 28.626-28.627h171.761c3.959 0 7.73.804 11.16 2.257 3.201 1.354 6.207 3.316 8.837 5.887.001.001.001.001.002.002.019.019.038.037.056.056.005.005.012.011.017.016.014.014.03.029.044.044.01.01.019.019.029.029.011.011.023.023.032.032.02.02.042.041.062.062.02.02.042.042.062.062.011.01.023.023.031.032.011.01.019.019.029.029.016.015.03.029.044.045.005.004.012.011.016.016.019.019.038.038.056.057 0 .001.001.001.002.002 2.57 2.632 4.533 5.638 5.886 8.838 1.453 3.43 2.258 7.2 2.258 11.16v171.761c0 15.811-12.817 28.627-28.628 28.627s-28.626-12.816-28.626-28.627v-102.648l-237.4 237.399c-5.585 5.59-12.911 8.383-20.237 8.383z"
                            fill="#a0a6a2"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            <div className="flex flex-row items-center gap-5">
              <Image
                src="/icons/social/facebook_.svg"
                alt="facebook-badge"
                width={30}
                height={30}
              />
              <Image
                src="/icons/social/instagram_.svg"
                alt="instagram-badge"
                width={30}
                height={30}
              />
              <Image
                src="/icons/social/linkedin_.svg"
                alt="linkedin-badge"
                width={30}
                height={30}
              />
              <Image
                src="/icons/social/twitterbird_.svg"
                alt="twitter-badge"
                width={30}
                height={30}
              />
              <Image
                src="/icons/social/youtube_.svg"
                alt="youtube-badge"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

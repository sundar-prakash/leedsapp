import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <p className="">
              Effortlessly manage, nurture and convert leeds
            </p>
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
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#pricing">Pricing & Plans</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 ">
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="#faqs">FAQs</Link></li>
            </ul>
          </div>
          <div className="space-y-4" id="contact">
            <h3 className="font-bold">Contact Us</h3>
            <ul className="space-y-2 ">
              <li className=""><Link href="mailto:support@leedsapp.com">Email: support@leedsapp.com</Link></li>
              <li className=""><Link href="tel:+91 9787575752">Phone: +91 97875 75752</Link></li>
            </ul>
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

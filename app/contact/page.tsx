import Image from "next/image";
import ContactForm from "../components/contact-form";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-[#ED3059] mx-auto mb-8"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions about LeedsApp? We&aposre here to help. Reach out to us
          and we&aposll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm />

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ED3059]">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Company Information
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    className="flex items-start"
                    href="https://maps.app.goo.gl/XfLHknEUaS9p1wp59"
                  >
                    <Image
                      src={"/icons/map.svg"}
                      width={100}
                      height={100}
                      alt="map"
                      className="w-6 h-6 text-[#ED3059] mr-3 flex-shrink-0 mt-1"
                    />
                    <span>
                      36/5 BHARATHI PERUMAL STREET, Opp AAVIN FACTORY, CHITHODE
                      ERODE: 638012
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-start" href="tel:+91 9787575752">
                    <Image
                      src={"/icons/phone.svg"}
                      width={100}
                      height={100}
                      alt="map"
                      className="w-6 h-6 text-[#ED3059] mr-3 flex-shrink-0"
                    />
                    <span>+91 97875 75752</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-start"
                    href="mailto:support@leedsapp.com"
                  >
                    <Image
                      src={"/icons/envelop.svg"}
                      width={100}
                      height={100}
                      alt="map"
                      className="w-6 h-6 text-[#ED3059] mr-3 flex-shrink-0"
                    />
                    <span>support@leedsapp.com</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Our Location
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.9683758464266!2d77.66534037505122!3d11.409841488780042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI0JzM1LjQiTiA3N8KwNDAnMDQuNSJF!5e0!3m2!1sen!2sin!4v1745414016266!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

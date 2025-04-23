import localFont from "next/font/local";



const Montserrat = localFont({
  src: [
    {
      path: "./Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    
  ],
  fallback: ["sans-serif"],
  variable: "--font-functionPro",
});
export {   Montserrat };

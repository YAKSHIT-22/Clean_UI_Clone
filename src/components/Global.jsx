import React from "react";
import Blog from "./Blog";
import MobileDev from "./MobileDev";
import Nominee from "./Nominee";

import androidver from "../assets/Portfolpage/android-ver.png";
import react from "../assets/Portfolpage/react.png";
import facebook from "../assets/Portfolpage/facebook.jpg";
import wordpress from "../assets/Portfolpage/wordpress.jpg";
import google from "../assets/Portfolpage/google.jpg";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Global({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}
export function Faqs({ children }) {
  return (
    <div>
      {children}
      <MobileDev
        img1={androidver}
        img2={react}
        para1={
          "We elevate your android development strategy, offer end to end services and build next-gen Android apps."
        }
        para2={
          "We leverage the power of React Native tool to facilitate businesses to deliver a one-of-a-kind experience."
        }
        heading1={"Android App Development"}
        heading2={"React Native"}
      />
      <Nominee />
      <Blog
        img1={facebook}
        img2={wordpress}
        img3={google}
        heading1={"What’s the Buzz Around Facebook’s Metaverse?"}
        para1={
          "“Facebook has taken a step ahead to change its name to Meta. Facebook has already announced its plans"
        }
        heading2={"Step By Step Guide to Create Google Cloud Account"}
        para2={
          "A service account is a special type of Google account that helps users to authenticate and authorize."
        }
        heading3={"How Would I Create a WordPress Account?"}
        para3={
          "WordPress is one of the most popular and preferred content management systems to build a website."
        }
      />
    </div>
  );
}

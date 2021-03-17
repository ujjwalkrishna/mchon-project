import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/m_logofixed.png"


// import React from "react"

export default function Home() {
  return (
    <div className="cont">
    <div className="overlay">

    <div className="logo-image"> <img src={logo} /> </div>
    <h1 className="center-text"> Under Maintenance </h1>
    <p className="colour-text"> Meanwhile, you can take a look at the rest of my work <span className="linkBlue"> <a href="http://www.behance.net/mchonjb" target="_blank"> here, at behance.net/mchonjb </a> </span></p>

    </div>
    </div>
  );
}
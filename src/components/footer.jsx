import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import "../styles/footer.css";
export default function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <CiTwitter />
        <RiTelegramLine />
        <CiLinkedin />
      </div>
      <p>&copy: 2021pedrotechpizza.com</p>
    </div>
  );
}

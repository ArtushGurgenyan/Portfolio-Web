import "./footer.style.css";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <CiLocationOn />
          Location
        </div>
        <div>
          <CiMail />
          mail@domain.com
        </div>
        <div>
          <IoIosCall />
          Call +01 123456789
        </div>
      </footer>
    </div>
  );
};

export default Footer;

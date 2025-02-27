import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary">
      <div className="container w-full h-[10vh] flex justify-between items-center">
        <span>&copy;{new Date().getFullYear()}, HushAsk</span>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/fadidajunaedy">
                <Button size="icon" className="cursor-pointer">
                  <FaGithub />
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

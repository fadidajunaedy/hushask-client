import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="md:absolute w-full bg-secondary md:bg-[unset]">
      <div className="container w-full h-[10vh] flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-blue-600 text-xl font-bold"
        >
          <FaQuestionCircle className="text-2xl" />
          <span>HushAsk</span>
        </Link>
        <nav>
          <ul className="flex space-x-2">
            <li>
              <Button>Login</Button>
            </li>
            <li>
              <Button variant="outline">Register</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

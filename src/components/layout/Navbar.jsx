import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>

        <li>
          <Link>
            <span>Find Services</span>
            <span><svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 0.5L8.5 8.5L0.5 0.5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>
          </Link>
        </li>

        <li>
          <Link>
            <span>Find Services</span>
            <span><svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 0.5L8.5 8.5L0.5 0.5" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>
          </Link>
        </li>

        <li>
          <Link>
            <span>Find Services</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

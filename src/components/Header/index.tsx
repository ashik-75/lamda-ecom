import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart";
import SearchBar from "./SearchBar";

const links = [
  {
    id: 1,
    url: "/cart",
    name: "Cart",
  },
  {
    id: 2,
    url: "/checkout",
    name: "Checkout",
  },
];

function Header() {
  return (
    <header className="p-5 bg-white fixed inset-x-0 z-40 w-full">
      <div className=" max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          {/* left porttion (logo && menu) */}
          <div className="flex items-center gap-5">
            {/* image */}
            <div>
              <Link to={"/"}>
                <img
                  className="w-14 h-14 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </Link>
            </div>

            {/* links */}
            <div className="hidden sm:block">
              <ul className="flex gap-5">
                {links.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        isActive ? "font-medium" : ""
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right (search & profile & cart) */}
          <div className="flex gap-x-8">
            <User className="h-5 w-5" />
            <SearchBar />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Link, NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/analytics",
    name: "Analytics",
  },
  {
    id: 2,
    url: "/resources",
    name: "Resources",
  },
  {
    id: 2,
    url: "/payment",
    name: "Payment",
  },
];

function Header() {
  return (
    <div className="p-5 bg-slate-50">
      <div className=" max-w-7xl mx-auto flex items-center gap-5">
        <div>
          <Link to={"/"}>
            <img
              className="w-14 h-14 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? "font-medium" : "")}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About",
    path: "/About",
  },
  {
    id: 3,
    text: "Contact",
    path: "/Contact",
  },
  {
    id: 4,
    text: "Cart",
    path: "/Cart",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className="btn btn-ghost no-underline"
            key={Link.id}
            to={link.path}
          >
            {" "}
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;

import { Fragment } from "react";
import CartWidget from "../CartWidget";

const NavbarItem = (props) => {
  return (
    <Fragment>
      <li className="nav-item">
        <p className="nav-link active" aria-current="page">
          {props.texto}
        </p>
      </li>
      <li> <a className="nav__link" href="www.coderhouse.com">
        <CartWidget/>
        </a>
      </li>
    </Fragment>
  );
};

export default NavbarItem;

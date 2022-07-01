import React,{useContext} from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx=useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.IsLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.IsLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.IsLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

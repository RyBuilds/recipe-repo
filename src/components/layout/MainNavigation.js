import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Recipe.ly</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/quick-recipes">Quick Recipes</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

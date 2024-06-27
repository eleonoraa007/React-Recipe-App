import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link to="/">
            <span>Homepage</span>
          </Link>
        </li>
        <li>
          <Link to="calorie">
            <span>Low Calorie Recipes</span>
          </Link>
        </li>
        <li>
          <Link to="protein">
            <span>High in Protein Recipes</span>
          </Link>
        </li>
        <li>
          <Link to="dessert">
            <span>Desserts</span>
          </Link>
        </li>
        <li>
          <Link to="salad">
            <span>Salads</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

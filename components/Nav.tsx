import Link from "next/link";
import navStyles from "../styles/Nav.module.css"

const Nav = ({ menus }: any) => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                {menus.map((menu: any) => (
                    <li key={menu.id}>
                        <Link href={menu.adress}>
                            <a>{menu.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Nav.defaultProps = {
    menus: [
        {'id': 1, 'name': 'Home', 'adress': '/'},
        {'id': 2, 'name': 'Job hunt', 'adress': '/jobhunt'},
        {'id': 3, 'name': 'Stock', 'adress': '/stock'},
        {'id': 4, 'name': 'Land', 'adress': '/land'},
        {'id': 5, 'name': 'Global', 'adress': '/global'}
    ],
}

export default Nav;
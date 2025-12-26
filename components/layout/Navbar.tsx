import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    return (
<header>
    <nav className="navbar">
        <div className="nav-left">
                <Link href="/">Sloth-E</Link>
        </div>

        <ul className="nav-right">
            <li>
                <Link href="/about">About</Link>
            </li>

            <li>
                <Link href="/store">Store</Link>
            </li>

            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>    
    </nav>
</header>
);
}

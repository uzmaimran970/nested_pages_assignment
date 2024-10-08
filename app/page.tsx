import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav_bar">
      <div>
        <h1 className="logo">Uzma Imran</h1>
      </div>
      <ul className="menu_bar">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/services">Service</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


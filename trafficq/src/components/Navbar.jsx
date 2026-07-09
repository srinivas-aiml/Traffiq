function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>TrafficQ</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#planner">Journey Planner</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
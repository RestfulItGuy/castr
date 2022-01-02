import { Outlet, Link } from 'react-router-dom'
export function Navigation() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
      <Outlet />
    </>
  );
}
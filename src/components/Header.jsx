import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <Link to="/">Home</Link>

      {user ? (
        <>
          <span>Welcome, {user.name}</span>

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">
          Login
        </Link>
      )}
    </header>
  );
}

export default Header;
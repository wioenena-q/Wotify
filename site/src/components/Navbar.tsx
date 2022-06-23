import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { API_URL } from "../utils/constants";

type Props = {};

const Navbar = (props: Props) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  return (
    <div className="bg-black/25">
      <div
        className={`container mx-auto flex items-center ${
          isAuthenticated ? "justify-between" : "justify-end"
        } `}
      >
        {user && isAuthenticated && (
          <div className="text-xl ml-2">
            Hoşgeldin <span>{user.username}</span>!
          </div>
        )}
        <button
          className="w-24 mx-3 my-2 text-xl bg-yellow-900/50 px-3 py-1 rounded hover:text-yellow-400 hover:bg-yellow-900/70 transition-colors duration-500"
          onClick={() => {
            if (isAuthenticated) {
              fetch(`${API_URL}/auth/discord/logout`);
              setIsAuthenticated(false);
            } else {
              window.location.href = `${API_URL}/auth/discord/login`;
            }
          }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

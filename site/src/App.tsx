import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { type IUser, UserContextProvider } from "./contexts/UserContext";
import Dashboard from "./pages/Dashboard";
import { API_URL } from "./utils/constants";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      fetch(`${API_URL}/me`)
        .then((res) => {
          if (res.status === 200) {
            setIsAuthenticated(true);
            return res.json();
          } else {
            setIsAuthenticated(false);
          }
        })
        .then((data) => {
          if (data) {
            setUser(data);
          }
        })
        .catch((err) => {
          console.error(err);
          setIsAuthenticated(false);
        });
    }
  }, []);
  console.log(user);

  useEffect(() => {
    if (!isAuthenticated) setUser(null);
  }, [isAuthenticated]);

  return (
    <div className="h-full bg-neutral-900 text-yellow-500">
      <AuthContextProvider
        value={{
          isAuthenticated,
          setIsAuthenticated,
        }}
      >
        <UserContextProvider
          value={{
            user,
            setUser,
          }}
        >
          <div className="h-full">
            <Navbar />
            <Dashboard />
          </div>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

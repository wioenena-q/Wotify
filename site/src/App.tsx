import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";
import Dashboard from "./pages/Dashboard";
import { API_URL } from "./utils/constants";
import { hasPermission } from "./utils/permissions";
import type { IUser } from "./utils/types";

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
        .then((data: IUser) => {
          if (data) {
            data.guilds = data.guilds.filter((guild) =>
              hasPermission(guild.permissions, "MANAGE_GUILD")
            );
            setUser(data);
          }
        })
        .catch((err) => {
          console.error(err);
          setIsAuthenticated(false);
        });
    }
  }, []);

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

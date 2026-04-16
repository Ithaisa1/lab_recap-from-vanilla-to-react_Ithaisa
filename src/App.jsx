import { useEffect, useState } from "react";
import "./App.css";

let hasLoadedInitialUsers = false;

function UserList() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();

      setUsers((prevUsers) => [...prevUsers, ...data.users]);
      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasLoadedInitialUsers) {
      return;
    }

    hasLoadedInitialUsers = true;
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>User Profiles</h1>
      </header>

      <main>
        <div id="user-list-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          ))}
        </div>

        <button onClick={fetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </main>
    </div>
  );
}

export default function App() {
  return <UserList />;
}

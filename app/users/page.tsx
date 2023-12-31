import React from "react";

interface User {
  id: number;
  name: string;
}

const Userspage = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, // next js will get fresh data from backend every 10 seconds caching is only implemented in fetch function only
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Userspage;

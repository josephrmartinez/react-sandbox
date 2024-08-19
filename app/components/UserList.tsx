"use client";

import React from "react";
import UserFetcher from "./UserFetcher";

const UserList: React.FC = () => {
  return (
    <div>
      <div className="underline">User List:</div>
      <UserFetcher
        render={({ users, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <ul>
              {users.map((user) => (
                <li key={user.name}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default UserList;

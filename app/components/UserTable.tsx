"use client";

import React from "react";
import UserFetcher from "./UserFetcher";

const UserTable: React.FC = () => {
  return (
    <div>
      <div className="underline">User Table</div>
      <UserFetcher
        render={({ users, loading }) => {
          return loading ? (
            <div>Loading...</div>
          ) : (
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </table>
          );
        }}
      />
    </div>
  );
};

export default UserTable;

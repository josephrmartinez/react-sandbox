"use client";

import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserFetcherProps {
  render: (props: { users: User[]; loading: boolean }) => JSX.Element;
}

const UserFetcher: React.FC<UserFetcherProps> = ({ render }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return render({ users, loading });
};

export default UserFetcher;

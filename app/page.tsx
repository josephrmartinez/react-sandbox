import Image from "next/image";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserTable from "./components/UserTable";

export default function Home() {
  return (
    <div>
      <div></div>
      <UserList />
      <UserTable />
    </div>
  );
}

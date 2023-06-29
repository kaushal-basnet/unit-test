import React, { useEffect, useState } from "react";
interface IUser {
  id: number;
  username: string;
}
export const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <div>
      {users?.length > 0 ? (
        users?.map((item: IUser) => {
          return <div key={item.id}>{item.username}</div>;
        })
      ) : (
        <span>No users found</span>
      )}
    </div>
  );
};

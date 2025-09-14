import { SquarePen, SquarePlus } from "lucide-react";
import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: crypto.randomUUID(),
      name: "Mosfiqur",
      address: "Natore",
    },
  ]);

  function changeUser(id, name) {
    console.log(id, name);

    const userCopy = [...users]; // Best practice

    const found = userCopy.find((user) => user.id === id);
    found.name = name;

    setUsers(userCopy);
  }

  function addUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Airin",
      addUser: "Hulhulia",
    };

    setUsers([...users, newUser]);
  }

  return (
    <div className="flex flex-col">
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-6">
            <p>
              {user.name} lives in {user.address}
            </p>
            <button
              className="flex gap-2 items-center bg-sky-600 text-white p-1 cursor-pointer rounded-sm"
              onClick={() => changeUser(user.id, "Random")}
            >
              <SquarePen size={16} className="text-white" /> Change
            </button>
          </li>
        ))}
      </ul>
      <button
        className="flex gap-2 items-center justify-center bg-amber-600 text-white p-1 cursor-pointer my-2 rounded-sm"
        onClick={addUser}
      >
        <SquarePlus size={16} className="text-white" />
        Add
      </button>
    </div>
  );
};

export default UserList;

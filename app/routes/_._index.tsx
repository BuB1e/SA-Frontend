import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface itemsProp {
  user_id: string;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  photo_url: string;
  salary: string;
}

export default function Index() {
  const [users, setUsers] = useState<itemsProp[]>([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = await fetch("https://rvpx.prakasitj.com/api/user/get");
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className="flex flex-col justify-center items-center w-auto h-auto overflow-auto">
      <div className="flex flex-col">
        {
          users.map((user) => (
            <div key={user.user_id} className="flex flex-row items-center justify-center w-auto h-auto bg-blue-400 m-2 rounded-xl p-2 gap-2">
              <img src={user.photo_url ?? "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2024/09/23183548/streets-of-food-dpHf2Boj76c-unsplash-1-1351x900.jpg"} alt={user.username} className="w-20 h-20 rounded-full" />
              <div className="flex flex-col text-black">
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.phone_number}</p>
                <p>{user.salary}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

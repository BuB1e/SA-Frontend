import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomTextBox from "~/components/custom_text_box";
import User from "~/models/user";
import { DOMAIN } from "~/server/domain";

export default function LoginView() {
    // user/getByUsername
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    async function fetchUser() {
        const response = await fetch(DOMAIN + "/user/getByUsername");
        const data: User[] = await response.json();

    
      }
    
      useEffect(() => {

      }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full h-svh bg-blue-200 overflow-auto">
            <div className="flex flex-col space-y-10 px-20 py-20 bg-white/20 justify-center items-center rounded-2xl shadow-xl">
                {/* Login Text */}
                <h1 className="text-black font-bold text-[48px]">Login</h1>
                {/* Username */}
                <CustomTextBox type="text" text="Username"/>
                {/* Password */}
                <CustomTextBox type="password" text="Password"/>
                <Link to="/">
                    <button type="button" className={"bg-primary-blue active:brightness-[80%] hover:brightness-[110%] hover:scale-110 duration-200 space-x-2 text-white font-bold shadow-lg rounded-lg text-2xl justify-center items-center w-fit h-fit px-6 py-2"}>
                        <h1 className="items-center">Login</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
}
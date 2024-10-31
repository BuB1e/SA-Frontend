import { Link,useNavigate} from "@remix-run/react";
import { useEffect, useState } from "react";
import CustomTextBox from "~/components/custom_text_box";
import User from "~/models/user";
import { DOMAIN } from "~/server/domain";

export default function LoginView() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function fetchUser(username: string, password: string) {
    interface response {
      username: string;
      message: string;
    }
    const response = await fetch(DOMAIN + "/user/getByUsername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data: response = await response.json();
    if (data.username == "Error authen failed") {
      setError("User not found");
    } else if (
      data.message == "undefined is not an object (evaluating 'authen[0].salt')"
    ) {
      setError("User not found");
    } else {
      setSuccess(true);
    }
  }

  useEffect(() => {
    if (success) {
      sessionStorage.setItem("user", JSON.stringify({ name: username }));
      sessionStorage.setItem("username", username);
      window.location.href = "/";
    }
  }, [success]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-svh bg-blue-200 overflow-auto">
      <div className="flex flex-col space-y-10 px-20 py-20 bg-white/20 justify-center items-center rounded-2xl shadow-xl">
        {/* Login Text */}
        <h1 className="text-black font-bold text-[48px]">Login</h1>
        {/* Username */}
        <CustomTextBox type="text" text="Username" state={setUsername} />
        {/* Password */}
        <CustomTextBox type="password" text="Password" state={setPassword} />
        {error && <h1 className="text-red-500">{error}</h1>}
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            fetchUser(username, password);
          }}
        >
          <button
            type="button"
            className={
              "bg-primary-blue active:brightness-[80%] hover:brightness-[110%] hover:scale-110 duration-200 space-x-2 text-white font-bold shadow-lg rounded-lg text-2xl justify-center items-center w-fit h-fit px-6 py-2"
            }
          >
            <h1 className="items-center">Login</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

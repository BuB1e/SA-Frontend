import { Link } from "@remix-run/react";

export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center h-svh bg-blue-200">
            <div className="flex flex-col space-y-10 px-20 py-20 bg-white/20 justify-center items-center rounded-2xl shadow-xl">
                {/* Login Text */}
                <h1 className="text-black font-bold text-[48px]">Login</h1>
                {/* Username */}
                <div className="bg-white border-2 border-black w-full h-12 rounded-xl">
                    <input 
                    type="text" 
                    placeholder="Username"
                    className="w-full h-full border-none bg-transparent px-4 py-2 text-black/80 focus:rounded-xl" 
                    />
                </div>
                {/* Password */}
                <div className="bg-white border-2 border-black w-full h-12 rounded-xl">
                    <input 
                    type="password" 
                    placeholder="Password"
                    className="w-full h-full border-none bg-transparent px-4 py-2 text-black/80 focus:rounded-xl" 
                    />
                </div>
                <Link to="/">
                    <button type="button" className={"bg-primary-blue hover:scale-110 duration-200 space-x-2 text-white font-bold shadow-lg rounded-lg text-2xl justify-center items-center w-fit h-fit px-6 py-2"}>
                        <h1 className="items-center">Login</h1>
                    </button>
                </Link>
            </div>
        </div>
    );
}
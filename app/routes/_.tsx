import { Outlet } from "@remix-run/react";
import { useEffect } from "react";
import Body from "~/components/body";
import Header from "~/components/header";

export default function Base() {
    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if(!user){
            window.location.href = '/login';
        }

    }, []);
    return(
        <Body>
            <Header/>
            <div className="mb-[10.9rem] md:mb-[6.5rem]"></div>
            <Outlet/>
        </Body>
    );
}
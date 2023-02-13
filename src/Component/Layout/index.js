import React from "react";
import { Navibar } from "../NavBar";

export const Layout2 = (props) => {
    return (
        <div className="h-screen block max-w-3xl m-auto text-center ">
            <header>
                <Navibar />
            </header>
            <main className="text-[#18188b]">{props.children}</main>
        </div>
    );
};
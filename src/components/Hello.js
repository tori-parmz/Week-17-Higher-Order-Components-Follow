import React from "react";
import withRedBorder from "./withRedBorder";

const Hello = () => {
    return (
        <>
        Hello, World
        </>
    );
}

export default withRedBorder(Hello);
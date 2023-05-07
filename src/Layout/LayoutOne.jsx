import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";

const LayoutOne = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;
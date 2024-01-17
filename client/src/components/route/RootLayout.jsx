import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { slideIn, slideOut } from "../../actions/slideIn";


const RootLayout = () => {
    const dispatch = useDispatch();

    const slideInState = useSelector((state) => state.slideInReducer.slideIn);

    useEffect(() => {
        if (window.innerWidth <= 760) {
            dispatch(slideOut());
        }
    }, [dispatch]);

    const handleSlideIn = () => {
        if (window.innerWidth <= 760) {
            if (slideInState) {
                dispatch(slideOut());
            } else {
                dispatch(slideIn());
            }
        }
    };

    return (
        <>
            <Navbar handleSlideIn={handleSlideIn} slideIn={slideIn} />
            <Outlet />
        </>
    );
}

export default RootLayout;
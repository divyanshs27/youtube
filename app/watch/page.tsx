"use client";
import React, { useEffect } from "react";
import Watch from "../src/components/Watch";
import { useDispatch } from "react-redux";
import { closeMenu } from "../src/utils/appSlice";
const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <Watch />
      
    </div>
  );
};

export default Page;

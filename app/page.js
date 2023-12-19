"use client";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/card/Card";
import Sidebar from "@/components/sidebar/Sidebar";
import Table from "@/components/table/Table";
import { getCardDetail, getTableDetail } from "@/lib/cardServices/CardService";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [cardDetails, setcardDetails] = useState([]);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = () => {
    const response = getTableDetail();
    const card = getCardDetail();
    console.log(card, "%%%%%%%%%%%%%%%");
    setcardDetails(card.data);

    setData((prev) => response);
  };
  return (
    <>
      <div className="h-[800px] w-full  m-0 p-0">
        <div
          style={{ backgroundColor: "#F7FCFD" }}
          className="  ml-[60px] mt-[-1600px] z-1 flex justify-center align-middle p-[10px]"
        >
          <div className="h-full w-full pt-[48px] pb-[48px]">
            <div>
              <div className="font-inter text-3xl font-medium ">
                <h1>Admin Dashboard</h1>
              </div>
              <div className="font-inter font-normal text-sm leading-6 text-tableHeading text-neutralGray600">
                <p>
                  Effortlessly Manage, Monitor and Modify: Your control center
                  for seamless oversight and optimization.
                </p>
              </div>
              <div className="pt-[32px] flex font-inter text-sm text-tableHeading ">
                <button className="p-[2px] focus:text-primaryBlue focus:border-[2px]    focus:border-solid focus:border-b-primaryBlue">
                  Users
                </button>
                <button className="p-[2px] focus:border-[2px] focus:text-primaryBlue  focus:border-solid focus:border-b-primaryBlue ">
                  Requests
                </button>
              </div>
              <div className="">
                <hr></hr>
              </div>
            </div>

            <div>
              <div className="flex justify-around pt-[32px] flex-wrap">
                {/* <div>
                  <Card text={"Sign Up Initiated "} tam={56} />
                </div>
                <div>
                  <Card text={"Sign UP Completed"} tam={32} />
                </div>
                <div>
                  <Card text={"Log In Completed"} tam={30} />
                </div>
                <div>
                  <Card text={"Request Raised"} tam={12} />
                </div> */}
                {cardDetails?.map((value, index) => {
                  return <Card text={value.text} tam={value.tam} />;
                })}
              </div>
            </div>

            <div className="border-[2px] pt-0 mt-[32px]">
              <div className="h-[60px] flex items-center bg-white  shadow-lg ">
                <h1 className="p-[15px] text-xl font-inter font-normal">
                  Users
                </h1>
                <h1 className="p-[15px] text-s font-inter font-normal">
                  56 User
                </h1>
              </div>

              <div className="w-full flex flex-col p-5 bg-white mt-[1px]">
                <div className="shadow-lg">
                  <Table
                    data={data}
                    className="p-[15px] w-full flex flex-wrap"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

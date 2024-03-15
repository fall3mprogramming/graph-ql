"use client";

import React from "react";

export default function UserInfos({
  infosUser,
  userTransaction,
  userTransactionInfos,
}) {
  const totalXP = Math.round((userTransaction + 70000) / 1000);

  return (
    <>
      <div
        style={{
          
          
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridRowGap: "30px",
            gridColumnGap: "30px",
            gridAutoRows: "230px", // Fixer la hauteur de chaque élément à 230px
            padding: "2vw",
            justifyContent: "center",
          
          
          
        }}
      >
        <div className="flex first flex-col items-center text-center bg-gray-900 ">
          <p className="text-md text-white text-center mt-6 mb-1">USER IDENTIFICATION</p>

          <p className="text-xs text-white mt-1 mb-1">Pseudo :</p>
          <p className="text-3xl font-bold text-blue-600 ">
            {infosUser.login}
          </p>

          <p className="text-xs text-white mt-1 mb-1">Id :</p>
          <p className="text-3xl font-bold text-blue-600 ">
            {userTransactionInfos.userId}
          </p>

          <p className="text-xs text-white mt-1 mb-1">E-mail :</p>
          <p className="text-2xl font-bold text-blue-600 ">
            {infosUser.email}
          </p>
        </div>

        <div className="flex flex-col items-center bg-gray-900 col-span-2 relative">
        <p className="text-md text-white text-center mt-6 mb-1">AMOUT XP</p>
          <p className="text-9xl w-[80%] text-blue-600">
            {totalXP} kb
          </p>
        </div>

        <div className="flex items-center flex-col bg-gray-900">
          <p className="text-md text-white text-center mt-6 mb-1">CURRENT LEVEL</p>
          <p className="text-9xl w-[80%] text-blue-600">
            {infosUser.events[0].level}
            </p>
        </div>
      </div>
    </>
  );
}

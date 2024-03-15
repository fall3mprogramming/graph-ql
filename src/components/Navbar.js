import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Navbar( {firstName, lastName} ) {
  const navigate = useNavigate()
  function disconnect() {
    localStorage.removeItem("token");
    navigate("/")
    return;
  }
  return (
    <div className="flex justify-between text-white w-full bg-black">
      <div className="flex flex-row mx-[2vw] items-center">
        <h1 className="text-4xl"> Welcome <span className="uppercase">{lastName}</span> {firstName}

         </h1>
      </div>

      <div className="flex items-center">

        <div className="flex items-center ml-[2vw]">
          <div className="flex items-center mx-[2vw]">
            <a href="/">
              <div
                className="cursor-pointer text-red-400 rounded text-blue"
                onClick={disconnect}
              >
                Lougout
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default function SideBar(): ReactElement {
  const [isOpen, setOpen] = useState<boolean | boolean>(false);
  const router = useRouter();
  const menu = [
    { name: "Dashboard", url: "/" },
    { name: "Cadastro Produto", url: "/product" },
    { name: "Usuários", url: "/users" },
    { name: "Pedidos", url: "/orders" },
    { name: "Logout", url: "" },
  ];

  return (
    <div className={`flex ${isOpen && "bg-[#00000033] w-screen"}`}>
      <div
        className={`bg-blue-400 h-screen ${
          isOpen ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!isOpen)}
          className={`bg-white text-blue-400 text-5xl rounded-full absolute -right-5 top-9 border-2 border-blue-400 cursor-pointer ${
            !isOpen && "rotate-180"
          } duration-500`}
        />
        <div className="space-y-20 mx-3">
          <h1
            className={`text-white text-2xl font-medium origin-left cursor-pointer ml-3 mt-12 duration-150 ${
              !isOpen && "scale-0"
            }`}
          >
            Belluzzi Bolos
          </h1>

          <div className={`origin-left duration-150 ${!isOpen && "scale-0"}`}>
            <ul>
              {menu.map((e, key) => {
                if (e.name == "Logout") {
                  return (
                    <li
                      className="mt-12 bg-blue-400 rounded-full hover:bg-red-400 hover:text-white duration-100 pl-4 h-12 flex items-center font-medium text-lg cursor-pointer"
                      key={key}
                    >
                      {e.name}
                    </li>
                  );
                } else if (router.asPath == e.url) {
                  return (
                    <li
                      onClick={()=>{
                        router.push(e.url)
                      }}
                      className="mt-5 bg-white rounded-full pl-4 h-12 flex items-center font-medium text-lg cursor-pointer"
                      key={key}
                    >
                      {e.name}
                    </li>
                  );
                } else
                  return (
                    <li
                      onClick={()=>{
                        router.push(e.url)
                      }}
                      className="mt-5 bg-blue-400 rounded-full hover:bg-white duration-100 pl-4 h-12 flex items-center font-medium text-lg cursor-pointer"
                      key={key}
                    >
                      {e.name}
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

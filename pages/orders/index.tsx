import { NextPage } from "next";
import React, { ReactElement, useState } from "react";
import Header from "../components/_header";
import SideBar from "../components/_sideBar";
import { listOrders } from "../mock/data";

export default function orders(): ReactElement {
  const listTopics = [
    { title: "Ultimos Pedidos", func: () => setOpen(false) },
    { title: "Todos os pedidos", func: () => setOpen(true) },
  ];

  const [isOpen, setOpen] = useState<boolean | boolean>(false);

  return (
    <div className="flex">
      <div className="z-10">
        <SideBar />
      </div>
      <div className="absolute ml-24">
        <Header title={"Pedidos"} topics={listTopics} />
        <div className={`${isOpen && "scale-0"} mt-5 ml-12`}>
          <div className="flex flex-wrap">
            {listOrders.map((e) => {
              return (
                <div key={e.order} className="border-2 rounded-3xl p-10 border-blue-200 bg-gray-50 w-80 hover:bg-blue-50">
                  <h1 className="text-2xl text-blue-400">
                    Pedido: <span className="font-bold text-black">{e.order}</span>
                  </h1>
                  <h1 className="text-lg text-blue-400">
                    Cliente:{" "}
                    <span className="font-medium text-black">{e.customer}</span>
                  </h1>
                  <div className="border-[1px] border-gray-200 w-3/4 my-4"></div>
                  <label className="text-blue-400 text-lg">Itens:</label>
                  <ul className="ml-5">
                    <li className="cursor-pointer hover:underline hover:underline-offset-auto">
                      Clique para mais detalhes.
                    </li>
                  </ul>
                  <div className="border-[1px] border-gray-200 w-3/4 my-4"></div>
                  <h1 className="text-2xl text-blue-400">
                    Valor:{" "}
                    <span className="font-bold text-green-600">{e.value}</span>
                  </h1>
                  <div className="flex space-x-6 mt-5">
                    <button className="border-[1px] cursor-pointer rounded-md p-2 border-red-300 bg-red-400 text-white">
                      Cancelado
                    </button>
                    <button className="border-[1px] cursor-pointer rounded-md p-2 border-green-300 bg-green-400">
                      Aprovado
                    </button>
                  </div>
                </div>
              );
            })}
            {/* <div className="border-2 rounded-3xl p-10 border-blue-200 bg-gray-50 w-80 hover:bg-blue-50">
              <h1 className="text-2xl text-blue-400">
                Pedido: <span className="font-bold text-black">123456</span>
              </h1>
              <h1 className="text-lg text-blue-400">
                Cliente:{" "}
                <span className="font-medium text-black">Fernando</span>
              </h1>
              <div className="border-[1px] border-gray-200 w-3/4 my-4"></div>
              <label className="text-blue-400 text-lg">Itens:</label>
              <ul className="ml-5">
                <li className="cursor-pointer hover:underline hover:underline-offset-auto">
                  Clique para mais detalhes.
                </li>
              </ul>
              <div className="border-[1px] border-gray-200 w-3/4 my-4"></div>
              <h1 className="text-2xl text-blue-400">
                Valor:{" "}
                <span className="font-bold text-green-600">R$185.00</span>
              </h1>
              <div className="flex space-x-6 mt-5">
                <button className="border-[1px] cursor-pointer rounded-md p-2 border-red-300 bg-red-400 text-white">
                  Cancelado
                </button>
                <button className="border-[1px] cursor-pointer rounded-md p-2 border-green-300 bg-green-400">
                  Aprovado
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

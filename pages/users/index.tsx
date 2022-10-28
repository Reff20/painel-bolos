import Header from "../components/_header";
import SideBar from "../components/_sideBar";
import React, { ReactElement, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { FaEdit, FaTrash } from "react-icons/fa";
import { products, usersData } from "../mock/data";

export default function users(): ReactElement {
  const [isOpen, setOpen] = useState<boolean | boolean>(false);
  const listTopics = [
    { title: "Cadastro de produtos", func: () => setOpen(false) },
    { title: "Lista de produtos", func: () => setOpen(true) },
  ];

  const [isUser, setUser] = useState<string | string>("");
  const [isPass, setPass] = useState<string | string>("");
  const [isConfPass, setConfPass] = useState<string | string>("");

  return (
    <div className="flex">
      <div className="z-10">
        <SideBar />
      </div>
      <div className="absolute ml-24">
        <Header title={"Users"} topics={listTopics} />

        {/*Cadastro de usuários*/}
        <div className={`${isOpen && "scale-0"} mt-5 ml-12`}>
          <h1 className="font-medium text-xl text-pink-300">
            Cadastrar usuários:
          </h1>

          <div className="flex flex-col mt-4 space-y-4">
            <div className="space-x-16 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Usuário:</label>
              <input
                onChange={(e) => setUser(e.target.value)}
                type="text"
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="space-x-20 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-3">Senha:</label>
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-3">Confirmar senha:</label>
              <input
                type="password"
                onChange={(e) => setConfPass(e.target.value)}
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="space-x-11 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Permissão:</label>
              <select className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300 resize-none">
                <option disabled selected hidden value="NONE">Seleciona uma opção</option>
                <option value="USER">USER</option>
                <option value="ADM">ADM</option>
              </select>
            </div>
            <input
              type="submit"
              value="Salvar"
              className=" cursor-pointer border-2 w-40 border-blue-300 bg-blue-500 active:bg-blue-300 text-white font-medium rounded-full"
            />
          </div>
        </div>

        {/*Lista de produtos cadastrados*/}
        <div
          className={`${
            !isOpen && "scale-0"
          } mt-36  ml-16 w-[90%] h-full top-0 absolute`}
        >
          <h1 className="font-medium text-xl text-pink-300">
            Lista:
          </h1>
          <div className="border-2 w-[85%] h-[130%] mt-10 border-blue-300">
              <ul>
                <li className="flex flex-row items-center justify-between border-b-2 border-gray-300 py-5 px-8 bg-gray-50">
                  <label className="font-medium w-10 text-blue-400">Id</label>
                  <label className="font-medium w-32 text-blue-400">
                    Nome do Usuário
                  </label>
                  <label className="font-medium w-32 text-blue-400">
                    Data de criação
                  </label>
                  <label className="font-medium w-32 text-blue-400">
                    Permissão
                  </label>
                  <label className="font-medium w-32 text-pink-400">
                    Editar
                  </label>
                  <label className="font-medium w-32 mr-8 text-pink-400">
                    Excluir
                  </label>
                </li>
              </ul>
            <ul className="h-[86.5%] overflow-scroll overflow-x-hidden">
              <ul>
                {usersData &&
                  usersData.map((e, key) => {
                    return (
                      <li
                        key={key}
                        className="flex flex-row justify-between border-b-2 border-gray-100 py-5 px-8 hover:bg-blue-50"
                      >
                        <label className="font-medium w-10">{e.id}</label>
                        <label className="font-medium w-32">{e.user}</label>
                        <label className="font-medium w-32">{e.date}</label>
                        <label className="font-medium w-32">{e.permission}</label>
                        <label
                          className="font-medium w-32 text-blue-500"
                          onClick={() => alert("Editar")}
                        >
                          <FaEdit />
                        </label>
                        <label
                          className="font-medium w-32 text-red-500"
                          onClick={() => alert("Excluir")}
                        >
                          <FaTrash />
                        </label>
                      </li>
                    );
                  })}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

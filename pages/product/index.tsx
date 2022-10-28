import Header from "../components/_header";
import SideBar from "../components/_sideBar";
import React, { ReactElement, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { FaEdit, FaTrash } from "react-icons/fa";
import { products } from "../mock/data";

export default function product(): ReactElement {
  const [isOpen, setOpen] = useState<boolean | boolean>(false);
  const listTopics = [
    { title: "Cadastro de produtos", func: () => setOpen(false) },
    { title: "Lista de produtos", func: () => setOpen(true) },
  ];

  const [isTitle, setTitle] = useState<string | string>("");
  const [isDesc, setDesc] = useState<string | string>("");
  const [isVal, setVal] = useState<string | string>("");
  const [isImage, setImage] = useState<any | any>();
  const [isQtd, setQtd] = useState<any | any>();

  return (
    <div className="flex">
      <div className="z-10">
        <SideBar />
      </div>
      <div className="absolute ml-24">
        <Header title={"Products"} topics={listTopics} />

        {/*Cadastro de produtos*/}
        <div className={`${isOpen && "scale-0"} mt-5 ml-12`}>
          <h1 className="font-medium text-xl text-pink-300">
            Cadastrar produtos:
          </h1>
          <div className="flex flex-col mt-4 space-y-4">
            <div className="space-x-10 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Título:</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="space-x-11 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Valor:</label>
              <CurrencyInput
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                onChange={(e) => setVal(e.target.value)}
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-2">Quantidade:</label>
              <input
                type="number"
                onChange={(e) => setQtd(e.target.value)}
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <div className="space-x-2 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Descrição:</label>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300 resize-none"
              />
            </div>
            <div className="space-x-5 flex items-start justify-start">
              <label className="text-blue-300 text-lg mr-4">Imagem:</label>
              <input
                onChange={(e) => setImage(e.target.files)}
                multiple={false}
                accept="image/*"
                type="file"
                className="w-80 border-[1px] border-gray-300 rounded-lg px-2 decoration focus:outline-none focus:border-pink-300"
              />
            </div>
            <input
              type="submit"
              value="Salvar"
              onClick={() => {
                let value = isVal.replace("R$", "");
                let num = Number(value);
                console.log(num);
              }}
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
          <div className="border-2 w-[100%] h-[147.5%] mt-10 border-blue-300">
              <ul>
                <li className="flex flex-row items-center justify-between border-b-2 border-gray-300 py-5 px-8 bg-gray-50">
                  <label className="font-medium w-10 text-blue-400">Id</label>
                  <label className="font-medium w-36 text-blue-400">
                    Nome do produto
                  </label>
                  <label className="font-medium w-32 text-blue-400">
                    Valor do produto
                  </label>
                  <label className="font-medium w-32 text-blue-400">
                    Quantidade
                  </label>
                  <label className="font-medium w-32 text-blue-400">
                    Categoria
                  </label>
                  <label className="font-medium w-32 text-pink-400">
                    Editar
                  </label>
                  <label className="font-medium w-32 text-pink-400 mr-8">
                    Excluir
                  </label>
                </li>
              </ul>
            <ul className="h-[86.5%] overflow-scroll overflow-x-hidden">
              <ul>
                {products &&
                  products.map((e, key) => {
                    return (
                      <li
                        key={key}
                        className="flex flex-row justify-between border-b-2 border-gray-100 py-5 px-8 hover:bg-blue-50"
                      >
                        <label className="font-medium w-10">{e.id}</label>
                        <label className="font-medium w-32">{e.name}</label>
                        <label className="font-medium w-32">
                          R$ {e.price},00
                        </label>
                        <label className="font-medium w-32">{e.amount}</label>
                        <label className="font-medium w-32">{e.category}</label>
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

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "./components/_header";
import SideBar from "./components/_sideBar";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="z-10">
        <SideBar />
      </div>
      <div className="absolute ml-24">
        <Header title={"Dashboard"} topics={[{title: "Cadastro de Produtos", func: ()=> router.push("/product")},{title: "Usuários", func:()=> router.push("/users")}, {title: "Pedidos", func:()=> router.push("/orders")}]} />
      </div>
    </div>
  );
};

export default Home;

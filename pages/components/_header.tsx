import React, { ReactElement } from "react";

interface topicsInterface {
    title: String,
    func?: any,
}

interface HeaderInterface {
  title: String;
  topics?: topicsInterface[]
}

export default function Header({
  title,
  topics,
}: HeaderInterface): ReactElement {
  return (
    <div>
      <div className="mt-5 ml-12">
        <div className="w-[90vw] border-b-2 border-blue-400 py-2">
          <h1 className="text-4xl font-medium text-blue-400 cursor-pointer">{title}</h1>
        </div>
        <div>
            <ul className="flex space-x-5 mt-3">
            {
                topics && topics.map((e,key)=>{
                    return <li key={key} onClick={e.func} className="cursor-pointer text-blue-400 border-blue-400 hover:border-b-[1px]">{e.title}</li>
                })
            }
            </ul>
        </div>
      </div>
    </div>
  );
}

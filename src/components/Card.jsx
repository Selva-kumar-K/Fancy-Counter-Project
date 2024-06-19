import { useEffect, useState } from "react";
import Buttons from "./Buttons";

export default function Card() {
  const [count, setCount] = useState(0)
  const locked = count === 5 ? true : false
  const handleEvent = (event) =>{
    setCount(0)

    event.currentTarget.blur()
  }

  useEffect(() => {
    window.addEventListener('keydown' , (event) => {
      if(event.code === 'Space'){
        const newCount = count + 1
        if(newCount > 5){
          setCount(5)
          return;
        }
        setCount(newCount)
      }
    })
  }, [count])
  return (
    <div className="bg-green-500 rounded-2xl flex flex-col">
      <div className="max-w-[300px] flex flex-col items-center p-8 lg:max-w-[500px]">
        <h1 className="text-3xl lg:text-5xl text-green-100 font-mono font-semibold text-center">
          {locked ? <span>Limit! Buy<b className="text-slate-800"> Pro</b> for &gt; 5</span>: "Fancy Counter"}
        </h1>
        <p className="text-[120px]">{count}</p>
        <button className="hover:text-slate-700" onClick={handleEvent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      </div>
      <Buttons setCount={setCount} locked={locked}/>
    </div>
  );
}

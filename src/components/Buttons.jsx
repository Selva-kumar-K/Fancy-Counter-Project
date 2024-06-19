import CountButton from "./CountButton";

export default function Buttons({ setCount, locked }) {
  return (
    <div className="flex bg-slate-800 rounded-lg mt-10">
      <CountButton setCount={setCount} type="plus" locked={locked} />
      <CountButton setCount={setCount} type="minus" locked={locked}/>
    </div>
  );
}

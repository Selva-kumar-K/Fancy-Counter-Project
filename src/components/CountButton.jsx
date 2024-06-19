export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      });
    }

    event.currentTarget.blur()
  };

  return (
    <button disabled={locked}
      onClick={handleClick}
      className="text-white hover:bg-slate-600 w-full flex justify-center"
    >
      {type === "plus" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-20"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      )}
    </button>
  );
}

import { Tooltip } from "react-tooltip";

const FavoriteButton = () => {
  return (
    <div>
      <button
        data-tooltip-id="favorite-button"
        data-tooltip-content="Adicionar aos favoritos"
        data-tooltip-place="top"
        className="w-12 h-12 flex justify-center items-center text-white border-white/90 border border-solid rounded-full p-2 hover:text-black hover:bg-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.75 17.352L6.96 20L7.87533 14.392L4 10.4207L9.35533 9.602L11.75 4.5L14.1447 9.602L19.5 10.4207L15.6247 14.392L16.54 20L11.75 17.352Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <Tooltip id="favorite-button" style={{ backgroundColor: "white", color: "black", fontWeight: "700"}}/>
    </div>
  );
};

export default FavoriteButton;

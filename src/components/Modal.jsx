import { Link } from "react-router-dom";
const Modal = ({ toggleModal, handleSubmit, isLoading }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0A182C] font-montserrat rounded-lg p-8 max-w-lg mx-auto relative">
        <span
          onClick={toggleModal}
          className="font-bold flex items-center justify-center h-7 w-7 text-lg absolute right-5 top-3 text-white hover:bg-slate-400 rounded-full cursor-pointer active:scale-95"
        >
          X
        </span>
        <h2 className="text-2xl font-bold mb-4 text-white">Important Disclaimer</h2>
        <p className="mb-4 text-white">
          Please ensure you have read the{" "}
          <Link className="underline underline-offset-4" to="/disclaimer">
            disclaimer
          </Link>{" "}
          carefully before proceeding.
        </p>
        <button
          onClick={handleSubmit}
          className="p-3 bg-red-500 text-white font-bold rounded"
        >
          I have read the disclaimer, proceed to download
        </button>
      </div>
    </div>
  );
};

export default Modal;

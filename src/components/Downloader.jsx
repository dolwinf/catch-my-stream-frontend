import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { VideoUrlContext } from "../Context/VideoUrlContext";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";

function Downloader() {
  const { url, setUrl } = useContext(VideoUrlContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (url) => {
    setIsLoading(true);
    const checkUrl = isValidUrl(url);
    if (checkUrl === false) {
      toast.error("Please enter a valid url");
      toggleModal();
      setIsLoading(false);
    } else {
      const apiUrl = window.location.href.includes("localhost")
        ? "http://localhost:8000/download/youtube/"
        : "https://catch-my-stream-e16908e1c32a.herokuapp.com/download/youtube";
      axios
        .post(apiUrl, { url }, { responseType: "blob" })
        .then((response) => {
          let filename = "downloaded_video.mp4";
          const contentDisposition =
            response.headers["Content-Disposition"] ||
            response.headers["content-disposition"];

          if (contentDisposition) {
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            console.log("fileNameMatch:", fileNameMatch);
            if (fileNameMatch && fileNameMatch.length === 2) {
              filename = fileNameMatch[1];
            }
          }
          const url = window.URL.createObjectURL(
            new Blob([response.data], { type: "video/mp4" })
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", filename);
          document.body.appendChild(link);
          link.click();
          link.remove();
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(
            "Error downloading YouTube video:",
            error.response ? error.response.data : error.message
          );
          toast.error("Error downloading video");
          setIsLoading(false);
        });

      toggleModal();
    }
  };
  const handleTextChange = (e) => {
    setUrl(e.target.value);
  };

  const handleClearInput = () => {
    setUrl("");
  };
  return (
    <>
      <div className="flex justify-center pr-52 pt-52">
        <h6 className="text-white font-montserrat text-2xl font-semibold">
          <span>Download</span> <span className="text-red-400">Youtube</span>,{" "}
          <span className="text-pink-700">Insta</span> and{" "}
          <span className="text-blue-900">FB</span> videos
        </h6>
      </div>
      <div className="flex pt-40 bg-[#0A182C] font-montserrat text-purple-100 justify-center items-center">
        <input
          value={url}
          onChange={handleTextChange}
          type="text"
          placeholder="Paste Video URL here"
          className="input-reset text-black bg-white w-1/2 h-12 rounded-full p-5 focus:ring-2 focus:ring-purple-100 border-solid border-purple-100"
        ></input>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <button
            disabled={isLoading}
            onClick={toggleModal}
            className="hover:bg-green-300 active:scale-95 ml-5 p-3 w-30 text-black font-bold rounded-full bg-custom-green-text-50"
          >
            Download
          </button>
        )}
        <button
          onClick={handleClearInput}
          className="hover:bg-green-300 active:scale-95 ml-5 p-3 w-30 text-black font-bold rounded-full bg-custom-green-text-50"
        >
          Clear Link
        </button>
      </div>
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          handleSubmit={() => handleSubmit(url)}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default Downloader;

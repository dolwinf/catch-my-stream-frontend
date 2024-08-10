import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VideoUrlProvider } from "./Context/VideoUrlContext";
function App() {
  return (
    <VideoUrlProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:true
      />
      <div className="flex flex-col h-screen overflow-hidden">
        <Nav />
        <Outlet />
      </div>
    </VideoUrlProvider>
  );
}

export default App;

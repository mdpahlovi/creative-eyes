import axios from "axios";
import React from "react";
import App from "./app";
import ReactDOM from "react-dom/client";
import UserContext from "./Contexts/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-photo-view/dist/react-photo-view.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "swiper/css";

const queryClient = new QueryClient();
axios.defaults.baseURL = process.env.REACT_APP_server;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <UserContext>
            <App />
        </UserContext>
    </QueryClientProvider>,
);

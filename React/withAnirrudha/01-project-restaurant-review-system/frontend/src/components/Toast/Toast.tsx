import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
	return <ToastContainer theme="colored" autoClose={3000} closeOnClick={true} hideProgressBar={true} />;
};

export default Toast;

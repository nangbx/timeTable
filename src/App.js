import "./App.css";
import Stack from "@mui/material/Stack";
import ExportCSV from "./Components/Export/ExportCSV";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Submit from "./Components/Input/Submit";
import Calendar from "./Components/Calendar/Calendar";
import List from "./Components/Calendar/List/List";

import { useDispatch, useSelector } from "react-redux";
function App() {
	
	return (
		<div className='App'>
			<Header />
			<Stack
				direction='column'
				justifyContent='center'
				alignItems='left'
				spacing={1}
				mt={4}
				ml={20}
				mb={6}
			>
				<ExportCSV />
				<Input />
				
			</Stack>
			<Stack direction='row' spacing={2}>
				<List />
				<Calendar />
				
			</Stack>
			
			<ToastContainer />
		</div>
	);
}

export default App;

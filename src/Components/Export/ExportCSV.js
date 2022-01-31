import { useState } from "react";
import Button from "@mui/material/Button";
import "./ExportCSV.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Stack from "@mui/material/Stack";
import XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import {fetchData, setData} from "../../Redux/Actions/index"

export default function ExportCSV() {
	
	const dispatch = useDispatch();
	const handleInput = (e) => {
		var files = e.target.files, f = files[0];
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (evt) => {
			const bstr = evt.target.result;
			const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_row_object_array(ws, { range: 2 });
			/* Update state */
			
			dispatch(fetchData(data));
			
		};
		if (rABS) reader.readAsBinaryString(f);
    	else reader.readAsArrayBuffer(f);
	};
	return (
		<div className='content'>
			<Stack direction='row' alignItems='center' spacing={10} mb={2}>
				<h3>Chọn file thời khóa biểu:</h3>
				<Button
					variant='contained'
					component='label'
					startIcon={<UploadFileIcon />}
				>
					Upload File
					<input
						type='file'
						onChange={handleInput}
						accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
						hidden
					/>
				</Button>
			</Stack>
		</div>
	);
}

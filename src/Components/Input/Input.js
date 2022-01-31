import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { addSubject } from "../../Redux/Actions";

const filter = createFilterOptions();

export default function Input() {
	const dispatch = useDispatch();
	const { courses } = useSelector((state) => state.tkb);
	const [value, setValue] = React.useState(null);
	const [inputValue, setInputValue] = React.useState("");
	return (
		<React.Fragment>
			<Stack spacing={10} direction='row' mb={2}>
				<h3>Nhập mã/tên môn học:</h3>
				<Autocomplete
					id='free-solo-demo'
					freeSolo
					value={value}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => {
						setInputValue(newInputValue);
					}}
					onChange={(event, newValue) => {
						if (newValue) {
							dispatch(addSubject(newValue));
							setInputValue('')
						}
					}}
					options={courses.map((option) => option)}
					renderInput={(params) => (
						<TextField {...params} label='Mã/Tên môn học' />
					)}
					sx={{ width: 500 }}
				/>
			</Stack>
		</React.Fragment>
	);
}

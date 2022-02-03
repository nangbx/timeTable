import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { addView, deleteSubject } from "../../../Redux/Actions";
import { addClass, removeView } from "../../../Redux/Actions";
import ArticleIcon from "@mui/icons-material/Article";
import { NotiSucess } from "../../../Noti/Noti";


export default function List() {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const { registration, subjects } = useSelector((state) => state.tkb);
	const [disable, setDisable] = useState(false);
	const handleDelete = (item) => {
		dispatch(deleteSubject(item));
		NotiSucess('Đã xóa học phần')
	};
	const handleShowTime = (sub) => {
		dispatch(addClass(sub));
	};
	const handleHidden = () => {
		setDisable(t => !t)
	}
	const handleShowClass = (item) => {
		if(!open){
			dispatch(addView(item))
		} else{
			dispatch(removeView())
		}
	}
	return (
		<div>
			<IconButton aria-label='delete' onClick={handleHidden}>
				<ArticleIcon />
			</IconButton>{" "}
			{registration.map((item) => (
				<Accordion key={item.Mã_HP} sx={{ width: 300 }} hidden={disable} onChange={() => setOpen(prev => !prev)} >
					<AccordionSummary
						expandIcon={<ExpandMoreIcon onClick={() => handleShowClass(item)} />}
						aria-controls='panel1a-content'
						id='panel1a-header'
						
					>
						<Stack
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							spacing={2}
						>
							<Typography onClick={() => handleShowClass(item)} >{item}</Typography>
							<IconButton
								color='primary'
								aria-label='upload picture'
								component='span'
								onClick={() => handleDelete(item)}
							>
								<DeleteIcon />
							</IconButton>
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						{subjects[item.substring(0, item.indexOf(":"))].map((sub) => (
							<Typography key={sub.Mã_lớp} onClick={() => handleShowTime(sub)}>
								{`${sub.Mã_lớp}(${sub.Loại_lớp}): Thứ ${sub.Thứ} ${sub.Thời_gian}`}
							</Typography>
						))}
					</AccordionDetails>
				</Accordion>
			))}
			
		</div>
	);
}

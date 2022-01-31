import React from "react";
import Button from "@mui/material/Button";
import { NotiSucess } from "../../Noti/Noti";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from '@mui/icons-material/Article';
export default function Submit() {
	const handleSearch = () => {
		NotiSucess("Đang tìm lớp");
	};
	return (
		<IconButton aria-label='delete'>
			<ArticleIcon />
		</IconButton>
	);
}

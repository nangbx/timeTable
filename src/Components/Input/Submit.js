import React from "react";
import Button from "@mui/material/Button";
import { NotiSucess } from "../../Noti/Noti";
export default function Submit() {


    const handleSearch = () => {
        NotiSucess('Đang tìm lớp')
    }
	return (
		<div>
			<Button variant='contained' onClick={handleSearch}>Tìm lớp</Button>
		</div>
	);
}

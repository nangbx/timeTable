import React, { useEffect, useState } from "react";
import "./Event.scss";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Event({ info }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [styleEvent, setStyleEvent] = useState({});
	useEffect(() => {
		if (info) {
			var time = info.Thời_gian;
			var hourStart = parseInt(time.substring(0, 2));
			var minStart = parseInt(time.substring(2, 4));
			var hourEnd = parseInt(time.substring(5, 7));
			var minEnd = parseInt(time.substring(7, 9));
			var width = hourEnd * 60 + minEnd - hourStart * 60 - minStart;
			var week = parseInt(info.Thứ);
			width = (width / 60) * 48;
			minStart = (minStart / 60) * 48;

			// setXy({
			// 	width: width.toString(),
			// 	start: (3 + hourStart - 6).toString(),
			// 	col: (week + 1).toString(),
			// 	top: minStart.toString()
			// })
			setStyleEvent({
				gridColumn: (week + 1).toString(),
				gridRowStart: (2 + hourStart - 6).toString(),
				height: width.toString() + "px",
				backgroundColor: "#52ab98",
				position: "relative",
				top: minStart.toString() + "px",
			});
		}
	}, []);
	console.log(styleEvent);
	return (
		<React.Fragment>
			<div
				onClick={handleClick}
				className='event event1 calendar1'
				style={styleEvent}
			>{`${info.Tên_HP} (${info.Tuần})`}</div>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						width: 400,
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem>
					<ListItemIcon>
						<DeleteIcon/>
					</ListItemIcon>
				</MenuItem>
				<MenuItem>
					<Typography>Mã lớp: {info.Mã_lớp}</Typography>
				</MenuItem>
				<MenuItem>
					<Typography>{info.Tên_HP}</Typography>
				</MenuItem>
				<Divider />
				<MenuItem>
					<Typography>Tuần: {info.Tuần}</Typography>
				</MenuItem>
				<MenuItem>
					<Typography>Loại lớp: {info.Loại_lớp}</Typography>
				</MenuItem>
				
				<MenuItem>
					<Typography>Phòng: {info.Phòng}</Typography>
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}

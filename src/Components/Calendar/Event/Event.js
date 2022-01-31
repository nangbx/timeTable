import React, {useEffect, useState} from "react";
import './Event.scss'



export default function Event({info}) {
	const [styleEvent, setStyleEvent] = useState({})
	useEffect(() => {
		if(info){
			var time = info.Thời_gian
			var hourStart = parseInt(time.substring(0, 2));
			var minStart = parseInt(time.substring(2, 4));
			var hourEnd = parseInt(time.substring(5, 7));
			var minEnd = parseInt(time.substring(7, 9));
			var width = hourEnd * 60 + minEnd - hourStart * 60 - minStart;
			var week = parseInt(info.Thứ)
			width = (width / 60) * 48;
			minStart =  (minStart / 60) * 48;
			
			// setXy({
			// 	width: width.toString(),
			// 	start: (3 + hourStart - 6).toString(),
			// 	col: (week + 1).toString(),
			// 	top: minStart.toString()
			// })
			setStyleEvent({
				gridColumn: (week + 1).toString(),
				gridRowStart: (2 + hourStart - 6).toString(),
				height: width.toString() + 'px',
				backgroundColor: "#52ab98",
				position: "relative",
				top: minStart.toString() + 'px'
			})
		}
	}, [])
	console.log(styleEvent)
	return <div className='event event1 calendar1' style={styleEvent}>{`${info.Tên_HP} (${info.Tuần})`}</div>;
}

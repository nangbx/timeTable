import React from "react";
import "./Calendar.scss";
import Event from "./Event/Event";
import { useDispatch,useSelector } from "react-redux";
import ViewClass from "./ViewClass/ViewClass";
export default function Calendar() {

	const { Class, view } = useSelector(state => state.tkb)
	return (
		<div className='container'>
			<div className='title'>Thời khóa biểu</div>
			<div className='days'>
				<div className='filler' />
				<div className='filler' />
				<div className='day'>Thứ 2</div>
				<div className='day'>Thứ 3</div>
				<div className='day'>Thứ 4</div>
				<div className='day'>Thứ 5</div>
				<div className='day'>Thứ 6</div>
				<div className='day'>Thứ 7</div>
			</div>
			<div className='content'>
				<div className='time' style={{ gridRow: 1 }}>
					06:00
				</div>
				<div className='time' style={{ gridRow: 2 }}>
					07:00
				</div>
				<div className='time' style={{ gridRow: 3 }}>
					08:00
				</div>
				<div className='time' style={{ gridRow: 4 }}>
					09:00
				</div>
				<div className='time' style={{ gridRow: 5 }}>
					10:00
				</div>
				<div className='time' style={{ gridRow: 6 }}>
					11:00
				</div>
				<div className='time' style={{ gridRow: 7 }}>
					12:00
				</div>
				<div className='time' style={{ gridRow: 8 }}>
					13:00
				</div>
				<div className='time' style={{ gridRow: 9 }}>
					14:00
				</div>
				<div className='time' style={{ gridRow: 10 }}>
					15:00
				</div>
				<div className='time' style={{ gridRow: 11 }}>
					16:00
				</div>
				<div className='time' style={{ gridRow: 12 }}>
					17:00
				</div>
				<div className='time' style={{ gridRow: 13 }}>
					18:00
				</div>
				<div className='time' style={{ gridRow: 14 }}>
					19:00
				</div>
				<div className='filler-col' />
				<div className='col' style={{ gridColumn: 3 }} />
				<div className='col' style={{ gridColumn: 4 }} />
				<div className='col' style={{ gridColumn: 5 }} />
				<div className='col' style={{ gridColumn: 6 }} />
				<div className='col' style={{ gridColumn: 7 }} />
				<div className='row' style={{ gridRow: 1 }} />
				<div className='row' style={{ gridRow: 2 }} />
				<div className='row' style={{ gridRow: 3 }} />
				<div className='row' style={{ gridRow: 4 }} />
				<div className='row' style={{ gridRow: 5 }} />
				<div className='row' style={{ gridRow: 6 }} />
				<div className='row' style={{ gridRow: 7 }} />
				<div className='row' style={{ gridRow: 8 }} />
				<div className='row' style={{ gridRow: 9 }} />
				<div className='row' style={{ gridRow: 10 }} />
				<div className='row' style={{ gridRow: 11 }} />
				<div className='row' style={{ gridRow: 12 }} />
				<div className='row' style={{ gridRow: 13 }} />
				<div className='row' style={{ gridRow: 14 }} />
                {
					Class.map(item => (
						<Event key={item.Mã_lớp} info = {item}/>
					))
				}
				{
					view.map(item => (
						<ViewClass key={item.Mã_lớp} info={item}/>
					))
				}
			</div>
		</div>
	);
}

import * as types from "../Constants/const";

export const setData = (data) => ({
	type: types.SET_DATA,
	data: data,
});
export const addSubject = (data) => ({
	type: types.ADD_SUBJECT,
	data: data
}) 
export const deleteSubject = (item) => ({
	type: types.DELETE_SUBJECT,
	data: item
})
export const addClass = (data) => ({
	type: types.ADD_CLASS,
	data: data
})
export const fetchData = (data) => (dispatch) => {
	const courses = [];
	const subjects = new Object();
	data.map((item) => {
		if(subjects[`${item.Mã_HP}`]){
			subjects[`${item.Mã_HP}`].push(item);
		} else{
			subjects[`${item.Mã_HP}`] = [item];
		}
		courses.push(`${item.Mã_HP}: ${item.Tên_HP}`);

	});
	console.log(data)
	dispatch(setData({
		courses: [...new Set(courses)],
		subjects: subjects
	}));
};

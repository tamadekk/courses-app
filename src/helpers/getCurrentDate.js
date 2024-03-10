const getCurrentDate = () => {
	let newDate = new Date();
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	return `${day < 10 ? `0${day}` : `${day}`}.${
		month < 10 ? `0${month}` : `${month}`
	}.${year}`;
};

export default getCurrentDate;

// dat = date
const formatDate = (dat) => {
	const parts = dat.split('/');
	return parts.length === 3 ? `${parts[0]}.${parts[1]}.${parts[2]}` : dat;
};

export default formatDate;

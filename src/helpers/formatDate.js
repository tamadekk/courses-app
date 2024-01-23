const formatDate = (date) => {
	const parts = date.split('/');
	return parts.length === 3 ? `${parts[0]}.${parts[1]}.${parts[2]}` : date;
};

export default formatDate;

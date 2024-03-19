const formatDuration = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;
	const formattedHours = hours < 10 ? '0' + hours : hours;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	return `${formattedHours}:${formattedMinutes} hours`;
};
export default formatDuration;

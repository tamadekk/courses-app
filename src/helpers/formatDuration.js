// dur = duration
const formatDuration = (dur) => {
	const hours = Math.floor(dur / 60);
	const minutes = dur % 60;
	const formattedHours = hours < 10 ? '0' + hours : hours;
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
	return `${formattedHours}:${formattedMinutes} hours`;
};
export default formatDuration;

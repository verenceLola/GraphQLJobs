const filterJobs = (jobs, location) => {
	const locationNameMatches = job => job.locationNames?.toLowerCase() === location;
	const cityNameMatches = city => city.name.toLowerCase() === location;
	const countryNameMatches = country => country.name.toLowerCase() === location;

	return jobs.filter(job => locationNameMatches(job) || job.cities.some(city => cityNameMatches(city) || countryNameMatches(city.country)));
};


export default filterJobs;

import propTypes from 'prop-types';
import { useState } from 'react';

import filterJobs from '../lib/filterJobs';
import fetchJobs from './api/job';

import Job from '../components/Job';
import SearchJob from '../components/SearchJob';

const Home = ({jobsData}) => {
	const [jobs, setJobs] = useState(jobsData);

	const handleOnSearch = location => {
		const filteredJobs = location ? filterJobs(jobsData, location) : jobsData;
		
		setJobs(filteredJobs);
	};

	return (
		<>
			<SearchJob handleOnSearch={handleOnSearch} />
			<div className='container-fluid'>
				{
					jobs.map( job => (
						<Job details={job} key={job.id} />
					))
				}
			</div>
		</>
		
	);
};

const getServerSideProps = async ()  => {
	const {data, errors} = await fetchJobs();

	if (!data || errors){
		return {
			notFound: true
		};
	}

	return {
		props: {
			jobsData: data.jobs
		}
	};
};

Home.propTypes = {
	jobsData: propTypes.arrayOf(propTypes.shape())
};

Home.defaultProps = {
	jobs: []
};


export {getServerSideProps};
export default Home;

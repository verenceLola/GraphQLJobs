import propTypes from 'prop-types';
import { useState } from 'react';

import Job from '../components/Job';
import SearchJob from '../components/SearchJob';
import fetchJobs from './api/job';

const Home = ({jobs}) => {
	const [filteredJobs, setFilteredJobs] = useState(jobs);

	const handleOnSearch = location => {
		console.log({location});
		console.log({jobs})
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
			jobs: data.jobs
		}
	};
};

Home.propTypes = {
	jobs: propTypes.arrayOf(propTypes.shape())
};

Home.defaultProps = {
	jobs: []
};


export {getServerSideProps};
export default Home;

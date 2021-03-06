import propTypes from 'prop-types';
import { useState } from 'react';

import { filterJobs } from '../lib/jobs';
import fetchJobs from './api/job';

import Job from '../components/Job';
import Head from 'next/head';
import SearchJob from '../components/SearchJob';

const Home = ({jobsData}) => {
	const [jobs, setJobs] = useState(jobsData);

	const handleOnSearch = location => {
		const filteredJobs = location ? filterJobs(jobsData, location) : jobsData;
		
		setJobs(filteredJobs);
	};

	return (
		<>
			<Head>
				<title>Available Jobs</title>
				<link rel='icon' href="/favicon.ico" />
			</Head>
			<div className='d-flex flex-column p-2 vh-100'>
				<SearchJob handleOnSearch={handleOnSearch} />
				<div className='container overflow-auto h-100'>
					{
						jobs.map( job => (
							<Job details={job} key={job.id} />
						))
					}
				</div>
			</div>
		</>
	);
};

const getServerSideProps = async ()  => {
	const {data} = await fetchJobs();

	if (!data){
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

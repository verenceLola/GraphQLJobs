import propTypes from 'prop-types';

import SearchJob from '../components/SearchJob';

const Home = ({availableJobs}) => {
	console.log({availableJobs});
	
	return (
		<>
			<SearchJob />
			<div className='container-fluid'>
			This is the Home Page
			</div>
		</>
		
	);
};

Home.propTypes = {
	availableJobs: propTypes.arrayOf(propTypes.shape())
};

Home.defaultProps = {
	availableJobs: []
};


export default Home;

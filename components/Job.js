import propTypes from 'prop-types';

const Job = ({details}) => {
	return (
		<div className='card'>
			<p>{details.title}</p>
		</div>
	);
};

Job.propTypes = {
	details: propTypes.shape().isRequired,
};


export default Job;

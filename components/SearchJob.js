import propTypes from 'prop-types';
import { useState } from 'react';

const SearchJob = ({handleOnSearch}) => {
	const [location, setLocation] = useState('');

	const handleOnChange = ({target: {value}}) => setLocation(value);

	const handleOnKeyDown = ({keyCode}) => {
		if (keyCode == 13){
			handleOnSearch(location);
		}
	};

	return (
		<div className='container mb-2'>
			<div className='text-center m-3'>
				<p className='h5'>Enter a location to search for the available Jobs</p>
			</div>
			<div className='input-group input-group-sm mb-3'>
				<input type='text' className='form-control shadow-none' onKeyDown={handleOnKeyDown} onChange={handleOnChange} placeholder='Enter job location' aria-label='Enter Job Location' aria-describedby='basic-addon-1' />
				<span className='input-group-text' onClick={() => handleOnSearch(location)} role='button' id='basic-addon-1'>Search</span>
			</div>
		</div>
	);
};

SearchJob.propTypes = {
	handleOnSearch: propTypes.func.isRequired,
};

export default SearchJob;

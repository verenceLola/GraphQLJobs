import { useState } from 'react';

const SearchJob = () => {
	const [location, setLocation] = useState('');

	const handleOnChange = ({target: {value}}) => setLocation(value);
	

	const handleOnSearch = () => {
		console.log('Searching jobs', location);
	};

	return (
		<div className='container-fluid'>
			<div className='text-center m-3'>
				<p className='h5'>Enter a location to search for the available Jobs</p>
			</div>
			<div className='input-group input-group-sm mb-3'>
				<input type='text' className='form-control shadow-none' onChange={handleOnChange} placeholder='Enter job location' aria-label='Enter Job Location' aria-describedby='basic-addon-1' />
				<span className='input-group-text' onClick={handleOnSearch} role='button' id='basic-addon-1'>Search</span>
			</div>
		</div>
	);
};

export default SearchJob;

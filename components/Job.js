import propTypes from 'prop-types';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import countryLookup from 'country-code-lookup';

const Job = ({details}) => {
	const getCompanyLogoSrc = logoUrl => {
		if (logoUrl === '' || logoUrl === null){
			return 'https://img.collegepravesh.com/2015/09/Default_Logo.png';
		}

		return logoUrl;
	};

	const getCountryCode = countryName => {
		const countryDetails = countryLookup.byCountry(countryName);

		return countryDetails?.iso2;
	};

	return (
		<div className='card mb-2'>
			<div className='card-body'>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<div className='d-flex'>
								<Image src={getCompanyLogoSrc(details.company.logoUrl)} className='rounded-circle img-fluid'  width={'50%'} height={'50%'} alt='logo' />
								<div className='d-flex flex-column mx-2'>
									<small className='h6 d-block text-truncate'>{details.title}</small>
									<small className='text-muted'>{details.company.name}</small>
								</div>
							</div>
						</div>
						<div className='col-2 d-flex justify-content-end'>
							<div className='d-flex justify-content-end align-items-center'>
								{
									details.tags.slice(0, 3).map(tag => <span className='badge rounded-pill bg-light text-dark' key={tag.id}>{tag.name}</span>)
								}
							</div>
						</div>
						<div className='col d-flex'>
							<div className='d-flex  align-items-center'>
								<div className='d-flex align-items-center justify-content-center'>
									{details.cities[0] && <ReactCountryFlag countryCode={getCountryCode(details.cities[0]?.country.name)} svg />}
									<small className='text-muted mx-2'>{details.cities.map(({name}) => name).join(', ')}</small>
								</div>
							</div>
						</div>
						<div className='col d-flex align-items-center justify-content-center'>
							<a href={details.applyUrl} target='blank' className='btn-sm btn-outline-primary shadow-none' role='button'>Apply</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Job.propTypes = {
	details: propTypes.shape({
		applyUrl: propTypes.string.isRequired,
		company: propTypes.shape({
			logoUrl: propTypes.string,
			name: propTypes.string.isRequired,
		}).isRequired,
		title: propTypes.string.isRequired,
		tags: propTypes.arrayOf(propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
		})).isRequired,
		cities: propTypes.arrayOf(propTypes.shape({
			name: propTypes.string.isRequired,
			country: propTypes.shape({
				name: propTypes.string.isRequired
			})
		})),
	}).isRequired,
};


export default Job;

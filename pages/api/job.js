import gql from 'graphql-tag';
import apolloClient from '../../lib/apolloClient';

const fetchJobs = async () => {
	const query = gql`
      query jobs{
        jobs{
          id , title , slug , commitment {
            title
          } , cities {
            name
            country {
              name
            }
          } , remotes {
            name
            type
          } , company{
            name
          } , locationNames , tags{
            name
          } , applyUrl , postedAt
        }
      }`;
	const {data, errors} = await apolloClient.query({
		query: query
	});

	return {data, errors};
};

export default fetchJobs;

import propTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

const App = ({ Component, pageProps })  =>  <Component {...pageProps} />;

App.propTypes = {
	Component: propTypes.object.isRequired,
	pageProps: propTypes.shape().isRequired,
};

export default App;

import React, {useState} from 'react';
import AppPage from './AppPage.js';

const App = () => {
	
	const [quote, setQuote] = useState({});
	const [charging, setCharging] = useState(false);
	return (
		<AppPage quote={quote} setQuote={setQuote} charging={charging} setCharging={setCharging} />
	);
}

export default App;

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';
import FooterSection from './components/FooterSection';
import Homes from './pages/Homes';
import Programs from './pages/Programs';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Router>
				<GlobalStyle />
				<NavBar toggle={toggle} />
				<Dropdown isOpen={isOpen} toggle={toggle} />
				<Switch>
					<Route to='/' component={Homes} exact />
					<Route to='/programs' component={Programs} />
					<Route to='/about' component={About} />
				</Switch>
				<FooterSection />
			</Router>
		</>
	);
}

export default App;
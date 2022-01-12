import logo from './logo.svg';
import particlesjs_config from './particlesjs-config.json';
import Particles from 'react-tsparticles';
import { Header } from './components/ContainerComponents';

function App() {
	const background = {
		backgroundImage: `url(./images/bg.jpg)`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		height: '100vh',
		width: '100%',
		zIndex: '-5'
		// paddingTop: '100px'
	};

	return (
		<div className="" style={background}>
			<Header />
			{/* <Particles params={particlesjs_config} className="z-neg-5 pos-fix" /> */}
		</div>
	);
}

export default App;

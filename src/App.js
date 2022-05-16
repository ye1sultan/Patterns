import './fonts/font.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Main from './pages/Main';
import Chat from './pages/Chat';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Navigate to="/main" />} />
				<Route path='/main' element={<Main />} />
				<Route path='/chat' element={<Chat />} />
			</Routes>
		</div>
	);
}

export default App;
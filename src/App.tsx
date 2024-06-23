import './App.css'
import { useToggle } from './custom-hook/useToggle'

function App() {
	const [value, toggle] = useToggle(['light', 'dark', 'cyan', 'teal'])
	return <button onClick={() => toggle()}>{value}</button>
}

export default App

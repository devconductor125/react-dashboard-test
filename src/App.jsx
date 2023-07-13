import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Navbar";
import Dashboard from './components/Dashboard'

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="flex-col align-center">
				<Sidebar />
			</div>
			<div className="text-center w-full max-w-[calc(100vw-21rem)] float-right px-6 py-5">
        <Dashboard/>
      </div>
		</div>
	);
}

export default App;

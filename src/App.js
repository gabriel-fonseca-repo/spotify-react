import "./global/theme.css";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Playlist } from "./pages/Playlist";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/login" element={<Login />} />
				<Route path="/playlist/:id" element={<Playlist />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { Header } from "./components/Header/header";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Header />
		</ThemeProvider>
	);
}

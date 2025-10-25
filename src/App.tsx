import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Wrapper } from "./components/Wrapper/wrapper";
import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Wrapper />
		</ThemeProvider>
	);
}

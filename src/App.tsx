import { ThemeProvider } from "./components/Theme/ThemeContext";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	return (
		<ThemeProvider>
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;

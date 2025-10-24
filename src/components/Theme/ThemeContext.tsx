import { createContext, type ReactNode, useState } from "react";

interface Props {
	theme: string;
	toggleTheme: () => void;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<Props | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState("Light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

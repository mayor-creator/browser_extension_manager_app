import {
	css,
	ThemeProvider as EmotionThemeProvider,
	Global,
} from "@emotion/react";
import { createContext, type ReactNode, useState } from "react";

interface Theme {
	background: string;
	text: string;
}

const lightTheme: Theme = {
	background: "var(--light-gradient)",
	text: "var(--color-neutral900)",
};

const darkTheme: Theme = {
	background: "var(--dark-gradient)",
	text: "var(--color-neutral0)",
};

interface Props {
	theme: "Light" | "Dark";
	toggleTheme: () => void;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<Props | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<"Light" | "Dark">("Light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
	};

	const currentTheme = theme === "Light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<Global
				styles={css`
				body {
					background: ${currentTheme.background};
					color: ${currentTheme.text};
				}
			`}
			/>

			<EmotionThemeProvider theme={currentTheme}>
				{children}
			</EmotionThemeProvider>
		</ThemeContext.Provider>
	);
};

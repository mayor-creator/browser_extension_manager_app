import styled from "@emotion/styled";
import { useTheme } from "../Theme/useThemeContext";

interface ButtonProps {
	label: string;
	active?: boolean;
	onClick?: () => void;
}

interface Props {
	bgColor: string;
	textColor: string;
	theme: string;
	active?: boolean;
}

const Button = styled.button<Props>`
  background: ${(props) => props.bgColor};
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  color: ${(props) => props.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--textPresetThree-fontSize);
  font-weight: var(--textPresetThree-fontWeight);
  line-height: var(--textPresetThree-lineHeight);
  letter-spacing: var(--textPresetThree-letterSpacing);
  text-align: center;
  padding-left: var(--spacing-250);
  padding-right: var(--spacing-250);
  padding-top: var(--spacing-100);
  padding-bottom: var(--spacing-125);

	&:hover {
		${({ active, theme }) => {
			if (active && theme === "Dark") {
				return `
				  background: var(--color-red500);
					color: var(--color-neutral900);
				`;
			} else if (active && theme !== "Dark") {
				return `
					background: var(--color-red500);
					color: var(--color-neutral0);
				`;
			} else if (!active && theme === "Dark") {
				return `
					background: var(--color-neutral600);
					color: var(--color-neutral0);
				`;
			} else {
				return `
					background: var(--color-neutral0);
					color: var(--color-neutral900);
				`;
			}
		}}
	}
`;

export const ExtensionsButton = ({ label, active, onClick }: ButtonProps) => {
	const { theme } = useTheme();

	const isDark = theme === "Dark";
	const bgColor = active
		? isDark
			? "var(--color-red400)"
			: "var(--color-red700)"
		: isDark
			? "var(--color-neutral700)"
			: "var(--color-neutral200)";

	const textColor = active
		? isDark
			? "var(--color-neutral900)"
			: "var(--color-neutral0)"
		: isDark
			? "var(--color-neutral0)"
			: "var(--color-neutral900)";

	return (
		<Button
			type="button"
			aria-pressed={active}
			bgColor={bgColor}
			textColor={textColor}
			onClick={onClick}
			active={active}
			theme={theme}
		>
			{label}
		</Button>
	);
};

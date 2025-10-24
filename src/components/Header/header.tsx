import styled from "@emotion/styled";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import logo from "../../assets/images/logo.svg";
import { convertPxToRem } from "../../util/convertPxToRem";
import { useTheme } from "../Theme/useThemeContext";

interface Props {
	bgColor: string;
}

const HeaderContainer = styled.div<Props>`
  background: ${(props) => props.bgColor};
  border-radius: var(--radius-10);
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-100) var(--spacing-150);
`;

const Button = styled.button<Props>`
  background: ${(props) => props.bgColor};
  border: none;
  border-radius: var(--radius-12);
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${convertPxToRem(50)};
  width: ${convertPxToRem(50)};
`;

export const Header = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<HeaderContainer
			bgColor={theme === "Dark" ? "var(--color-neutral800)" : "#FBFDFE"}
		>
			<div>
				<img src={logo} alt="" />
			</div>
			<div>
				<Button
					type="button"
					onClick={toggleTheme}
					bgColor={
						theme === "Dark"
							? "var(--color-neutral700)"
							: "var(--color-neutral100)"
					}
				>
					<img
						src={theme === "Dark" ? sun : moon}
						alt=""
						width={32}
						height={32}
					/>
				</Button>
			</div>
		</HeaderContainer>
	);
};

import styled from "@emotion/styled";
import { useTheme } from "../Theme/useThemeContext";
import { Toggle } from "./toggle";

type Props = {
	background: string;
	border: string;
};

interface ButtonProps {
	bgColor: string;
	textColor: string;
	border: string;
}

interface ExtensionCardDataProps {
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
	onRemoveExtension: () => void;
}

const ExtensionCardContainer = styled.div<Props>`
	background: ${(props) => props.background};
	border-radius: var(--radius-20);
	border: ${(props) => props.border};
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-250);
`;

const ExtensionInfoContainer = styled.div`
  display: flex;
  gap: var(--spacing-200);
`;

const ExtensionDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-100);
`;

const ExtensionName = styled.p`
	font-size: var(--textPresetTwo-fontSize);
  font-weight: var(--textPresetTwo-fontWeight);
  line-height: var(--textPresetTwo-lineHeight);
  letter-spacing: var(--textPresetTwo-letterSpacing);
`;

const ExtensionDescription = styled.p`
	font-size: var(--textPresetFive-fontSize);
  font-weight: var(--textPresetFive-fontWeight);
  line-height: var(--textPresetFive-lineHeight);
  letter-spacing: var(--textPresetFive-letterSpacing);
`;

const ExtensionAction = styled.div`
	display: flex;
	align-items: center; 
	justify-content: space-between;
`;

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.bgColor};
  border-radius: var(--radius-full);
  border: ${(props) => props.border};
  cursor: pointer;
  color: ${(props) => props.textColor};
  font-size: var(--textPresetSix-fontSize);
  font-weight: var(--textPresetSix-fontWeight);
  line-height: var(--textPresetSix-lineHeight);
  letter-spacing: var(--textPresetSix-letterSpacing);
  text-align: center;
  padding-left: var(--spacing-200);
  padding-right: var(--spacing-200);
  padding-top: var(--spacing-100);
  padding-bottom: var(--spacing-100);
`;

export const ExtensionCard = ({
	logo,
	name,
	description,
	isActive,
	onRemoveExtension,
}: ExtensionCardDataProps) => {
	const { theme } = useTheme();

	const isDark = theme === "Dark";

	const textColor = isDark
		? "var(--color-neutral0)"
		: "var(--color-neutral900)";

	const background = isDark
		? "var(--color-neutral800)"
		: "var(--color-neutral0)";

	const border = isDark
		? "1px solid var(--color-neutral600)"
		: "1px solid var(--color-neutral200)";

	return (
		<ExtensionCardContainer background={background} border={border}>
			<ExtensionInfoContainer>
				<div>
					<img src={logo} alt="" height={60} width={60} />
				</div>
				<ExtensionDetailsContainer>
					<ExtensionName>{name}</ExtensionName>
					<ExtensionDescription>{description}</ExtensionDescription>
				</ExtensionDetailsContainer>
			</ExtensionInfoContainer>
			<ExtensionAction>
				<Button
					type="button"
					bgColor={background}
					textColor={textColor}
					border={border}
					onClick={onRemoveExtension}
				>
					Remove
				</Button>
				<Toggle isActive={isActive}></Toggle>
			</ExtensionAction>
		</ExtensionCardContainer>
	);
};

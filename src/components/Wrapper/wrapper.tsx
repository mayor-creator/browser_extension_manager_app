import styled from "@emotion/styled";
import { medialQuery } from "../../styles/Breakpoints";
import { Header } from "../Header/header";
import { Main } from "../Main/main";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
  padding: var(--spacing-300) var(--spacing-200) var(--spacing-800);

	${medialQuery.tablet} {
		padding-left: var(--spacing-400);
		padding-right: var(--spacing-400);
	}

	${medialQuery.desktop} {
	 padding-left: var(--spacing-2000);
	 padding-right: var(--spacing-2000);
	 padding-top: var(--spacing-500);
	}
`;

export const Wrapper = () => {
	return (
		<MainWrapper>
			<Header></Header>
			<Main></Main>
		</MainWrapper>
	);
};

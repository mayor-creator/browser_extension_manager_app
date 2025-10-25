import styled from "@emotion/styled";
import { Header } from "../Header/header";
import { Main } from "../Main/main";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
  padding: var(--spacing-300) var(--spacing-200) var(--spacing-800);
`;

export const Wrapper = () => {
	return (
		<MainWrapper>
			<Header></Header>
			<Main></Main>
		</MainWrapper>
	);
};

import styled from "@emotion/styled";
import { useState } from "react";
import { ExtensionsButton } from "../UI/extensionButton";

const ExtensionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
`;

const Title = styled.h1`
  text-align: center;
  font-size: var(--textPresetOne-fontSize);
  font-weight: var(--textPresetOne-fontWeight);
  line-height: var(--textPresetOne-lineHeight);
  letter-spacing: var(--textPresetOne-letterSpacing);
`;

const FilterContainer = styled.div`
  display: flex;
  gap: var(--spacing-125);
  justify-content: center;
`;

export const Main = () => {
	const [isActiveFilter, setIsActiveFilter] = useState("All");

	return (
		<main>
			<ExtensionsContainer>
				<Title>Extensions List</Title>
				<FilterContainer>
					<ExtensionsButton
						label="All"
						active={isActiveFilter === "All"}
						onClick={() => setIsActiveFilter("All")}
					></ExtensionsButton>
					<ExtensionsButton
						label="Active"
						active={isActiveFilter === "Active"}
						onClick={() => setIsActiveFilter("Active")}
					></ExtensionsButton>
					<ExtensionsButton
						label="Inactive"
						active={isActiveFilter === "Inactive"}
						onClick={() => setIsActiveFilter("Inactive")}
					></ExtensionsButton>
				</FilterContainer>
			</ExtensionsContainer>
		</main>
	);
};

import styled from "@emotion/styled";
import { useState } from "react";
import data from "../../data/data.json";
import { ExtensionsButton } from "../UI/extensionButton";
import { ExtensionCard } from "../UI/extensionCard";

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-400);
`;

const ExtensionsTitleContainer = styled.div`
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

const ExtensionContainer = styled.div`
	display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
`;

export const Main = () => {
	const [isActiveFilter, setIsActiveFilter] = useState("All");
	const [extensionData, setExtensionData] = useState(data);

	const filterData = extensionData.filter((item) => {
		if (isActiveFilter === "All") return true;
		if (isActiveFilter === "Active") return item.isActive;
		if (isActiveFilter === "Inactive") return !item.isActive;
		return true;
	});

	//removing extension data
	const handleRemoveExtension = (name: string) => {
		setExtensionData((prevData) =>
			prevData.filter((item) => item.name !== name),
		);
	};

	return (
		<MainContainer>
			<ExtensionsTitleContainer>
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
			</ExtensionsTitleContainer>

			<ExtensionContainer>
				{filterData.map((item) => (
					<ExtensionCard
						key={item.name}
						logo={item.logo}
						name={item.name}
						description={item.description}
						isActive={item.isActive}
						onRemoveExtension={() => handleRemoveExtension(item.name)}
					></ExtensionCard>
				))}
			</ExtensionContainer>
		</MainContainer>
	);
};

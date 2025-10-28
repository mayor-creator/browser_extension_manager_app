import styled from "@emotion/styled";
import { useId, useState } from "react";
import { convertPxToRem } from "../../util/convertPxToRem";

interface ToggleProps {
	isActive: boolean;
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${convertPxToRem(24)};
  cursor: pointer;
  position: relative;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

const ToggleSlider = styled.span<{ isChecked: boolean }>`
  width: ${convertPxToRem(36)};
  height: ${convertPxToRem(20)};
  border-radius: ${convertPxToRem(16)};
  position: relative;
  transition: background-color 0.2s;
  background-color: ${({ isChecked }) =>
		isChecked ? "var(--color-red400)" : "var(--color-neutral600)"};

  &::before {
    content: "";
    position: absolute;
    width: ${convertPxToRem(16)};
    height: ${convertPxToRem(16)};
    left: ${convertPxToRem(1)};
    top: ${convertPxToRem(1)};
    background-color: var(--color-neutral0);
    border-radius: 50%;
    transform: ${({ isChecked }: { isChecked: boolean }) => (isChecked ? `translateX(${convertPxToRem(18)})` : "translateX(0)")};
    transition: transform 0.3s ease;
  }
`;

export const Toggle = ({ isActive }: ToggleProps) => {
	const [isChecked, setIsChecked] = useState(isActive);
	const id = useId();

	const toggle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const checked = event.target.checked;
		setIsChecked(checked);
	};

	return (
		<Label htmlFor={id}>
			<ToggleInput
				type="checkbox"
				id={id}
				checked={isChecked}
				onChange={toggle}
				role="switch"
			/>
			<ToggleSlider isChecked={isChecked} />
		</Label>
	);
};

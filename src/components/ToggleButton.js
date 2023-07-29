import { FaMoon, FaSun } from "react-icons/fa";
import {
  StyledToggleBall,
  StyledToggleCheckbox,
  StyledToggleContainer,
  StyledToggleIcon,
  StyledToggleLabel,
} from "./Toggle/StyledToggle";

export const ToggleButton = () => {
  return (
    <StyledToggleContainer>
      <StyledToggleCheckbox id="toggle" />
      <StyledToggleLabel for="toggle">
        <StyledToggleIcon>
          <FaMoon />
        </StyledToggleIcon>
        <StyledToggleIcon>
          <FaSun />
        </StyledToggleIcon>
        <StyledToggleBall />
      </StyledToggleLabel>
    </StyledToggleContainer>
  );
};

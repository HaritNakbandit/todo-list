import styled from "@emotion/styled";
import { Button as MuiButton, SxProps } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { ReactNode } from "react";

interface Props {
  label: string;
  onClick?: Function;
  sx?: SxProps;
  startIcon?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  isSecondary?: boolean;
}
interface ButtonProps {
  issecondary: boolean;
}

const StyleButton = styled(MuiButton)<ButtonProps>`
  color: ${(props) => (props.issecondary ? indigo[700] : "white")};
  background-color: ${(props) => (props.issecondary ? "white" : indigo[700])};
  border: ${(props) => (props.issecondary ? `2px solid ${indigo[700]}` : null)};
  &:hover {
    background-color: ${(props) => (props.issecondary ? "white" : indigo[900])};
  }
`;

const Button = (props: Props) => {
  return (
    <StyleButton
      variant="contained"
      onClick={(e) => {
        if (typeof props.onClick === "function") {
          props?.onClick(e);
        }
      }}
      sx={props.sx}
      size="large"
      startIcon={props.startIcon}
      type={props.type}
      disabled={props.disabled}
      issecondary={props.isSecondary ??false}
    >
      {props.label}
    </StyleButton>
  );
};
export default Button;

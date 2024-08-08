import { TextField } from "@mui/material";
import Label from "./Label";
import styled from "@emotion/styled";
import { grey, indigo } from "@mui/material/colors";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  id?: string;
  label: string;
  name: string;
  value?: string;
  onChange: Function;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
}

const StyleInput = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[300],
    },
    "&:hover fieldset": {
      borderColor: indigo[700],
    },
    "&.Mui-focused fieldset": {
      borderColor: indigo[900],
    },
  },
});

const Input = (props: Props) => {
  return (
    <div className=" my-[10px]">
      <Label label={props.label} />
      <StyleInput
        id={props.id ?? "input-field"}
        value={props.value}
        name={props.name}
        fullWidth
        variant="outlined"
        color="primary"
        type={props.type}
        InputLabelProps={{
          shrink: true,
        }}
        multiline={props.multiline}
        rows={props.rows}
        error={props.error}
        helperText={props.helperText}
        onChange={(e) => {
          props.onChange(e);
        }}
        sx={{ marginTop: "5px" }}
      />
    </div>
  );
};
export default Input;

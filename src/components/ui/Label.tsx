import { SxProps, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Variant } from "@mui/material/styles/createTypography";

interface Props {
  label: string;
  variant?: Variant;
  fontWeight?: string;
  sx?: SxProps;
}

const Label = ({
  variant = "body1",
  fontWeight = "400",
  sx,
  ...props
}: Props) => {
  return (
    <Typography
      variant={variant}
      sx={{
        color: indigo[900],
        fontWeight: fontWeight,
        wordBreak: "break-all",
        ...sx,
      }}
    >
      {props.label}
    </Typography>
  );
};

export default Label;

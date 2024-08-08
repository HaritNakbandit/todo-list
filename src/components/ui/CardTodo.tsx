import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { Variant } from "@mui/material/styles/createTypography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Label from "./Label";

interface Props {
  title: string;
  description: string;
  subDesc: string;
  variant?: Variant;
  onClick: Function;
  onDelete: Function;
}

const CardTodo = (props: Props) => {
  return (
    <div className="relative cursor-pointer hover:scale-[1.01] duration-300">
      <div
        className="w-[300px] md:w-[600px] flex flex-col bg-white p-[20px] rounded-[24px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]"
        onClick={() => props.onClick()}
      >
        <Label label={props?.title} variant="h4" />
        <Label label={props?.description} />
        <Label label={props?.subDesc} sx={{ textAlign: "end" }} />
      </div>
      <IconButton
        aria-label="Example"
        sx={{ position: "absolute", top: 5, right: 5, zIndex: 5 }}
        onClick={() => props.onDelete()}
      >
        <CloseRoundedIcon sx={{ color: red[500] }} />
      </IconButton>
    </div>
  );
};

export default CardTodo;

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { red } from "@mui/material/colors";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Button } from "@/components/ui";

interface TodoInfo {
  created_at?: string;
  created_by?: CreatedByInfo;
  description?: string;
  id?: string;
  title?: string;
  updated_at?: string;
}

interface CreatedByInfo {
  id: string;
  username: string;
}

const DeleteDialog = (props: {
  openDialog: boolean;
  handleDialog: Function;
  data: TodoInfo;
  onSubmit:Function;
}) => {
  return (
    <Dialog
      fullWidth={true}
      open={props.openDialog}
      onClose={() => props.handleDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{`Want delete ${props?.data?.title}`}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => {
          props.handleDialog(false);
        }}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseRoundedIcon sx={{ color: red[500] }} />
      </IconButton>
      <DialogContent>
        <div className="flex flex-row justify-between	mt-5">
          <Button
            label={"Cancel"}
            sx={{ width:{ xs: "40%", md: "25%" } }}
            onClick={() => props.handleDialog(false)}
            isSecondary={true}
          />
          <Button
            type="submit"
            label={"Confirm"}
            onClick={() => props.onSubmit(props?.data)}
            sx={{ width: { xs: "40%", md: "25%" } }}
          />
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;

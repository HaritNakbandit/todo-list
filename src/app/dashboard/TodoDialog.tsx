import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { red } from "@mui/material/colors";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Button, Input } from "@/components/ui";
import { Formik } from "formik";
import * as Yup from "yup";

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

const TodoDialog = (props: {
  openDialog: boolean;
  handleDialog: Function;
  data: TodoInfo;
  isEdit?: boolean;
  onSubmit: Function;
}) => {
  return (
    <Dialog
      fullWidth={true}
      open={props.openDialog}
      onClose={() => props.handleDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
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
        <Formik
          initialValues={{
            title: props?.data?.title ?? "",
            description: props?.data?.description ?? "",
            id: props?.data?.id ?? "",
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required("Please specify Title"),
            description: Yup.string().required("Please specify Description"),
          })}
          onSubmit={async (values) => {
            props.onSubmit(values);
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="w-full">
              <Input
                id="input-title"
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                error={Boolean(errors.title)}
                helperText={errors.title}
              />
              <Input
                id="input-description"
                label="Description"
                name="description"
                value={values?.description}
                onChange={handleChange}
                error={Boolean(errors.description)}
                helperText={errors.description}
                multiline
                rows={4}
              />
              <div className="flex flex-row justify-between	mt-5">
                <Button
                  label={"Cancel"}
                  sx={{ width: { xs: "40%", md: "25%" } }}
                  onClick={() => props.handleDialog(false)}
                  isSecondary={true}
                />
                <Button
                  type="submit"
                  label={props.isEdit ? "Edit" : "Confirm"}
                  disabled={isSubmitting}
                  sx={{ width: { xs: "40%", md: "25%" } }}
                />
              </div>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default TodoDialog;

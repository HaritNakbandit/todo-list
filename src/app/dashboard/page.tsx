"use client";

import { useEffect, useState } from "react";
import { Button, CardTodo, Label, Loading } from "@/components/ui";
import TodoDialog from "./TodoDialog";
import moment from "moment";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteDialog from "./DeleteDialog";
import {
  deleteTodo,
  getTodoList,
  postCrateTodo,
  updateTodo,
} from "../../api/todo";

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

const Dashboard = (props: { children: React.ReactNode }) => {
  const [dataList, setDataList] = useState<TodoInfo[]>([]);
  const [openTodoDialog, setOpenTodoDialog] = useState<boolean>(false);
  const [openDeleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<TodoInfo>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTodoDialog = (open: boolean, data?: TodoInfo) => {
    if (data) {
      setIsEdit(true);
      setSelectData(data);
    } else {
      setIsEdit(false);
      setSelectData({});
    }
    setOpenTodoDialog(open);
  };

  const handleDeleteDialog = (open: boolean, data?: TodoInfo) => {
    setDeleteDialog(open);
    setSelectData(data ?? {});
  };

  const onSubmit = (values: TodoInfo) => {
    const callback = () => {
      setOpenTodoDialog(false);
      getTodoList(setLoading);
    };
    if (isEdit) {
      updateTodo(
        {
          title: values?.title ?? "",
          description: values?.description ?? "",
          id: values?.id ?? "",
        },
        setLoading,
        callback
      );
    } else {
      postCrateTodo(
        { title: values?.title ?? "", description: values?.description ?? "" },
        setLoading,
        callback
      );
    }
  };

  const onDelete = (values: TodoInfo) => {
    const callback = () => {
      setDeleteDialog(false);
      getTodoList(setLoading);
    };
    deleteTodo(values?.id ?? "", setLoading, callback);
  };

  useEffect(() => {
    const callback = (res: any) => {
      setDataList(res?.data);
    };
    getTodoList(setLoading, callback);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <Loading loading={loading} />
      <div className="flex flex-col items-center gap-4">
        {dataList?.length > 0 ? (
          (dataList || [])?.map((item: TodoInfo, index: number) => (
            <CardTodo
              key={`todo-card-${index + 1}`}
              title={item?.title ?? ""}
              description={item?.description ?? ""}
              subDesc={
                item?.updated_at
                  ? moment(item?.updated_at).format("DD-MM-YYYY")
                  : ""
              }
              onClick={() => handleTodoDialog(true, item)}
              onDelete={() => handleDeleteDialog(true, item)}
            />
          ))
        ) : (
          <Label label={'Empty press "Create" for add new Todo'} />
        )}
      </div>
      <Button
        startIcon={<AddRoundedIcon />}
        label="Create"
        onClick={() => handleTodoDialog(true)}
        sx={{ marginY: "10px", position: "absolute", bottom: 10 }}
      />
      <TodoDialog
        openDialog={openTodoDialog}
        handleDialog={handleTodoDialog}
        data={selectData}
        isEdit={isEdit}
        onSubmit={onSubmit}
      />
      <DeleteDialog
        openDialog={openDeleteDialog}
        handleDialog={handleDeleteDialog}
        data={selectData}
        onSubmit={onDelete}
      />
    </div>
  );
};

export default Dashboard;

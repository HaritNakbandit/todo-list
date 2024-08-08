import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { indigo } from "@mui/material/colors";

const Loading = ({ loading = false }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loading) setIsLoading(true);
    else setIsLoading(false);
  }, [loading]);

  return (
    <div
      className={`${
        isLoading ? "block" : "hidden"
      } bg-[#00000050] fixed w-full h-full z-50 left-0 top-0`}
    >
      <CircularProgress
        size={70}
        sx={{
          position: "absolute ",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          color: indigo[700],
        }}
      />
    </div>
  );
};

export default Loading;

"use client";

import HeaderBar from "./HeaderBar";
import { Box } from "@mui/material";

const PageLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const headerBarHeight = 64;
  return (
    <div>
      <HeaderBar />
      <Box
        sx={{
          mt: `${headerBarHeight}px`,
          padding: "20px",
          height: `calc(100vh - ${headerBarHeight}px)`,
          overflow: "auto",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default PageLayout;

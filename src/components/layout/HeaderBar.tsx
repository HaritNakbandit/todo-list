"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { indigo } from "@mui/material/colors";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function HeaderBar(props: {}) {
  function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: indigo[700] }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo-list
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

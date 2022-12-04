import { Box } from "@chakra-ui/react";
import { useState } from "react";

import { NavigationDrawer } from "./navigation-drawer";
import { AppBar } from "./app-bar";

const appShell = {
  appBarPosition: "fixed",
  appBarHeight: "64px",
  navigationDrawerWidth: "256px",
};

function App({ children, ...props }) {
  const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useState(false);

  const onToggleNavigationDrawer = () => {
    setIsNavigationDrawerOpen(!isNavigationDrawerOpen);
  };

  return (
    <Box id="app" {...props}>
      <NavigationDrawer
        isOpen={isNavigationDrawerOpen}
        onToggleNavigationDrawer={onToggleNavigationDrawer}
      />
      <Box pl={{ base: 0, md: appShell.navigationDrawerWidth }}>
        <AppBar
          navigationDrawerWidth={appShell.navigationDrawerWidth}
          onToggleNavigationDrawer={onToggleNavigationDrawer}
        />
        <Box pt={appShell.appBarHeight}>
          <Box p="48px">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export { App };

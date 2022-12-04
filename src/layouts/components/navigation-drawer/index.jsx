/* eslint-disable react/no-array-index-key */
import React from "react";
import { Box, VStack, Button, Icon, Spacer } from "@chakra-ui/react";
import { RiLogoutBoxRFill } from "react-icons/ri";

import logo from "../../../assets/images/logo.png";

import { useLogout } from "../../../lib/auth-provider/context/hooks";
import { MENU_ITEMS } from "../../constants";

import { Logo } from "./logo";
import { MenuItem } from "./menu-item";
import { Subheader } from "./subheader";

function NavigationDrawer({
  isOpen = false,
  onToggleNavigationDrawer,
  ...properties
}) {
  const [logout] = useLogout();

  return (
    <>
      <Box
        as="nav"
        top="0"
        height="100vh"
        width="256px"
        py="32px"
        px="24px"
        shadow="xl"
        zIndex={7}
        position="fixed"
        transform="translateX(0%)"
        maxHeight="calc(100% - 0px)"
        backgroundColor="white"
        overflow="scroll"
        left={{ base: isOpen ? "0" : "-256px", md: "0" }}
        transition="left 0.5s, right 0.5s"
        {...properties}
      >
        <Logo src={logo} alt="wish-logo" />
        <VStack spacing="16px" align="start">
          {MENU_ITEMS.map((item, index) => {
            return (
              <React.Fragment key={`subheader-${index}`}>
                {item.groupTitle && <Subheader title={item.groupTitle} />}
                {item.children.map((child) => {
                  const MenuIcon = child.icon;
                  return (
                    <MenuItem
                      key={`subheader-${index}-${child.to}`}
                      to={child.to}
                      title={child.title}
                      leftIcon={<MenuIcon />}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
          <Spacer />
          <Button
            fontSize="sm"
            height="36px"
            lineHeight={5}
            variant="ghost"
            color="gray.600"
            iconSpacing="12px"
            fontWeight="medium"
            colorScheme="blue"
            justifyContent="start"
            leftIcon={
              <Icon as={RiLogoutBoxRFill} color="gray.400" w="12px" h="12px" />
            }
            type="button"
            onClick={logout}
          >
            Logout
          </Button>
        </VStack>
      </Box>
      <Box
        as="div"
        position="fixed"
        top="0"
        right="0"
        height="100vh"
        width="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={6}
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        transition="opacity 0.2s ease-in-out"
        onClick={onToggleNavigationDrawer}
      />
    </>
  );
}

export { NavigationDrawer };

import { Button } from "@chakra-ui/react";
import { cloneElement } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function MenuItem({ leftIcon, title, to }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Button
      fontSize="sm"
      height="36px"
      width="100%"
      lineHeight={5}
      variant="ghost"
      color="gray.600"
      iconSpacing="12px"
      fontWeight="medium"
      colorScheme="blue"
      justifyContent="start"
      leftIcon={cloneElement(leftIcon, {
        color: match ? "white" : "gray.400",
        w: "12px",
        h: "12px",
      })}
      as={Link}
      _active={{ color: "white", bg: "blue.600" }}
      to={`${to.toLowerCase()}`}
      isActive={!!match}
    >
      {title}
    </Button>
  );
}

export { MenuItem };

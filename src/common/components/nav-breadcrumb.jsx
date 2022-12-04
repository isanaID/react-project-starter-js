import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function NavBreadcrumb({ items, ...otherProps }) {
  return (
    <Breadcrumb
      fontSize="2xl"
      lineHeight={8}
      color="gray.500"
      fontWeight="medium"
      mb={6}
      separator={<ChevronRightIcon color="gray.500" />}
      {...otherProps}
    >
      {items.map((item) => (
        <BreadcrumbItem
          key={item.text}
          isCurrentPage={item.isCurrentPage}
          color={item.isCurrentPage ? "gray.900" : ""}
        >
          <BreadcrumbLink
            as={Link}
            to={item.to}
            _hover={{
              textDecoration: "none",
            }}
          >
            {item.text}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default NavBreadcrumb;

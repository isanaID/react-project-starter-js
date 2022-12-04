import { Button, Flex, Text, Icon, HStack, Circle } from "@chakra-ui/react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function Pagination({
  totalItems,
  currentPage,
  perPage,
  pageCount,
  gotoPage,
  previousPage,
  nextPage,
  maxVisible = 5,
}) {
  const canPreviousPage = currentPage > 1;
  const canNextPage = currentPage < pageCount;
  const visiblePages = Math.min(maxVisible, pageCount);
  const visiblePagesStart = Math.max(
    1,
    currentPage - Math.floor(visiblePages / 2)
  );
  const visiblePagesEnd = Math.min(
    pageCount,
    visiblePagesStart + visiblePages - 1
  );
  const visiblePagesArray = Array.from(
    { length: visiblePagesEnd - visiblePagesStart + 1 },
    (v, k) => k + visiblePagesStart
  );

  const showing = `Showing ${
    totalItems < perPage ? totalItems : perPage
  } of ${totalItems} results`;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={2}
      justify="space-between"
      align="center"
      my={5}
    >
      <Text fontSize="sm" lineHeight={5}>
        {showing}
      </Text>
      <HStack gap="1px">
        <Button
          size="xs"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <Icon as={MdChevronLeft} />
        </Button>
        {currentPage >= maxVisible && pageCount > maxVisible && (
          <Circle>
            <BiDotsHorizontalRounded />
          </Circle>
        )}
        {visiblePagesArray.map((num) => (
          <Button
            key={num}
            size="xs"
            onClick={() => gotoPage(num)}
            isActive={currentPage === num}
            _active={{ bg: "teal.500", color: "white", border: "none" }}
            backgroundColor="white"
            borderColor="gray.200"
            borderWidth="1px"
          >
            {num}
          </Button>
        ))}
        {currentPage < maxVisible && pageCount > maxVisible && (
          <Circle>
            <BiDotsHorizontalRounded />
          </Circle>
        )}
        <Button size="xs" onClick={() => nextPage()} disabled={!canNextPage}>
          <Icon as={MdChevronRight} />
        </Button>
      </HStack>
    </Flex>
  );
}

export default Pagination;

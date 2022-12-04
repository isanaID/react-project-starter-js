import { Box, Image } from "@chakra-ui/react";

function Logo({ src, alt }) {
  return (
    <Box mb="85px" px="16px">
      <Image src={src} alt={alt} htmlHeight={24} htmlWidth={112} />
    </Box>
  );
}

export { Logo };

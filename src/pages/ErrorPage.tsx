import { Box, GridItem, Heading, Text, useColorMode } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import useSideBarStore from "../sidebarStore";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";

const ErrorPage = () => {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const { colorMode } = useColorMode();

  const error = useRouteError();
  return (
    <>
      <NavBar />
      {showSidebar && (
        <GridItem
          area="sidebar"
          position="absolute"
          backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
          top={0}
          bottom={0}
          left={0}
          zIndex={1}
          paddingRight={2}
        >
          <SideBar />
        </GridItem>
      )}
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : " An unexpected error accurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;

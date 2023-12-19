import { Box } from "@chakra-ui/react";
import SidebarMenu from "./SidebarMenu";
import SidebarNavbar from "./SidebarNavbar";

const SideBar = () => {
  return (
    <Box margin={3}>
      <SidebarNavbar />
      <SidebarMenu />
    </Box>
  );
};

export default SideBar;

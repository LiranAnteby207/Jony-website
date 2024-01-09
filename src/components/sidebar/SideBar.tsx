import { Box } from "@chakra-ui/react";
import SidebarMenu from "./SidebarMenu";
import SidebarNavbar from "./SidebarNavbar";
import SidebarBottom from "./SidebarBottom";

const SideBar = () => {
  return (
    <Box pt={"8%"} margin={3}>
      <SidebarNavbar />
      <SidebarMenu />
      <SidebarBottom />
    </Box>
  );
};

export default SideBar;

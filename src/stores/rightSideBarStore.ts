import { create } from "zustand";

interface RightSidebarShowStore{
    showRightSidebar: boolean;
    setRightShowSidebar: () => void;
}


const useRightSideBarStore = create<RightSidebarShowStore>(set => ({
    showRightSidebar : false,
    setRightShowSidebar: () => set((store) => ({showRightSidebar: !store.showRightSidebar}))
}));
export default useRightSideBarStore;
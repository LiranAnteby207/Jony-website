import { create } from "zustand";

interface SidebarShowStore{
    showSidebar: boolean;
    setShowSidebar: () => void;
}

const useSideBarStore = create<SidebarShowStore>(set => ({
    showSidebar : false,
    setShowSidebar: () => set((store) => ({showSidebar: !store.showSidebar}))
}));

export default useSideBarStore;
import { IconType } from "react-icons";
import { create } from "zustand";
import { ImQuestion } from "react-icons/im";

interface RightSidebarOpenStore{
    icon: IconType;
    name: string;
    setIcon: (icon: IconType, name: string) => void;
}


const useRightSidebarOpenStore = create<RightSidebarOpenStore>(set => ({
    icon : ImQuestion,
    name: '',
    setIcon: (icon, name) => set((store) => ({...store, icon: icon, name:name}))
}));
export default useRightSidebarOpenStore;
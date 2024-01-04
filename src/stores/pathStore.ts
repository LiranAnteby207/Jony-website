import { create } from "zustand";

interface PathStore{
    selectedPath: string;
    setSelectedPath: (path: string) => void;
}

const usePathStore = create<PathStore>(set => ({
    selectedPath : '/',
    setSelectedPath: (path) => set({ selectedPath: path })
}));

export default usePathStore;
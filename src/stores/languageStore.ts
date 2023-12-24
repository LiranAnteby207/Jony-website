import { create } from "zustand";

interface LanguageStore{
    selectedLanguage: string;
    setSelectedLanguage: (newLanguage: string) => void;
}

const useLanguageStoreStore = create<LanguageStore>(set => ({
    selectedLanguage : "English",
    setSelectedLanguage: (newLanguage: string) => set({ selectedLanguage: newLanguage })
}));

export default useLanguageStoreStore;
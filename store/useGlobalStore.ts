import { create } from "zustand";

interface GlobalState {
  menuIsOpen: boolean;
  toggleMenuOpen: () => void;
}

/*----------------------
Global Store
----------------------*/
export const useGlobalStore = create<GlobalState>((set) => ({
  menuIsOpen: false,
  toggleMenuOpen: () =>
    set((state) => ({
      menuIsOpen: !state.menuIsOpen,
    })),
}));

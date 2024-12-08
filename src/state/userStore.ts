import { create } from "zustand";

type GetUsersFilters = {
    limit: number;
    page: number;
};

type UserStore = {
    filters?: GetUsersFilters;
    setFilters: (filters?: GetUsersFilters) => void;
};

export const useUserStore = create<UserStore>(set => ({
    filters: undefined,
    setFilters: filters => set({ filters })
}));
import { create } from 'zustand';

export interface MovieInfo {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useStore = create<MovieInfo>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ movieId, isOpen: true }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useStore
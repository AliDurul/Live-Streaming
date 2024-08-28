import { create } from 'zustand';

export interface State {
    movieId?: string;
    isOpen: boolean;

}

export interface Actions {
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useMovieStore = create<State & Actions>()((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ movieId, isOpen: true }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useMovieStore
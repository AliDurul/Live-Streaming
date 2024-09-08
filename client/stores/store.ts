import { create } from 'zustand';

export interface State {
    contentInfo?: any;
    isOpen: boolean;
    contentType: string;
}

const initialState: State = {
    contentInfo: undefined,
    isOpen: false,
    contentType: 'movie',
}


export interface Actions {
    openModal: (contentInfo: any) => void;
    closeModal: () => void;
    setContentType: (contentType: string) => void;
}

const useStreamStore = create<State & Actions>()((set) => ({
    ...initialState,
    openModal: (contentInfo: any) => set({ contentInfo, isOpen: true }),
    closeModal: () => set({ isOpen: false, contentInfo: undefined }),
    setContentType: (contentType: string) => set({ contentType }),
}));

export default useStreamStore
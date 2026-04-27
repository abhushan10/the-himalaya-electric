"use client";

import { create } from 'zustand';

interface QuoteModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useQuoteModal = create<QuoteModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

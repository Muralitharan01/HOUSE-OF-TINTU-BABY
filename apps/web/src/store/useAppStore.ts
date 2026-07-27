import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeMode, ThemeConfig, AnimationConfig, CartItem, Product } from '@/types';

interface ThemeState {
  config: ThemeConfig;
  animationConfig: AnimationConfig;
  setMode: (mode: ThemeMode) => void;
  setAnimationSpeed: (speed: 'low' | 'medium' | 'high') => void;
  toggleAnimations: (enabled: boolean) => void;
  resolveCurrentTheme: () => 'morning' | 'evening' | 'night';
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      config: {
        mode: 'auto',
        currentActiveTheme: 'morning',
        allowAdminOverride: true,
      },
      animationConfig: {
        enabled: true,
        speed: 'medium',
        reducedMotion: false,
      },
      setMode: (mode: ThemeMode) => {
        set((state) => {
          const resolved = mode === 'auto' ? get().resolveCurrentTheme() : mode;
          return {
            config: {
              ...state.config,
              mode,
              currentActiveTheme: resolved,
            },
          };
        });
      },
      setAnimationSpeed: (speed) => {
        set((state) => ({
          animationConfig: { ...state.animationConfig, speed },
        }));
      },
      toggleAnimations: (enabled) => {
        set((state) => ({
          animationConfig: { ...state.animationConfig, enabled },
        }));
      },
      resolveCurrentTheme: () => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 18) return 'morning';
        if (hour >= 18 && hour < 19) return 'evening';
        return 'night';
      },
    }),
    {
      name: 'tintu-theme-storage',
    }
  )
);

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getRawSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
              isOpen: true,
            };
          }
          return {
            items: [
              ...state.items,
              {
                id: `${product.id}-${Date.now()}`,
                product,
                quantity,
                giftWrap: false,
              },
            ],
            isOpen: true,
          };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalCount: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      getRawSubtotal: () => {
        return get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: 'tintu-cart-storage',
    }
  )
);

interface WishlistState {
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistIds: [],
      toggleWishlist: (productId) => {
        set((state) => {
          const exists = state.wishlistIds.includes(productId);
          return {
            wishlistIds: exists
              ? state.wishlistIds.filter((id) => id !== productId)
              : [...state.wishlistIds, productId],
          };
        });
      },
      isInWishlist: (productId) => get().wishlistIds.includes(productId),
    }),
    {
      name: 'tintu-wishlist-storage',
    }
  )
);

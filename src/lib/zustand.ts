import { create } from "zustand";

/**
 * When the user logs into the server we should do a database query and fetch the required data.
 * Things that we need to fetch are:
 *
 * -> Used and unused purchased assets, we should also have a sorting system that will have the unused assets on top and have a clear indication of
 * what has been redeemed and what has not yet been redeemed.
 *
 * -> The number of coins the users has
 *
 * -> The character name so we can display it in the tablet, the text should also be truncated but we can do that from the HTML side.
 *
 * -> Also need to fetch their ped headshot image as base64
 */

interface HubState {
  currentPage: string;
  setPage: (page: string) => void;
  totalSpent: number;
  setTotalSpent: (totalSpent: number) => void;
  spentCoins: number;
  setSpentCoins: (spentCoins: number) => void;
  coins: number;
  setCoins: (_coins: number) => void;
  charName: string | undefined;
  setCharName: (name: string) => void;
  avatarUrl: string | undefined;
  setAvatarUrl: (url: string) => void;
}

const useStore = create<HubState>((set) => ({
  currentPage: "shop",
  setPage: (page: string) =>
    set({
      currentPage: page,
    }),
  totalSpent: 0,
  setTotalSpent: (totalSpent: number) => {
    set({
      totalSpent: totalSpent,
    });
  },
  spentCoins: 0,
  setSpentCoins: (spentCoins: number) => {
    set({
      spentCoins: spentCoins,
    });
  },
  coins: 0,
  setCoins: (coins: number) =>
    set({
      coins: coins,
    }),
  charName: "N/A",
  setCharName: (name: string) =>
    set({
      charName: name,
    }),
  avatarUrl: undefined,
  setAvatarUrl: (url: string) =>
    set({
      avatarUrl: url,
    }),
}));

export { useStore };

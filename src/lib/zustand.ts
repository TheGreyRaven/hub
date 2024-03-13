import { create } from 'zustand';

/**
 * When the user logs into the server we should do a database query and fetch the required data.
 * Things that we need to fetch are:
 * 
 * -> Used and unused purchased assets, we should also have a sorting system that will have the unused assets on top and have a clear indication of
 * what has been redeemed and what has not yet been redeemed.
 * 
 * -> The number of conins the users has
 * 
 * -> The character name so we can display it in the tablet, the text should also be truncated but we can do that from the HTML side.
 * 
 * -> Also need to fetch their Steam profile picture URL
 */

interface HubState {
  currentPage: string,
  setPage: (page: string) => void,
  coins: number,
  setCoins: (_coins: number) => void,
  charName: string | null,
  setCharName: (name: string) => void,
  avatarUrl: string | null,
  setAvatarUrl: (url: string) => void
}

const useStore = create<HubState>(set => ({
  currentPage: 'news',
  setPage: (page: string) => set({
    currentPage: page
  }),
  coins: 1337,
  setCoins: (coins: number) => set({
    coins: coins
  }),
  charName: null,
  setCharName: (name: string) => set({
    charName: name
  }),
  avatarUrl: 'https://avatars.githubusercontent.com/u/14842471',
  setAvatarUrl: (url: string) => set({
    avatarUrl: url
  })
}))

export {
  useStore
}
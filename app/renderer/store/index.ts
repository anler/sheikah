import { Wallets, Wallet } from "app/common/runtimeTypes/storage/wallets"

// Optional state for the wallet
export type WalletOption = Wallet | false

// Main store state
export interface StoreState {
  wallets: Wallets
  wallet: WalletOption
}
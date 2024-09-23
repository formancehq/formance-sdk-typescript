/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { walletsV1ConfirmHold } from "../funcs/walletsV1ConfirmHold.js";
import { walletsV1CreateBalance } from "../funcs/walletsV1CreateBalance.js";
import { walletsV1CreateWallet } from "../funcs/walletsV1CreateWallet.js";
import { walletsV1CreditWallet } from "../funcs/walletsV1CreditWallet.js";
import { walletsV1DebitWallet } from "../funcs/walletsV1DebitWallet.js";
import { walletsV1GetBalance } from "../funcs/walletsV1GetBalance.js";
import { walletsV1GetHold } from "../funcs/walletsV1GetHold.js";
import { walletsV1GetHolds } from "../funcs/walletsV1GetHolds.js";
import { walletsV1GetTransactions } from "../funcs/walletsV1GetTransactions.js";
import { walletsV1GetWallet } from "../funcs/walletsV1GetWallet.js";
import { walletsV1GetWalletSummary } from "../funcs/walletsV1GetWalletSummary.js";
import { walletsV1ListBalances } from "../funcs/walletsV1ListBalances.js";
import { walletsV1ListWallets } from "../funcs/walletsV1ListWallets.js";
import { walletsV1UpdateWallet } from "../funcs/walletsV1UpdateWallet.js";
import { walletsV1VoidHold } from "../funcs/walletsV1VoidHold.js";
import { walletsV1WalletsgetServerInfo } from "../funcs/walletsV1WalletsgetServerInfo.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class SDKWalletsV1 extends ClientSDK {
  /**
   * Confirm a hold
   */
  async confirmHold(
    request: operations.ConfirmHoldRequest,
    options?: RequestOptions,
  ): Promise<operations.ConfirmHoldResponse> {
    return unwrapAsync(walletsV1ConfirmHold(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a balance
   */
  async createBalance(
    request: operations.CreateBalanceRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateBalanceResponse> {
    return unwrapAsync(walletsV1CreateBalance(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new wallet
   */
  async createWallet(
    request: operations.CreateWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateWalletResponse> {
    return unwrapAsync(walletsV1CreateWallet(
      this,
      request,
      options,
    ));
  }

  /**
   * Credit a wallet
   */
  async creditWallet(
    request: operations.CreditWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.CreditWalletResponse> {
    return unwrapAsync(walletsV1CreditWallet(
      this,
      request,
      options,
    ));
  }

  /**
   * Debit a wallet
   */
  async debitWallet(
    request: operations.DebitWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.DebitWalletResponse> {
    return unwrapAsync(walletsV1DebitWallet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get detailed balance
   */
  async getBalance(
    request: operations.GetBalanceRequest,
    options?: RequestOptions,
  ): Promise<operations.GetBalanceResponse> {
    return unwrapAsync(walletsV1GetBalance(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a hold
   */
  async getHold(
    request: operations.GetHoldRequest,
    options?: RequestOptions,
  ): Promise<operations.GetHoldResponse> {
    return unwrapAsync(walletsV1GetHold(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all holds for a wallet
   */
  async getHolds(
    request: operations.GetHoldsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetHoldsResponse> {
    return unwrapAsync(walletsV1GetHolds(
      this,
      request,
      options,
    ));
  }

  async getTransactions(
    request: operations.GetTransactionsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetTransactionsResponse> {
    return unwrapAsync(walletsV1GetTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a wallet
   */
  async getWallet(
    request: operations.GetWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWalletResponse> {
    return unwrapAsync(walletsV1GetWallet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get wallet summary
   */
  async getWalletSummary(
    request: operations.GetWalletSummaryRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWalletSummaryResponse> {
    return unwrapAsync(walletsV1GetWalletSummary(
      this,
      request,
      options,
    ));
  }

  /**
   * List balances of a wallet
   */
  async listBalances(
    request: operations.ListBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.ListBalancesResponse> {
    return unwrapAsync(walletsV1ListBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * List all wallets
   */
  async listWallets(
    request: operations.ListWalletsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListWalletsResponse> {
    return unwrapAsync(walletsV1ListWallets(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a wallet
   */
  async updateWallet(
    request: operations.UpdateWalletRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWalletResponse> {
    return unwrapAsync(walletsV1UpdateWallet(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel a hold
   */
  async voidHold(
    request: operations.VoidHoldRequest,
    options?: RequestOptions,
  ): Promise<operations.VoidHoldResponse> {
    return unwrapAsync(walletsV1VoidHold(
      this,
      request,
      options,
    ));
  }

  /**
   * Get server info
   */
  async walletsgetServerInfo(
    options?: RequestOptions,
  ): Promise<operations.WalletsgetServerInfoResponse> {
    return unwrapAsync(walletsV1WalletsgetServerInfo(
      this,
      options,
    ));
  }
}

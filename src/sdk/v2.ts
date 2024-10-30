/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ledgerV2AddMetadataOnTransaction } from "../funcs/ledgerV2AddMetadataOnTransaction.js";
import { ledgerV2AddMetadataToAccount } from "../funcs/ledgerV2AddMetadataToAccount.js";
import { ledgerV2CountAccounts } from "../funcs/ledgerV2CountAccounts.js";
import { ledgerV2CountTransactions } from "../funcs/ledgerV2CountTransactions.js";
import { ledgerV2CreateBulk } from "../funcs/ledgerV2CreateBulk.js";
import { ledgerV2CreateLedger } from "../funcs/ledgerV2CreateLedger.js";
import { ledgerV2CreateTransaction } from "../funcs/ledgerV2CreateTransaction.js";
import { ledgerV2DeleteAccountMetadata } from "../funcs/ledgerV2DeleteAccountMetadata.js";
import { ledgerV2DeleteLedgerMetadata } from "../funcs/ledgerV2DeleteLedgerMetadata.js";
import { ledgerV2DeleteTransactionMetadata } from "../funcs/ledgerV2DeleteTransactionMetadata.js";
import { ledgerV2ExportLogs } from "../funcs/ledgerV2ExportLogs.js";
import { ledgerV2GetAccount } from "../funcs/ledgerV2GetAccount.js";
import { ledgerV2GetBalancesAggregated } from "../funcs/ledgerV2GetBalancesAggregated.js";
import { ledgerV2GetInfo } from "../funcs/ledgerV2GetInfo.js";
import { ledgerV2GetLedger } from "../funcs/ledgerV2GetLedger.js";
import { ledgerV2GetLedgerInfo } from "../funcs/ledgerV2GetLedgerInfo.js";
import { ledgerV2GetTransaction } from "../funcs/ledgerV2GetTransaction.js";
import { ledgerV2GetVolumesWithBalances } from "../funcs/ledgerV2GetVolumesWithBalances.js";
import { ledgerV2ImportLogs } from "../funcs/ledgerV2ImportLogs.js";
import { ledgerV2ListAccounts } from "../funcs/ledgerV2ListAccounts.js";
import { ledgerV2ListLedgers } from "../funcs/ledgerV2ListLedgers.js";
import { ledgerV2ListLogs } from "../funcs/ledgerV2ListLogs.js";
import { ledgerV2ListTransactions } from "../funcs/ledgerV2ListTransactions.js";
import { ledgerV2ReadStats } from "../funcs/ledgerV2ReadStats.js";
import { ledgerV2RevertTransaction } from "../funcs/ledgerV2RevertTransaction.js";
import { ledgerV2UpdateLedgerMetadata } from "../funcs/ledgerV2UpdateLedgerMetadata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class V2 extends ClientSDK {
  /**
   * Set the metadata of a transaction by its ID
   */
  async addMetadataOnTransaction(
    request: operations.V2AddMetadataOnTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.V2AddMetadataOnTransactionResponse> {
    return unwrapAsync(ledgerV2AddMetadataOnTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Add metadata to an account
   */
  async addMetadataToAccount(
    request: operations.V2AddMetadataToAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V2AddMetadataToAccountResponse> {
    return unwrapAsync(ledgerV2AddMetadataToAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Count the accounts from a ledger
   */
  async countAccounts(
    request: operations.V2CountAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2CountAccountsResponse> {
    return unwrapAsync(ledgerV2CountAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * Count the transactions from a ledger
   */
  async countTransactions(
    request: operations.V2CountTransactionsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2CountTransactionsResponse> {
    return unwrapAsync(ledgerV2CountTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk request
   */
  async createBulk(
    request: operations.V2CreateBulkRequest,
    options?: RequestOptions,
  ): Promise<operations.V2CreateBulkResponse> {
    return unwrapAsync(ledgerV2CreateBulk(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a ledger
   */
  async createLedger(
    request: operations.V2CreateLedgerRequest,
    options?: RequestOptions,
  ): Promise<operations.V2CreateLedgerResponse> {
    return unwrapAsync(ledgerV2CreateLedger(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a new transaction to a ledger
   */
  async createTransaction(
    request: operations.V2CreateTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.V2CreateTransactionResponse> {
    return unwrapAsync(ledgerV2CreateTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete metadata by key
   *
   * @remarks
   * Delete metadata by key
   */
  async deleteAccountMetadata(
    request: operations.V2DeleteAccountMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V2DeleteAccountMetadataResponse> {
    return unwrapAsync(ledgerV2DeleteAccountMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete ledger metadata by key
   */
  async deleteLedgerMetadata(
    request: operations.V2DeleteLedgerMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V2DeleteLedgerMetadataResponse> {
    return unwrapAsync(ledgerV2DeleteLedgerMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete metadata by key
   *
   * @remarks
   * Delete metadata by key
   */
  async deleteTransactionMetadata(
    request: operations.V2DeleteTransactionMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V2DeleteTransactionMetadataResponse> {
    return unwrapAsync(ledgerV2DeleteTransactionMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Export logs
   */
  async exportLogs(
    request: operations.V2ExportLogsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ExportLogsResponse> {
    return unwrapAsync(ledgerV2ExportLogs(
      this,
      request,
      options,
    ));
  }

  /**
   * Get account by its address
   */
  async getAccount(
    request: operations.V2GetAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetAccountResponse> {
    return unwrapAsync(ledgerV2GetAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the aggregated balances from selected accounts
   */
  async getBalancesAggregated(
    request: operations.V2GetBalancesAggregatedRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetBalancesAggregatedResponse> {
    return unwrapAsync(ledgerV2GetBalancesAggregated(
      this,
      request,
      options,
    ));
  }

  /**
   * Show server information
   */
  async getInfo(
    options?: RequestOptions,
  ): Promise<operations.V2GetInfoResponse> {
    return unwrapAsync(ledgerV2GetInfo(
      this,
      options,
    ));
  }

  /**
   * Get a ledger
   */
  async getLedger(
    request: operations.V2GetLedgerRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetLedgerResponse> {
    return unwrapAsync(ledgerV2GetLedger(
      this,
      request,
      options,
    ));
  }

  /**
   * Get information about a ledger
   */
  async getLedgerInfo(
    request: operations.V2GetLedgerInfoRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetLedgerInfoResponse> {
    return unwrapAsync(ledgerV2GetLedgerInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Get transaction from a ledger by its ID
   */
  async getTransaction(
    request: operations.V2GetTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetTransactionResponse> {
    return unwrapAsync(ledgerV2GetTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Get list of volumes with balances for (account/asset)
   */
  async getVolumesWithBalances(
    request: operations.V2GetVolumesWithBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.V2GetVolumesWithBalancesResponse> {
    return unwrapAsync(ledgerV2GetVolumesWithBalances(
      this,
      request,
      options,
    ));
  }

  async importLogs(
    request: operations.V2ImportLogsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ImportLogsResponse> {
    return unwrapAsync(ledgerV2ImportLogs(
      this,
      request,
      options,
    ));
  }

  /**
   * List accounts from a ledger
   *
   * @remarks
   * List accounts from a ledger, sorted by address in descending order.
   */
  async listAccounts(
    request: operations.V2ListAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ListAccountsResponse> {
    return unwrapAsync(ledgerV2ListAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * List ledgers
   */
  async listLedgers(
    request: operations.V2ListLedgersRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ListLedgersResponse> {
    return unwrapAsync(ledgerV2ListLedgers(
      this,
      request,
      options,
    ));
  }

  /**
   * List the logs from a ledger
   *
   * @remarks
   * List the logs from a ledger, sorted by ID in descending order.
   */
  async listLogs(
    request: operations.V2ListLogsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ListLogsResponse> {
    return unwrapAsync(ledgerV2ListLogs(
      this,
      request,
      options,
    ));
  }

  /**
   * List transactions from a ledger
   *
   * @remarks
   * List transactions from a ledger, sorted by id in descending order.
   */
  async listTransactions(
    request: operations.V2ListTransactionsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ListTransactionsResponse> {
    return unwrapAsync(ledgerV2ListTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get statistics from a ledger
   *
   * @remarks
   * Get statistics from a ledger. (aggregate metrics on accounts and transactions)
   */
  async readStats(
    request: operations.V2ReadStatsRequest,
    options?: RequestOptions,
  ): Promise<operations.V2ReadStatsResponse> {
    return unwrapAsync(ledgerV2ReadStats(
      this,
      request,
      options,
    ));
  }

  /**
   * Revert a ledger transaction by its ID
   */
  async revertTransaction(
    request: operations.V2RevertTransactionRequest,
    options?: RequestOptions,
  ): Promise<operations.V2RevertTransactionResponse> {
    return unwrapAsync(ledgerV2RevertTransaction(
      this,
      request,
      options,
    ));
  }

  /**
   * Update ledger metadata
   */
  async updateLedgerMetadata(
    request: operations.V2UpdateLedgerMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V2UpdateLedgerMetadataResponse> {
    return unwrapAsync(ledgerV2UpdateLedgerMetadata(
      this,
      request,
      options,
    ));
  }
}

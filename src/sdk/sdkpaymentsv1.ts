/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsV1AddAccountToPool } from "../funcs/paymentsV1AddAccountToPool.js";
import { paymentsV1ConnectorsTransfer } from "../funcs/paymentsV1ConnectorsTransfer.js";
import { paymentsV1CreateAccount } from "../funcs/paymentsV1CreateAccount.js";
import { paymentsV1CreateBankAccount } from "../funcs/paymentsV1CreateBankAccount.js";
import { paymentsV1CreatePayment } from "../funcs/paymentsV1CreatePayment.js";
import { paymentsV1CreatePool } from "../funcs/paymentsV1CreatePool.js";
import { paymentsV1CreateTransferInitiation } from "../funcs/paymentsV1CreateTransferInitiation.js";
import { paymentsV1DeletePool } from "../funcs/paymentsV1DeletePool.js";
import { paymentsV1DeleteTransferInitiation } from "../funcs/paymentsV1DeleteTransferInitiation.js";
import { paymentsV1ForwardBankAccount } from "../funcs/paymentsV1ForwardBankAccount.js";
import { paymentsV1GetAccountBalances } from "../funcs/paymentsV1GetAccountBalances.js";
import { paymentsV1GetBankAccount } from "../funcs/paymentsV1GetBankAccount.js";
import { paymentsV1GetConnectorTask } from "../funcs/paymentsV1GetConnectorTask.js";
import { paymentsV1GetConnectorTaskV1 } from "../funcs/paymentsV1GetConnectorTaskV1.js";
import { paymentsV1GetPayment } from "../funcs/paymentsV1GetPayment.js";
import { paymentsV1GetPool } from "../funcs/paymentsV1GetPool.js";
import { paymentsV1GetPoolBalances } from "../funcs/paymentsV1GetPoolBalances.js";
import { paymentsV1GetTransferInitiation } from "../funcs/paymentsV1GetTransferInitiation.js";
import { paymentsV1InstallConnector } from "../funcs/paymentsV1InstallConnector.js";
import { paymentsV1ListAllConnectors } from "../funcs/paymentsV1ListAllConnectors.js";
import { paymentsV1ListBankAccounts } from "../funcs/paymentsV1ListBankAccounts.js";
import { paymentsV1ListConfigsAvailableConnectors } from "../funcs/paymentsV1ListConfigsAvailableConnectors.js";
import { paymentsV1ListConnectorTasks } from "../funcs/paymentsV1ListConnectorTasks.js";
import { paymentsV1ListConnectorTasksV1 } from "../funcs/paymentsV1ListConnectorTasksV1.js";
import { paymentsV1ListPayments } from "../funcs/paymentsV1ListPayments.js";
import { paymentsV1ListPools } from "../funcs/paymentsV1ListPools.js";
import { paymentsV1ListTransferInitiations } from "../funcs/paymentsV1ListTransferInitiations.js";
import { paymentsV1PaymentsgetAccount } from "../funcs/paymentsV1PaymentsgetAccount.js";
import { paymentsV1PaymentsgetServerInfo } from "../funcs/paymentsV1PaymentsgetServerInfo.js";
import { paymentsV1PaymentslistAccounts } from "../funcs/paymentsV1PaymentslistAccounts.js";
import { paymentsV1ReadConnectorConfig } from "../funcs/paymentsV1ReadConnectorConfig.js";
import { paymentsV1ReadConnectorConfigV1 } from "../funcs/paymentsV1ReadConnectorConfigV1.js";
import { paymentsV1RemoveAccountFromPool } from "../funcs/paymentsV1RemoveAccountFromPool.js";
import { paymentsV1ResetConnector } from "../funcs/paymentsV1ResetConnector.js";
import { paymentsV1ResetConnectorV1 } from "../funcs/paymentsV1ResetConnectorV1.js";
import { paymentsV1RetryTransferInitiation } from "../funcs/paymentsV1RetryTransferInitiation.js";
import { paymentsV1ReverseTransferInitiation } from "../funcs/paymentsV1ReverseTransferInitiation.js";
import { paymentsV1UdpateTransferInitiationStatus } from "../funcs/paymentsV1UdpateTransferInitiationStatus.js";
import { paymentsV1UninstallConnector } from "../funcs/paymentsV1UninstallConnector.js";
import { paymentsV1UninstallConnectorV1 } from "../funcs/paymentsV1UninstallConnectorV1.js";
import { paymentsV1UpdateBankAccountMetadata } from "../funcs/paymentsV1UpdateBankAccountMetadata.js";
import { paymentsV1UpdateConnectorConfigV1 } from "../funcs/paymentsV1UpdateConnectorConfigV1.js";
import { paymentsV1UpdateMetadata } from "../funcs/paymentsV1UpdateMetadata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class SDKPaymentsV1 extends ClientSDK {
  /**
   * Add an account to a pool
   *
   * @remarks
   * Add an account to a pool
   */
  async addAccountToPool(
    request: operations.AddAccountToPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.AddAccountToPoolResponse> {
    return unwrapAsync(paymentsV1AddAccountToPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Transfer funds between Connector accounts
   *
   * @remarks
   * Execute a transfer between two accounts.
   */
  async connectorsTransfer(
    request: operations.ConnectorsTransferRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorsTransferResponse> {
    return unwrapAsync(paymentsV1ConnectorsTransfer(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an account
   *
   * @remarks
   * Create an account
   */
  async createAccount(
    request: shared.AccountRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateAccountResponse> {
    return unwrapAsync(paymentsV1CreateAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a BankAccount in Payments and on the PSP
   *
   * @remarks
   * Create a bank account in Payments and on the PSP.
   */
  async createBankAccount(
    request: shared.BankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateBankAccountResponse> {
    return unwrapAsync(paymentsV1CreateBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a payment
   *
   * @remarks
   * Create a payment
   */
  async createPayment(
    request: shared.PaymentRequest,
    options?: RequestOptions,
  ): Promise<operations.CreatePaymentResponse> {
    return unwrapAsync(paymentsV1CreatePayment(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a Pool
   *
   * @remarks
   * Create a Pool
   */
  async createPool(
    request: shared.PoolRequest,
    options?: RequestOptions,
  ): Promise<operations.CreatePoolResponse> {
    return unwrapAsync(paymentsV1CreatePool(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a TransferInitiation
   *
   * @remarks
   * Create a transfer initiation
   */
  async createTransferInitiation(
    request: shared.TransferInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateTransferInitiationResponse> {
    return unwrapAsync(paymentsV1CreateTransferInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Pool
   *
   * @remarks
   * Delete a pool by its id.
   */
  async deletePool(
    request: operations.DeletePoolRequest,
    options?: RequestOptions,
  ): Promise<operations.DeletePoolResponse> {
    return unwrapAsync(paymentsV1DeletePool(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a transfer initiation
   *
   * @remarks
   * Delete a transfer initiation by its id.
   */
  async deleteTransferInitiation(
    request: operations.DeleteTransferInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteTransferInitiationResponse> {
    return unwrapAsync(paymentsV1DeleteTransferInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Forward a bank account to a connector
   */
  async forwardBankAccount(
    request: operations.ForwardBankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.ForwardBankAccountResponse> {
    return unwrapAsync(paymentsV1ForwardBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get account balances
   */
  async getAccountBalances(
    request: operations.GetAccountBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAccountBalancesResponse> {
    return unwrapAsync(paymentsV1GetAccountBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a bank account created by user on Formance
   */
  async getBankAccount(
    request: operations.GetBankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.GetBankAccountResponse> {
    return unwrapAsync(paymentsV1GetBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Read a specific task of the connector
   *
   * @remarks
   * Get a specific task associated to the connector.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async getConnectorTask(
    request: operations.GetConnectorTaskRequest,
    options?: RequestOptions,
  ): Promise<operations.GetConnectorTaskResponse> {
    return unwrapAsync(paymentsV1GetConnectorTask(
      this,
      request,
      options,
    ));
  }

  /**
   * Read a specific task of the connector
   *
   * @remarks
   * Get a specific task associated to the connector.
   */
  async getConnectorTaskV1(
    request: operations.GetConnectorTaskV1Request,
    options?: RequestOptions,
  ): Promise<operations.GetConnectorTaskV1Response> {
    return unwrapAsync(paymentsV1GetConnectorTaskV1(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a payment
   */
  async getPayment(
    request: operations.GetPaymentRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPaymentResponse> {
    return unwrapAsync(paymentsV1GetPayment(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Pool
   */
  async getPool(
    request: operations.GetPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPoolResponse> {
    return unwrapAsync(paymentsV1GetPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Get pool balances
   */
  async getPoolBalances(
    request: operations.GetPoolBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetPoolBalancesResponse> {
    return unwrapAsync(paymentsV1GetPoolBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a transfer initiation
   */
  async getTransferInitiation(
    request: operations.GetTransferInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.GetTransferInitiationResponse> {
    return unwrapAsync(paymentsV1GetTransferInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Install a connector
   *
   * @remarks
   * Install a connector by its name and config.
   */
  async installConnector(
    request: operations.InstallConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.InstallConnectorResponse> {
    return unwrapAsync(paymentsV1InstallConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * List all installed connectors
   *
   * @remarks
   * List all installed connectors.
   */
  async listAllConnectors(
    options?: RequestOptions,
  ): Promise<operations.ListAllConnectorsResponse> {
    return unwrapAsync(paymentsV1ListAllConnectors(
      this,
      options,
    ));
  }

  /**
   * List bank accounts created by user on Formance
   *
   * @remarks
   * List all bank accounts created by user on Formance.
   */
  async listBankAccounts(
    request: operations.ListBankAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListBankAccountsResponse> {
    return unwrapAsync(paymentsV1ListBankAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * List the configs of each available connector
   *
   * @remarks
   * List the configs of each available connector.
   */
  async listConfigsAvailableConnectors(
    options?: RequestOptions,
  ): Promise<operations.ListConfigsAvailableConnectorsResponse> {
    return unwrapAsync(paymentsV1ListConfigsAvailableConnectors(
      this,
      options,
    ));
  }

  /**
   * List tasks from a connector
   *
   * @remarks
   * List all tasks associated with this connector.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async listConnectorTasks(
    request: operations.ListConnectorTasksRequest,
    options?: RequestOptions,
  ): Promise<operations.ListConnectorTasksResponse> {
    return unwrapAsync(paymentsV1ListConnectorTasks(
      this,
      request,
      options,
    ));
  }

  /**
   * List tasks from a connector
   *
   * @remarks
   * List all tasks associated with this connector.
   */
  async listConnectorTasksV1(
    request: operations.ListConnectorTasksV1Request,
    options?: RequestOptions,
  ): Promise<operations.ListConnectorTasksV1Response> {
    return unwrapAsync(paymentsV1ListConnectorTasksV1(
      this,
      request,
      options,
    ));
  }

  /**
   * List payments
   */
  async listPayments(
    request: operations.ListPaymentsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPaymentsResponse> {
    return unwrapAsync(paymentsV1ListPayments(
      this,
      request,
      options,
    ));
  }

  /**
   * List Pools
   */
  async listPools(
    request: operations.ListPoolsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListPoolsResponse> {
    return unwrapAsync(paymentsV1ListPools(
      this,
      request,
      options,
    ));
  }

  /**
   * List Transfer Initiations
   */
  async listTransferInitiations(
    request: operations.ListTransferInitiationsRequest,
    options?: RequestOptions,
  ): Promise<operations.ListTransferInitiationsResponse> {
    return unwrapAsync(paymentsV1ListTransferInitiations(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an account
   */
  async paymentsgetAccount(
    request: operations.PaymentsgetAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.PaymentsgetAccountResponse> {
    return unwrapAsync(paymentsV1PaymentsgetAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get server info
   */
  async paymentsgetServerInfo(
    options?: RequestOptions,
  ): Promise<operations.PaymentsgetServerInfoResponse> {
    return unwrapAsync(paymentsV1PaymentsgetServerInfo(
      this,
      options,
    ));
  }

  /**
   * List accounts
   */
  async paymentslistAccounts(
    request: operations.PaymentslistAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.PaymentslistAccountsResponse> {
    return unwrapAsync(paymentsV1PaymentslistAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * Read the config of a connector
   *
   * @remarks
   * Read connector config
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async readConnectorConfig(
    request: operations.ReadConnectorConfigRequest,
    options?: RequestOptions,
  ): Promise<operations.ReadConnectorConfigResponse> {
    return unwrapAsync(paymentsV1ReadConnectorConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Read the config of a connector
   *
   * @remarks
   * Read connector config
   */
  async readConnectorConfigV1(
    request: operations.ReadConnectorConfigV1Request,
    options?: RequestOptions,
  ): Promise<operations.ReadConnectorConfigV1Response> {
    return unwrapAsync(paymentsV1ReadConnectorConfigV1(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an account from a pool
   *
   * @remarks
   * Remove an account from a pool by its id.
   */
  async removeAccountFromPool(
    request: operations.RemoveAccountFromPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.RemoveAccountFromPoolResponse> {
    return unwrapAsync(paymentsV1RemoveAccountFromPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Reset a connector
   *
   * @remarks
   * Reset a connector by its name.
   * It will remove the connector and ALL PAYMENTS generated with it.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async resetConnector(
    request: operations.ResetConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.ResetConnectorResponse> {
    return unwrapAsync(paymentsV1ResetConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * Reset a connector
   *
   * @remarks
   * Reset a connector by its name.
   * It will remove the connector and ALL PAYMENTS generated with it.
   */
  async resetConnectorV1(
    request: operations.ResetConnectorV1Request,
    options?: RequestOptions,
  ): Promise<operations.ResetConnectorV1Response> {
    return unwrapAsync(paymentsV1ResetConnectorV1(
      this,
      request,
      options,
    ));
  }

  /**
   * Retry a failed transfer initiation
   *
   * @remarks
   * Retry a failed transfer initiation
   */
  async retryTransferInitiation(
    request: operations.RetryTransferInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.RetryTransferInitiationResponse> {
    return unwrapAsync(paymentsV1RetryTransferInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Reverse a transfer initiation
   *
   * @remarks
   * Reverse transfer initiation
   */
  async reverseTransferInitiation(
    request: operations.ReverseTransferInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.ReverseTransferInitiationResponse> {
    return unwrapAsync(paymentsV1ReverseTransferInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the status of a transfer initiation
   *
   * @remarks
   * Update a transfer initiation status
   */
  async udpateTransferInitiationStatus(
    request: operations.UdpateTransferInitiationStatusRequest,
    options?: RequestOptions,
  ): Promise<operations.UdpateTransferInitiationStatusResponse> {
    return unwrapAsync(paymentsV1UdpateTransferInitiationStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Uninstall a connector
   *
   * @remarks
   * Uninstall a connector by its name.
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async uninstallConnector(
    request: operations.UninstallConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.UninstallConnectorResponse> {
    return unwrapAsync(paymentsV1UninstallConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * Uninstall a connector
   *
   * @remarks
   * Uninstall a connector by its name.
   */
  async uninstallConnectorV1(
    request: operations.UninstallConnectorV1Request,
    options?: RequestOptions,
  ): Promise<operations.UninstallConnectorV1Response> {
    return unwrapAsync(paymentsV1UninstallConnectorV1(
      this,
      request,
      options,
    ));
  }

  /**
   * Update metadata of a bank account
   */
  async updateBankAccountMetadata(
    request: operations.UpdateBankAccountMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateBankAccountMetadataResponse> {
    return unwrapAsync(paymentsV1UpdateBankAccountMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the config of a connector
   *
   * @remarks
   * Update connector config
   */
  async updateConnectorConfigV1(
    request: operations.UpdateConnectorConfigV1Request,
    options?: RequestOptions,
  ): Promise<operations.UpdateConnectorConfigV1Response> {
    return unwrapAsync(paymentsV1UpdateConnectorConfigV1(
      this,
      request,
      options,
    ));
  }

  /**
   * Update metadata
   */
  async updateMetadata(
    request: operations.UpdateMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateMetadataResponse> {
    return unwrapAsync(paymentsV1UpdateMetadata(
      this,
      request,
      options,
    ));
  }
}
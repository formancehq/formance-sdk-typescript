/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsV3AddAccountToPool } from "../funcs/paymentsV3AddAccountToPool.js";
import { paymentsV3AddBankAccountToPaymentServiceUser } from "../funcs/paymentsV3AddBankAccountToPaymentServiceUser.js";
import { paymentsV3ApprovePaymentInitiation } from "../funcs/paymentsV3ApprovePaymentInitiation.js";
import { paymentsV3CreateAccount } from "../funcs/paymentsV3CreateAccount.js";
import { paymentsV3CreateBankAccount } from "../funcs/paymentsV3CreateBankAccount.js";
import { paymentsV3CreatePayment } from "../funcs/paymentsV3CreatePayment.js";
import { paymentsV3CreatePaymentServiceUser } from "../funcs/paymentsV3CreatePaymentServiceUser.js";
import { paymentsV3CreatePool } from "../funcs/paymentsV3CreatePool.js";
import { paymentsV3DeletePaymentInitiation } from "../funcs/paymentsV3DeletePaymentInitiation.js";
import { paymentsV3DeletePool } from "../funcs/paymentsV3DeletePool.js";
import { paymentsV3ForwardBankAccount } from "../funcs/paymentsV3ForwardBankAccount.js";
import { paymentsV3ForwardPaymentServiceUserBankAccount } from "../funcs/paymentsV3ForwardPaymentServiceUserBankAccount.js";
import { paymentsV3GetAccount } from "../funcs/paymentsV3GetAccount.js";
import { paymentsV3GetAccountBalances } from "../funcs/paymentsV3GetAccountBalances.js";
import { paymentsV3GetBankAccount } from "../funcs/paymentsV3GetBankAccount.js";
import { paymentsV3GetConnectorConfig } from "../funcs/paymentsV3GetConnectorConfig.js";
import { paymentsV3GetConnectorSchedule } from "../funcs/paymentsV3GetConnectorSchedule.js";
import { paymentsV3GetPayment } from "../funcs/paymentsV3GetPayment.js";
import { paymentsV3GetPaymentInitiation } from "../funcs/paymentsV3GetPaymentInitiation.js";
import { paymentsV3GetPaymentServiceUser } from "../funcs/paymentsV3GetPaymentServiceUser.js";
import { paymentsV3GetPool } from "../funcs/paymentsV3GetPool.js";
import { paymentsV3GetPoolBalances } from "../funcs/paymentsV3GetPoolBalances.js";
import { paymentsV3GetPoolBalancesLatest } from "../funcs/paymentsV3GetPoolBalancesLatest.js";
import { paymentsV3GetTask } from "../funcs/paymentsV3GetTask.js";
import { paymentsV3InitiatePayment } from "../funcs/paymentsV3InitiatePayment.js";
import { paymentsV3InstallConnector } from "../funcs/paymentsV3InstallConnector.js";
import { paymentsV3ListAccounts } from "../funcs/paymentsV3ListAccounts.js";
import { paymentsV3ListBankAccounts } from "../funcs/paymentsV3ListBankAccounts.js";
import { paymentsV3ListConnectorConfigs } from "../funcs/paymentsV3ListConnectorConfigs.js";
import { paymentsV3ListConnectors } from "../funcs/paymentsV3ListConnectors.js";
import { paymentsV3ListConnectorScheduleInstances } from "../funcs/paymentsV3ListConnectorScheduleInstances.js";
import { paymentsV3ListConnectorSchedules } from "../funcs/paymentsV3ListConnectorSchedules.js";
import { paymentsV3ListPaymentInitiationAdjustments } from "../funcs/paymentsV3ListPaymentInitiationAdjustments.js";
import { paymentsV3ListPaymentInitiationRelatedPayments } from "../funcs/paymentsV3ListPaymentInitiationRelatedPayments.js";
import { paymentsV3ListPaymentInitiations } from "../funcs/paymentsV3ListPaymentInitiations.js";
import { paymentsV3ListPayments } from "../funcs/paymentsV3ListPayments.js";
import { paymentsV3ListPaymentServiceUsers } from "../funcs/paymentsV3ListPaymentServiceUsers.js";
import { paymentsV3ListPools } from "../funcs/paymentsV3ListPools.js";
import { paymentsV3RejectPaymentInitiation } from "../funcs/paymentsV3RejectPaymentInitiation.js";
import { paymentsV3RemoveAccountFromPool } from "../funcs/paymentsV3RemoveAccountFromPool.js";
import { paymentsV3ResetConnector } from "../funcs/paymentsV3ResetConnector.js";
import { paymentsV3RetryPaymentInitiation } from "../funcs/paymentsV3RetryPaymentInitiation.js";
import { paymentsV3ReversePaymentInitiation } from "../funcs/paymentsV3ReversePaymentInitiation.js";
import { paymentsV3UninstallConnector } from "../funcs/paymentsV3UninstallConnector.js";
import { paymentsV3UpdateBankAccountMetadata } from "../funcs/paymentsV3UpdateBankAccountMetadata.js";
import { paymentsV3UpdatePaymentMetadata } from "../funcs/paymentsV3UpdatePaymentMetadata.js";
import { paymentsV3V3UpdateConnectorConfig } from "../funcs/paymentsV3V3UpdateConnectorConfig.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class V3 extends ClientSDK {
  /**
   * Add an account to a pool
   */
  async addAccountToPool(
    request: operations.V3AddAccountToPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.V3AddAccountToPoolResponse> {
    return unwrapAsync(paymentsV3AddAccountToPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a bank account to a payment service user
   */
  async addBankAccountToPaymentServiceUser(
    request: operations.V3AddBankAccountToPaymentServiceUserRequest,
    options?: RequestOptions,
  ): Promise<operations.V3AddBankAccountToPaymentServiceUserResponse> {
    return unwrapAsync(paymentsV3AddBankAccountToPaymentServiceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Approve a payment initiation
   */
  async approvePaymentInitiation(
    request: operations.V3ApprovePaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ApprovePaymentInitiationResponse> {
    return unwrapAsync(paymentsV3ApprovePaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a formance account object. This object will not be forwarded to the connector. It is only used for internal purposes.
   */
  async createAccount(
    request?: shared.V3CreateAccountRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CreateAccountResponse> {
    return unwrapAsync(paymentsV3CreateAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a formance bank account object. This object will not be forwarded to the connector until you called the forwardBankAccount method.
   */
  async createBankAccount(
    request?: shared.V3CreateBankAccountRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CreateBankAccountResponse> {
    return unwrapAsync(paymentsV3CreateBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a formance payment object. This object will not be forwarded to the connector. It is only used for internal purposes.
   */
  async createPayment(
    request?: shared.V3CreatePaymentRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CreatePaymentResponse> {
    return unwrapAsync(paymentsV3CreatePayment(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a formance payment service user object
   */
  async createPaymentServiceUser(
    request?: shared.V3CreatePaymentServiceUserRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CreatePaymentServiceUserResponse> {
    return unwrapAsync(paymentsV3CreatePaymentServiceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a formance pool object
   */
  async createPool(
    request?: shared.V3CreatePoolRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CreatePoolResponse> {
    return unwrapAsync(paymentsV3CreatePool(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a payment initiation by ID
   */
  async deletePaymentInitiation(
    request: operations.V3DeletePaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3DeletePaymentInitiationResponse> {
    return unwrapAsync(paymentsV3DeletePaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a pool by ID
   */
  async deletePool(
    request: operations.V3DeletePoolRequest,
    options?: RequestOptions,
  ): Promise<operations.V3DeletePoolResponse> {
    return unwrapAsync(paymentsV3DeletePool(
      this,
      request,
      options,
    ));
  }

  /**
   * Forward a Bank Account to a PSP for creation
   */
  async forwardBankAccount(
    request: operations.V3ForwardBankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ForwardBankAccountResponse> {
    return unwrapAsync(paymentsV3ForwardBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Forward a payment service user's bank account to a connector
   */
  async forwardPaymentServiceUserBankAccount(
    request: operations.V3ForwardPaymentServiceUserBankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ForwardPaymentServiceUserBankAccountResponse> {
    return unwrapAsync(paymentsV3ForwardPaymentServiceUserBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an account by ID
   */
  async getAccount(
    request: operations.V3GetAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetAccountResponse> {
    return unwrapAsync(paymentsV3GetAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get account balances
   */
  async getAccountBalances(
    request: operations.V3GetAccountBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetAccountBalancesResponse> {
    return unwrapAsync(paymentsV3GetAccountBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a Bank Account by ID
   */
  async getBankAccount(
    request: operations.V3GetBankAccountRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetBankAccountResponse> {
    return unwrapAsync(paymentsV3GetBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a connector configuration by ID
   */
  async getConnectorConfig(
    request: operations.V3GetConnectorConfigRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetConnectorConfigResponse> {
    return unwrapAsync(paymentsV3GetConnectorConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a connector schedule by ID
   */
  async getConnectorSchedule(
    request: operations.V3GetConnectorScheduleRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetConnectorScheduleResponse> {
    return unwrapAsync(paymentsV3GetConnectorSchedule(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a payment by ID
   */
  async getPayment(
    request: operations.V3GetPaymentRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPaymentResponse> {
    return unwrapAsync(paymentsV3GetPayment(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a payment initiation by ID
   */
  async getPaymentInitiation(
    request: operations.V3GetPaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPaymentInitiationResponse> {
    return unwrapAsync(paymentsV3GetPaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a payment service user by ID
   */
  async getPaymentServiceUser(
    request: operations.V3GetPaymentServiceUserRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPaymentServiceUserResponse> {
    return unwrapAsync(paymentsV3GetPaymentServiceUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a pool by ID
   */
  async getPool(
    request: operations.V3GetPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPoolResponse> {
    return unwrapAsync(paymentsV3GetPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Get historical pool balances from a particular point in time
   */
  async getPoolBalances(
    request: operations.V3GetPoolBalancesRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPoolBalancesResponse> {
    return unwrapAsync(paymentsV3GetPoolBalances(
      this,
      request,
      options,
    ));
  }

  /**
   * Get latest pool balances
   */
  async getPoolBalancesLatest(
    request: operations.V3GetPoolBalancesLatestRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetPoolBalancesLatestResponse> {
    return unwrapAsync(paymentsV3GetPoolBalancesLatest(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a task and its result by ID
   */
  async getTask(
    request: operations.V3GetTaskRequest,
    options?: RequestOptions,
  ): Promise<operations.V3GetTaskResponse> {
    return unwrapAsync(paymentsV3GetTask(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate a payment
   */
  async initiatePayment(
    request: operations.V3InitiatePaymentRequest,
    options?: RequestOptions,
  ): Promise<operations.V3InitiatePaymentResponse> {
    return unwrapAsync(paymentsV3InitiatePayment(
      this,
      request,
      options,
    ));
  }

  /**
   * Install a connector
   */
  async installConnector(
    request: operations.V3InstallConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.V3InstallConnectorResponse> {
    return unwrapAsync(paymentsV3InstallConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * List all accounts
   */
  async listAccounts(
    request: operations.V3ListAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListAccountsResponse> {
    return unwrapAsync(paymentsV3ListAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * List all bank accounts
   */
  async listBankAccounts(
    request: operations.V3ListBankAccountsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListBankAccountsResponse> {
    return unwrapAsync(paymentsV3ListBankAccounts(
      this,
      request,
      options,
    ));
  }

  /**
   * List all connector configurations
   */
  async listConnectorConfigs(
    options?: RequestOptions,
  ): Promise<operations.V3ListConnectorConfigsResponse> {
    return unwrapAsync(paymentsV3ListConnectorConfigs(
      this,
      options,
    ));
  }

  /**
   * List all connector schedule instances
   */
  async listConnectorScheduleInstances(
    request: operations.V3ListConnectorScheduleInstancesRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListConnectorScheduleInstancesResponse> {
    return unwrapAsync(paymentsV3ListConnectorScheduleInstances(
      this,
      request,
      options,
    ));
  }

  /**
   * List all connector schedules
   */
  async listConnectorSchedules(
    request: operations.V3ListConnectorSchedulesRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListConnectorSchedulesResponse> {
    return unwrapAsync(paymentsV3ListConnectorSchedules(
      this,
      request,
      options,
    ));
  }

  /**
   * List all connectors
   */
  async listConnectors(
    request: operations.V3ListConnectorsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListConnectorsResponse> {
    return unwrapAsync(paymentsV3ListConnectors(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payment initiation adjustments
   */
  async listPaymentInitiationAdjustments(
    request: operations.V3ListPaymentInitiationAdjustmentsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPaymentInitiationAdjustmentsResponse> {
    return unwrapAsync(paymentsV3ListPaymentInitiationAdjustments(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payments related to a payment initiation
   */
  async listPaymentInitiationRelatedPayments(
    request: operations.V3ListPaymentInitiationRelatedPaymentsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPaymentInitiationRelatedPaymentsResponse> {
    return unwrapAsync(paymentsV3ListPaymentInitiationRelatedPayments(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payment initiations
   */
  async listPaymentInitiations(
    request: operations.V3ListPaymentInitiationsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPaymentInitiationsResponse> {
    return unwrapAsync(paymentsV3ListPaymentInitiations(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payment service users
   */
  async listPaymentServiceUsers(
    request: operations.V3ListPaymentServiceUsersRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPaymentServiceUsersResponse> {
    return unwrapAsync(paymentsV3ListPaymentServiceUsers(
      this,
      request,
      options,
    ));
  }

  /**
   * List all payments
   */
  async listPayments(
    request: operations.V3ListPaymentsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPaymentsResponse> {
    return unwrapAsync(paymentsV3ListPayments(
      this,
      request,
      options,
    ));
  }

  /**
   * List all pools
   */
  async listPools(
    request: operations.V3ListPoolsRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ListPoolsResponse> {
    return unwrapAsync(paymentsV3ListPools(
      this,
      request,
      options,
    ));
  }

  /**
   * Reject a payment initiation
   */
  async rejectPaymentInitiation(
    request: operations.V3RejectPaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3RejectPaymentInitiationResponse> {
    return unwrapAsync(paymentsV3RejectPaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an account from a pool
   */
  async removeAccountFromPool(
    request: operations.V3RemoveAccountFromPoolRequest,
    options?: RequestOptions,
  ): Promise<operations.V3RemoveAccountFromPoolResponse> {
    return unwrapAsync(paymentsV3RemoveAccountFromPool(
      this,
      request,
      options,
    ));
  }

  /**
   * Reset a connector. Be aware that this will delete all data and stop all existing tasks like payment initiations and bank account creations.
   */
  async resetConnector(
    request: operations.V3ResetConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ResetConnectorResponse> {
    return unwrapAsync(paymentsV3ResetConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * Retry a payment initiation
   */
  async retryPaymentInitiation(
    request: operations.V3RetryPaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3RetryPaymentInitiationResponse> {
    return unwrapAsync(paymentsV3RetryPaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Reverse a payment initiation
   */
  async reversePaymentInitiation(
    request: operations.V3ReversePaymentInitiationRequest,
    options?: RequestOptions,
  ): Promise<operations.V3ReversePaymentInitiationResponse> {
    return unwrapAsync(paymentsV3ReversePaymentInitiation(
      this,
      request,
      options,
    ));
  }

  /**
   * Uninstall a connector
   */
  async uninstallConnector(
    request: operations.V3UninstallConnectorRequest,
    options?: RequestOptions,
  ): Promise<operations.V3UninstallConnectorResponse> {
    return unwrapAsync(paymentsV3UninstallConnector(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a bank account's metadata
   */
  async updateBankAccountMetadata(
    request: operations.V3UpdateBankAccountMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V3UpdateBankAccountMetadataResponse> {
    return unwrapAsync(paymentsV3UpdateBankAccountMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a payment's metadata
   */
  async updatePaymentMetadata(
    request: operations.V3UpdatePaymentMetadataRequest,
    options?: RequestOptions,
  ): Promise<operations.V3UpdatePaymentMetadataResponse> {
    return unwrapAsync(paymentsV3UpdatePaymentMetadata(
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
  async v3UpdateConnectorConfig(
    request: operations.V3UpdateConnectorConfigRequest,
    options?: RequestOptions,
  ): Promise<operations.V3UpdateConnectorConfigResponse> {
    return unwrapAsync(paymentsV3V3UpdateConnectorConfig(
      this,
      request,
      options,
    ));
  }
}

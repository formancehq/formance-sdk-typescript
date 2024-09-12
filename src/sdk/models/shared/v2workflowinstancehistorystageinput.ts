/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  V2ActivityAddAccountMetadata,
  V2ActivityAddAccountMetadata$inboundSchema,
  V2ActivityAddAccountMetadata$Outbound,
  V2ActivityAddAccountMetadata$outboundSchema,
} from "./v2activityaddaccountmetadata.js";
import {
  V2ActivityConfirmHold,
  V2ActivityConfirmHold$inboundSchema,
  V2ActivityConfirmHold$Outbound,
  V2ActivityConfirmHold$outboundSchema,
} from "./v2activityconfirmhold.js";
import {
  V2ActivityCreateTransaction,
  V2ActivityCreateTransaction$inboundSchema,
  V2ActivityCreateTransaction$Outbound,
  V2ActivityCreateTransaction$outboundSchema,
} from "./v2activitycreatetransaction.js";
import {
  V2ActivityCreditWallet,
  V2ActivityCreditWallet$inboundSchema,
  V2ActivityCreditWallet$Outbound,
  V2ActivityCreditWallet$outboundSchema,
} from "./v2activitycreditwallet.js";
import {
  V2ActivityDebitWallet,
  V2ActivityDebitWallet$inboundSchema,
  V2ActivityDebitWallet$Outbound,
  V2ActivityDebitWallet$outboundSchema,
} from "./v2activitydebitwallet.js";
import {
  V2ActivityGetAccount,
  V2ActivityGetAccount$inboundSchema,
  V2ActivityGetAccount$Outbound,
  V2ActivityGetAccount$outboundSchema,
} from "./v2activitygetaccount.js";
import {
  V2ActivityGetPayment,
  V2ActivityGetPayment$inboundSchema,
  V2ActivityGetPayment$Outbound,
  V2ActivityGetPayment$outboundSchema,
} from "./v2activitygetpayment.js";
import {
  V2ActivityGetWallet,
  V2ActivityGetWallet$inboundSchema,
  V2ActivityGetWallet$Outbound,
  V2ActivityGetWallet$outboundSchema,
} from "./v2activitygetwallet.js";
import {
  V2ActivityListWallets,
  V2ActivityListWallets$inboundSchema,
  V2ActivityListWallets$Outbound,
  V2ActivityListWallets$outboundSchema,
} from "./v2activitylistwallets.js";
import {
  V2ActivityStripeTransfer,
  V2ActivityStripeTransfer$inboundSchema,
  V2ActivityStripeTransfer$Outbound,
  V2ActivityStripeTransfer$outboundSchema,
} from "./v2activitystripetransfer.js";
import {
  V2ActivityVoidHold,
  V2ActivityVoidHold$inboundSchema,
  V2ActivityVoidHold$Outbound,
  V2ActivityVoidHold$outboundSchema,
} from "./v2activityvoidhold.js";

export type V2WorkflowInstanceHistoryStageInput = {
  addAccountMetadata?: V2ActivityAddAccountMetadata | undefined;
  confirmHold?: V2ActivityConfirmHold | undefined;
  createTransaction?: V2ActivityCreateTransaction | undefined;
  creditWallet?: V2ActivityCreditWallet | undefined;
  debitWallet?: V2ActivityDebitWallet | undefined;
  getAccount?: V2ActivityGetAccount | undefined;
  getPayment?: V2ActivityGetPayment | undefined;
  getWallet?: V2ActivityGetWallet | undefined;
  listWallets?: V2ActivityListWallets | undefined;
  stripeTransfer?: V2ActivityStripeTransfer | undefined;
  voidHold?: V2ActivityVoidHold | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistoryStageInput$inboundSchema: z.ZodType<
  V2WorkflowInstanceHistoryStageInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  AddAccountMetadata: V2ActivityAddAccountMetadata$inboundSchema.optional(),
  ConfirmHold: V2ActivityConfirmHold$inboundSchema.optional(),
  CreateTransaction: V2ActivityCreateTransaction$inboundSchema.optional(),
  CreditWallet: V2ActivityCreditWallet$inboundSchema.optional(),
  DebitWallet: V2ActivityDebitWallet$inboundSchema.optional(),
  GetAccount: V2ActivityGetAccount$inboundSchema.optional(),
  GetPayment: V2ActivityGetPayment$inboundSchema.optional(),
  GetWallet: V2ActivityGetWallet$inboundSchema.optional(),
  ListWallets: V2ActivityListWallets$inboundSchema.optional(),
  StripeTransfer: V2ActivityStripeTransfer$inboundSchema.optional(),
  VoidHold: V2ActivityVoidHold$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "AddAccountMetadata": "addAccountMetadata",
    "ConfirmHold": "confirmHold",
    "CreateTransaction": "createTransaction",
    "CreditWallet": "creditWallet",
    "DebitWallet": "debitWallet",
    "GetAccount": "getAccount",
    "GetPayment": "getPayment",
    "GetWallet": "getWallet",
    "ListWallets": "listWallets",
    "StripeTransfer": "stripeTransfer",
    "VoidHold": "voidHold",
  });
});

/** @internal */
export type V2WorkflowInstanceHistoryStageInput$Outbound = {
  AddAccountMetadata?: V2ActivityAddAccountMetadata$Outbound | undefined;
  ConfirmHold?: V2ActivityConfirmHold$Outbound | undefined;
  CreateTransaction?: V2ActivityCreateTransaction$Outbound | undefined;
  CreditWallet?: V2ActivityCreditWallet$Outbound | undefined;
  DebitWallet?: V2ActivityDebitWallet$Outbound | undefined;
  GetAccount?: V2ActivityGetAccount$Outbound | undefined;
  GetPayment?: V2ActivityGetPayment$Outbound | undefined;
  GetWallet?: V2ActivityGetWallet$Outbound | undefined;
  ListWallets?: V2ActivityListWallets$Outbound | undefined;
  StripeTransfer?: V2ActivityStripeTransfer$Outbound | undefined;
  VoidHold?: V2ActivityVoidHold$Outbound | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistoryStageInput$outboundSchema: z.ZodType<
  V2WorkflowInstanceHistoryStageInput$Outbound,
  z.ZodTypeDef,
  V2WorkflowInstanceHistoryStageInput
> = z.object({
  addAccountMetadata: V2ActivityAddAccountMetadata$outboundSchema.optional(),
  confirmHold: V2ActivityConfirmHold$outboundSchema.optional(),
  createTransaction: V2ActivityCreateTransaction$outboundSchema.optional(),
  creditWallet: V2ActivityCreditWallet$outboundSchema.optional(),
  debitWallet: V2ActivityDebitWallet$outboundSchema.optional(),
  getAccount: V2ActivityGetAccount$outboundSchema.optional(),
  getPayment: V2ActivityGetPayment$outboundSchema.optional(),
  getWallet: V2ActivityGetWallet$outboundSchema.optional(),
  listWallets: V2ActivityListWallets$outboundSchema.optional(),
  stripeTransfer: V2ActivityStripeTransfer$outboundSchema.optional(),
  voidHold: V2ActivityVoidHold$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    addAccountMetadata: "AddAccountMetadata",
    confirmHold: "ConfirmHold",
    createTransaction: "CreateTransaction",
    creditWallet: "CreditWallet",
    debitWallet: "DebitWallet",
    getAccount: "GetAccount",
    getPayment: "GetPayment",
    getWallet: "GetWallet",
    listWallets: "ListWallets",
    stripeTransfer: "StripeTransfer",
    voidHold: "VoidHold",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WorkflowInstanceHistoryStageInput$ {
  /** @deprecated use `V2WorkflowInstanceHistoryStageInput$inboundSchema` instead. */
  export const inboundSchema =
    V2WorkflowInstanceHistoryStageInput$inboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistoryStageInput$outboundSchema` instead. */
  export const outboundSchema =
    V2WorkflowInstanceHistoryStageInput$outboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistoryStageInput$Outbound` instead. */
  export type Outbound = V2WorkflowInstanceHistoryStageInput$Outbound;
}

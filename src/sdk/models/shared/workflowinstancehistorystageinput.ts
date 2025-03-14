/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ActivityAddAccountMetadata,
  ActivityAddAccountMetadata$inboundSchema,
  ActivityAddAccountMetadata$Outbound,
  ActivityAddAccountMetadata$outboundSchema,
} from "./activityaddaccountmetadata.js";
import {
  ActivityConfirmHold,
  ActivityConfirmHold$inboundSchema,
  ActivityConfirmHold$Outbound,
  ActivityConfirmHold$outboundSchema,
} from "./activityconfirmhold.js";
import {
  ActivityCreateTransaction,
  ActivityCreateTransaction$inboundSchema,
  ActivityCreateTransaction$Outbound,
  ActivityCreateTransaction$outboundSchema,
} from "./activitycreatetransaction.js";
import {
  ActivityCreditWallet,
  ActivityCreditWallet$inboundSchema,
  ActivityCreditWallet$Outbound,
  ActivityCreditWallet$outboundSchema,
} from "./activitycreditwallet.js";
import {
  ActivityDebitWallet,
  ActivityDebitWallet$inboundSchema,
  ActivityDebitWallet$Outbound,
  ActivityDebitWallet$outboundSchema,
} from "./activitydebitwallet.js";
import {
  ActivityGetAccount,
  ActivityGetAccount$inboundSchema,
  ActivityGetAccount$Outbound,
  ActivityGetAccount$outboundSchema,
} from "./activitygetaccount.js";
import {
  ActivityGetPayment,
  ActivityGetPayment$inboundSchema,
  ActivityGetPayment$Outbound,
  ActivityGetPayment$outboundSchema,
} from "./activitygetpayment.js";
import {
  ActivityGetWallet,
  ActivityGetWallet$inboundSchema,
  ActivityGetWallet$Outbound,
  ActivityGetWallet$outboundSchema,
} from "./activitygetwallet.js";
import {
  ActivityListWallets,
  ActivityListWallets$inboundSchema,
  ActivityListWallets$Outbound,
  ActivityListWallets$outboundSchema,
} from "./activitylistwallets.js";
import {
  ActivityRevertTransaction,
  ActivityRevertTransaction$inboundSchema,
  ActivityRevertTransaction$Outbound,
  ActivityRevertTransaction$outboundSchema,
} from "./activityreverttransaction.js";
import {
  ActivityStripeTransfer,
  ActivityStripeTransfer$inboundSchema,
  ActivityStripeTransfer$Outbound,
  ActivityStripeTransfer$outboundSchema,
} from "./activitystripetransfer.js";
import {
  ActivityVoidHold,
  ActivityVoidHold$inboundSchema,
  ActivityVoidHold$Outbound,
  ActivityVoidHold$outboundSchema,
} from "./activityvoidhold.js";

export type WorkflowInstanceHistoryStageInput = {
  addAccountMetadata?: ActivityAddAccountMetadata | undefined;
  confirmHold?: ActivityConfirmHold | undefined;
  createTransaction?: ActivityCreateTransaction | undefined;
  creditWallet?: ActivityCreditWallet | undefined;
  debitWallet?: ActivityDebitWallet | undefined;
  getAccount?: ActivityGetAccount | undefined;
  getPayment?: ActivityGetPayment | undefined;
  getWallet?: ActivityGetWallet | undefined;
  listWallets?: ActivityListWallets | undefined;
  revertTransaction?: ActivityRevertTransaction | undefined;
  stripeTransfer?: ActivityStripeTransfer | undefined;
  voidHold?: ActivityVoidHold | undefined;
};

/** @internal */
export const WorkflowInstanceHistoryStageInput$inboundSchema: z.ZodType<
  WorkflowInstanceHistoryStageInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  AddAccountMetadata: ActivityAddAccountMetadata$inboundSchema.optional(),
  ConfirmHold: ActivityConfirmHold$inboundSchema.optional(),
  CreateTransaction: ActivityCreateTransaction$inboundSchema.optional(),
  CreditWallet: ActivityCreditWallet$inboundSchema.optional(),
  DebitWallet: ActivityDebitWallet$inboundSchema.optional(),
  GetAccount: ActivityGetAccount$inboundSchema.optional(),
  GetPayment: ActivityGetPayment$inboundSchema.optional(),
  GetWallet: ActivityGetWallet$inboundSchema.optional(),
  ListWallets: ActivityListWallets$inboundSchema.optional(),
  RevertTransaction: ActivityRevertTransaction$inboundSchema.optional(),
  StripeTransfer: ActivityStripeTransfer$inboundSchema.optional(),
  VoidHold: ActivityVoidHold$inboundSchema.optional(),
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
    "RevertTransaction": "revertTransaction",
    "StripeTransfer": "stripeTransfer",
    "VoidHold": "voidHold",
  });
});

/** @internal */
export type WorkflowInstanceHistoryStageInput$Outbound = {
  AddAccountMetadata?: ActivityAddAccountMetadata$Outbound | undefined;
  ConfirmHold?: ActivityConfirmHold$Outbound | undefined;
  CreateTransaction?: ActivityCreateTransaction$Outbound | undefined;
  CreditWallet?: ActivityCreditWallet$Outbound | undefined;
  DebitWallet?: ActivityDebitWallet$Outbound | undefined;
  GetAccount?: ActivityGetAccount$Outbound | undefined;
  GetPayment?: ActivityGetPayment$Outbound | undefined;
  GetWallet?: ActivityGetWallet$Outbound | undefined;
  ListWallets?: ActivityListWallets$Outbound | undefined;
  RevertTransaction?: ActivityRevertTransaction$Outbound | undefined;
  StripeTransfer?: ActivityStripeTransfer$Outbound | undefined;
  VoidHold?: ActivityVoidHold$Outbound | undefined;
};

/** @internal */
export const WorkflowInstanceHistoryStageInput$outboundSchema: z.ZodType<
  WorkflowInstanceHistoryStageInput$Outbound,
  z.ZodTypeDef,
  WorkflowInstanceHistoryStageInput
> = z.object({
  addAccountMetadata: ActivityAddAccountMetadata$outboundSchema.optional(),
  confirmHold: ActivityConfirmHold$outboundSchema.optional(),
  createTransaction: ActivityCreateTransaction$outboundSchema.optional(),
  creditWallet: ActivityCreditWallet$outboundSchema.optional(),
  debitWallet: ActivityDebitWallet$outboundSchema.optional(),
  getAccount: ActivityGetAccount$outboundSchema.optional(),
  getPayment: ActivityGetPayment$outboundSchema.optional(),
  getWallet: ActivityGetWallet$outboundSchema.optional(),
  listWallets: ActivityListWallets$outboundSchema.optional(),
  revertTransaction: ActivityRevertTransaction$outboundSchema.optional(),
  stripeTransfer: ActivityStripeTransfer$outboundSchema.optional(),
  voidHold: ActivityVoidHold$outboundSchema.optional(),
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
    revertTransaction: "RevertTransaction",
    stripeTransfer: "StripeTransfer",
    voidHold: "VoidHold",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowInstanceHistoryStageInput$ {
  /** @deprecated use `WorkflowInstanceHistoryStageInput$inboundSchema` instead. */
  export const inboundSchema = WorkflowInstanceHistoryStageInput$inboundSchema;
  /** @deprecated use `WorkflowInstanceHistoryStageInput$outboundSchema` instead. */
  export const outboundSchema =
    WorkflowInstanceHistoryStageInput$outboundSchema;
  /** @deprecated use `WorkflowInstanceHistoryStageInput$Outbound` instead. */
  export type Outbound = WorkflowInstanceHistoryStageInput$Outbound;
}

export function workflowInstanceHistoryStageInputToJSON(
  workflowInstanceHistoryStageInput: WorkflowInstanceHistoryStageInput,
): string {
  return JSON.stringify(
    WorkflowInstanceHistoryStageInput$outboundSchema.parse(
      workflowInstanceHistoryStageInput,
    ),
  );
}

export function workflowInstanceHistoryStageInputFromJSON(
  jsonString: string,
): SafeParseResult<WorkflowInstanceHistoryStageInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkflowInstanceHistoryStageInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkflowInstanceHistoryStageInput' from JSON`,
  );
}

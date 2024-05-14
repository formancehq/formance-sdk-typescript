/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ActivityCreateTransactionOutput,
    ActivityCreateTransactionOutput$,
} from "./activitycreatetransactionoutput";
import { ActivityDebitWalletOutput, ActivityDebitWalletOutput$ } from "./activitydebitwalletoutput";
import { ActivityGetAccountOutput, ActivityGetAccountOutput$ } from "./activitygetaccountoutput";
import { ActivityGetPaymentOutput, ActivityGetPaymentOutput$ } from "./activitygetpaymentoutput";
import { ActivityGetWalletOutput, ActivityGetWalletOutput$ } from "./activitygetwalletoutput";
import {
    ActivityRevertTransactionOutput,
    ActivityRevertTransactionOutput$,
} from "./activityreverttransactionoutput";
import {
    OrchestrationListWalletsResponse,
    OrchestrationListWalletsResponse$,
} from "./orchestrationlistwalletsresponse";
import * as z from "zod";

export type WorkflowInstanceHistoryStageOutput = {
    createTransaction?: ActivityCreateTransactionOutput | undefined;
    debitWallet?: ActivityDebitWalletOutput | undefined;
    getAccount?: ActivityGetAccountOutput | undefined;
    getPayment?: ActivityGetPaymentOutput | undefined;
    getWallet?: ActivityGetWalletOutput | undefined;
    listWallets?: OrchestrationListWalletsResponse | undefined;
    revertTransaction?: ActivityRevertTransactionOutput | undefined;
};

/** @internal */
export namespace WorkflowInstanceHistoryStageOutput$ {
    export const inboundSchema: z.ZodType<
        WorkflowInstanceHistoryStageOutput,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            CreateTransaction: ActivityCreateTransactionOutput$.inboundSchema.optional(),
            DebitWallet: ActivityDebitWalletOutput$.inboundSchema.optional(),
            GetAccount: ActivityGetAccountOutput$.inboundSchema.optional(),
            GetPayment: ActivityGetPaymentOutput$.inboundSchema.optional(),
            GetWallet: ActivityGetWalletOutput$.inboundSchema.optional(),
            ListWallets: OrchestrationListWalletsResponse$.inboundSchema.optional(),
            RevertTransaction: ActivityRevertTransactionOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.CreateTransaction === undefined
                    ? null
                    : { createTransaction: v.CreateTransaction }),
                ...(v.DebitWallet === undefined ? null : { debitWallet: v.DebitWallet }),
                ...(v.GetAccount === undefined ? null : { getAccount: v.GetAccount }),
                ...(v.GetPayment === undefined ? null : { getPayment: v.GetPayment }),
                ...(v.GetWallet === undefined ? null : { getWallet: v.GetWallet }),
                ...(v.ListWallets === undefined ? null : { listWallets: v.ListWallets }),
                ...(v.RevertTransaction === undefined
                    ? null
                    : { revertTransaction: v.RevertTransaction }),
            };
        });

    export type Outbound = {
        CreateTransaction?: ActivityCreateTransactionOutput$.Outbound | undefined;
        DebitWallet?: ActivityDebitWalletOutput$.Outbound | undefined;
        GetAccount?: ActivityGetAccountOutput$.Outbound | undefined;
        GetPayment?: ActivityGetPaymentOutput$.Outbound | undefined;
        GetWallet?: ActivityGetWalletOutput$.Outbound | undefined;
        ListWallets?: OrchestrationListWalletsResponse$.Outbound | undefined;
        RevertTransaction?: ActivityRevertTransactionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        WorkflowInstanceHistoryStageOutput
    > = z
        .object({
            createTransaction: ActivityCreateTransactionOutput$.outboundSchema.optional(),
            debitWallet: ActivityDebitWalletOutput$.outboundSchema.optional(),
            getAccount: ActivityGetAccountOutput$.outboundSchema.optional(),
            getPayment: ActivityGetPaymentOutput$.outboundSchema.optional(),
            getWallet: ActivityGetWalletOutput$.outboundSchema.optional(),
            listWallets: OrchestrationListWalletsResponse$.outboundSchema.optional(),
            revertTransaction: ActivityRevertTransactionOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.createTransaction === undefined
                    ? null
                    : { CreateTransaction: v.createTransaction }),
                ...(v.debitWallet === undefined ? null : { DebitWallet: v.debitWallet }),
                ...(v.getAccount === undefined ? null : { GetAccount: v.getAccount }),
                ...(v.getPayment === undefined ? null : { GetPayment: v.getPayment }),
                ...(v.getWallet === undefined ? null : { GetWallet: v.getWallet }),
                ...(v.listWallets === undefined ? null : { ListWallets: v.listWallets }),
                ...(v.revertTransaction === undefined
                    ? null
                    : { RevertTransaction: v.revertTransaction }),
            };
        });
}

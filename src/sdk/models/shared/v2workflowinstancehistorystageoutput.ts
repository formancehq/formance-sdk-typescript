/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import {
    V2ActivityCreateTransactionOutput,
    V2ActivityCreateTransactionOutput$,
} from "./v2activitycreatetransactionoutput";
import {
    V2ActivityDebitWalletOutput,
    V2ActivityDebitWalletOutput$,
} from "./v2activitydebitwalletoutput";
import {
    V2ActivityGetAccountOutput,
    V2ActivityGetAccountOutput$,
} from "./v2activitygetaccountoutput";
import {
    V2ActivityGetPaymentOutput,
    V2ActivityGetPaymentOutput$,
} from "./v2activitygetpaymentoutput";
import { V2ActivityGetWalletOutput, V2ActivityGetWalletOutput$ } from "./v2activitygetwalletoutput";
import { V2ListWalletsResponse, V2ListWalletsResponse$ } from "./v2listwalletsresponse";
import * as z from "zod";

export type V2WorkflowInstanceHistoryStageOutput = {
    createTransaction?: V2ActivityCreateTransactionOutput | undefined;
    debitWallet?: V2ActivityDebitWalletOutput | undefined;
    getAccount?: V2ActivityGetAccountOutput | undefined;
    getPayment?: V2ActivityGetPaymentOutput | undefined;
    getWallet?: V2ActivityGetWalletOutput | undefined;
    listWallets?: V2ListWalletsResponse | undefined;
};

/** @internal */
export namespace V2WorkflowInstanceHistoryStageOutput$ {
    export const inboundSchema: z.ZodType<
        V2WorkflowInstanceHistoryStageOutput,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            CreateTransaction: V2ActivityCreateTransactionOutput$.inboundSchema.optional(),
            DebitWallet: V2ActivityDebitWalletOutput$.inboundSchema.optional(),
            GetAccount: V2ActivityGetAccountOutput$.inboundSchema.optional(),
            GetPayment: V2ActivityGetPaymentOutput$.inboundSchema.optional(),
            GetWallet: V2ActivityGetWalletOutput$.inboundSchema.optional(),
            ListWallets: V2ListWalletsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                CreateTransaction: "createTransaction",
                DebitWallet: "debitWallet",
                GetAccount: "getAccount",
                GetPayment: "getPayment",
                GetWallet: "getWallet",
                ListWallets: "listWallets",
            });
        });

    export type Outbound = {
        CreateTransaction?: V2ActivityCreateTransactionOutput$.Outbound | undefined;
        DebitWallet?: V2ActivityDebitWalletOutput$.Outbound | undefined;
        GetAccount?: V2ActivityGetAccountOutput$.Outbound | undefined;
        GetPayment?: V2ActivityGetPaymentOutput$.Outbound | undefined;
        GetWallet?: V2ActivityGetWalletOutput$.Outbound | undefined;
        ListWallets?: V2ListWalletsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2WorkflowInstanceHistoryStageOutput
    > = z
        .object({
            createTransaction: V2ActivityCreateTransactionOutput$.outboundSchema.optional(),
            debitWallet: V2ActivityDebitWalletOutput$.outboundSchema.optional(),
            getAccount: V2ActivityGetAccountOutput$.outboundSchema.optional(),
            getPayment: V2ActivityGetPaymentOutput$.outboundSchema.optional(),
            getWallet: V2ActivityGetWalletOutput$.outboundSchema.optional(),
            listWallets: V2ListWalletsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                createTransaction: "CreateTransaction",
                debitWallet: "DebitWallet",
                getAccount: "GetAccount",
                getPayment: "GetPayment",
                getWallet: "GetWallet",
                listWallets: "ListWallets",
            });
        });
}

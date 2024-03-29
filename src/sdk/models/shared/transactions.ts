/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransactionData, TransactionData$ } from "./transactiondata";
import * as z from "zod";

export type Transactions = {
    transactions: Array<TransactionData>;
};

/** @internal */
export namespace Transactions$ {
    export type Inbound = {
        transactions: Array<TransactionData$.Inbound>;
    };

    export const inboundSchema: z.ZodType<Transactions, z.ZodTypeDef, Inbound> = z
        .object({
            transactions: z.array(TransactionData$.inboundSchema),
        })
        .transform((v) => {
            return {
                transactions: v.transactions,
            };
        });

    export type Outbound = {
        transactions: Array<TransactionData$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Transactions> = z
        .object({
            transactions: z.array(TransactionData$.outboundSchema),
        })
        .transform((v) => {
            return {
                transactions: v.transactions,
            };
        });
}

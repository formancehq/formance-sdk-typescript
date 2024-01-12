/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Monetary, V2Monetary$ } from "./v2monetary";
import { z } from "zod";

export type V2CreditWalletRequest = {
    amount: V2Monetary;
    /**
     * The balance to credit
     */
    balance?: string | undefined;
    /**
     * Metadata associated with the wallet.
     */
    metadata: Record<string, string>;
    reference?: string | undefined;
    sources: Array<any>;
};

/** @internal */
export namespace V2CreditWalletRequest$ {
    export type Inbound = {
        amount: V2Monetary$.Inbound;
        balance?: string | undefined;
        metadata: Record<string, string>;
        reference?: string | undefined;
        sources: Array<any>;
    };

    export const inboundSchema: z.ZodType<V2CreditWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            amount: V2Monetary$.inboundSchema,
            balance: z.string().optional(),
            metadata: z.record(z.string()),
            reference: z.string().optional(),
            sources: z.array(z.any()),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balance === undefined ? null : { balance: v.balance }),
                metadata: v.metadata,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                sources: v.sources,
            };
        });

    export type Outbound = {
        amount: V2Monetary$.Outbound;
        balance?: string | undefined;
        metadata: Record<string, string>;
        reference?: string | undefined;
        sources: Array<any>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreditWalletRequest> = z
        .object({
            amount: V2Monetary$.outboundSchema,
            balance: z.string().optional(),
            metadata: z.record(z.string()),
            reference: z.string().optional(),
            sources: z.array(z.any()),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balance === undefined ? null : { balance: v.balance }),
                metadata: v.metadata,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                sources: v.sources,
            };
        });
}

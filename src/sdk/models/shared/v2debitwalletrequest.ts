/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Monetary, V2Monetary$ } from "./v2monetary";
import { z } from "zod";

export type V2DebitWalletRequest = {
    amount: V2Monetary;
    balances?: Array<string> | undefined;
    description?: string | undefined;
    destination?: any | undefined;
    /**
     * Metadata associated with the wallet.
     */
    metadata: Record<string, string>;
    /**
     * Set to true to create a pending hold. If false, the wallet will be debited immediately.
     */
    pending?: boolean | undefined;
};

/** @internal */
export namespace V2DebitWalletRequest$ {
    export type Inbound = {
        amount: V2Monetary$.Inbound;
        balances?: Array<string> | undefined;
        description?: string | undefined;
        destination?: any | undefined;
        metadata: Record<string, string>;
        pending?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<V2DebitWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            amount: V2Monetary$.inboundSchema,
            balances: z.array(z.string()).optional(),
            description: z.string().optional(),
            destination: z.any().optional(),
            metadata: z.record(z.string()),
            pending: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balances === undefined ? null : { balances: v.balances }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                metadata: v.metadata,
                ...(v.pending === undefined ? null : { pending: v.pending }),
            };
        });

    export type Outbound = {
        amount: V2Monetary$.Outbound;
        balances?: Array<string> | undefined;
        description?: string | undefined;
        destination?: any | undefined;
        metadata: Record<string, string>;
        pending?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DebitWalletRequest> = z
        .object({
            amount: V2Monetary$.outboundSchema,
            balances: z.array(z.string()).optional(),
            description: z.string().optional(),
            destination: z.any().optional(),
            metadata: z.record(z.string()),
            pending: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balances === undefined ? null : { balances: v.balances }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                metadata: v.metadata,
                ...(v.pending === undefined ? null : { pending: v.pending }),
            };
        });
}
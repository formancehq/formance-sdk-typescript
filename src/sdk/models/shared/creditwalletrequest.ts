/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Monetary, Monetary$ } from "./monetary";
import { Subject, Subject$ } from "./subject";
import * as z from "zod";

export type CreditWalletRequest = {
    amount: Monetary;
    /**
     * The balance to credit
     */
    balance?: string | undefined;
    /**
     * Metadata associated with the wallet.
     */
    metadata: { [k: string]: string };
    reference?: string | undefined;
    sources: Array<Subject>;
    timestamp?: Date | undefined;
};

/** @internal */
export namespace CreditWalletRequest$ {
    export const inboundSchema: z.ZodType<CreditWalletRequest, z.ZodTypeDef, unknown> = z
        .object({
            amount: Monetary$.inboundSchema,
            balance: z.string().optional(),
            metadata: z.record(z.string()),
            reference: z.string().optional(),
            sources: z.array(Subject$.inboundSchema),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balance === undefined ? null : { balance: v.balance }),
                metadata: v.metadata,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                sources: v.sources,
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        amount: Monetary$.Outbound;
        balance?: string | undefined;
        metadata: { [k: string]: string };
        reference?: string | undefined;
        sources: Array<Subject$.Outbound>;
        timestamp?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreditWalletRequest> = z
        .object({
            amount: Monetary$.outboundSchema,
            balance: z.string().optional(),
            metadata: z.record(z.string()),
            reference: z.string().optional(),
            sources: z.array(Subject$.outboundSchema),
            timestamp: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                amount: v.amount,
                ...(v.balance === undefined ? null : { balance: v.balance }),
                metadata: v.metadata,
                ...(v.reference === undefined ? null : { reference: v.reference }),
                sources: v.sources,
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}

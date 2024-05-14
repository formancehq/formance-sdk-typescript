/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Policy = {
    createdAt: Date;
    id: string;
    ledgerName: string;
    ledgerQuery: Record<string, any>;
    name: string;
    paymentsPoolID: string;
};

/** @internal */
export namespace Policy$ {
    export const inboundSchema: z.ZodType<Policy, z.ZodTypeDef, unknown> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.string(),
            ledgerName: z.string(),
            ledgerQuery: z.record(z.any()),
            name: z.string(),
            paymentsPoolID: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                id: v.id,
                ledgerName: v.ledgerName,
                ledgerQuery: v.ledgerQuery,
                name: v.name,
                paymentsPoolID: v.paymentsPoolID,
            };
        });

    export type Outbound = {
        createdAt: string;
        id: string;
        ledgerName: string;
        ledgerQuery: Record<string, any>;
        name: string;
        paymentsPoolID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Policy> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.string(),
            ledgerName: z.string(),
            ledgerQuery: z.record(z.any()),
            name: z.string(),
            paymentsPoolID: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                id: v.id,
                ledgerName: v.ledgerName,
                ledgerQuery: v.ledgerQuery,
                name: v.name,
                paymentsPoolID: v.paymentsPoolID,
            };
        });
}

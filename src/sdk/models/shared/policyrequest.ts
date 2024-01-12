/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PolicyRequest = {
    ledgerName: string;
    ledgerQuery: Record<string, any>;
    name: string;
    paymentsPoolID: string;
};

/** @internal */
export namespace PolicyRequest$ {
    export type Inbound = {
        ledgerName: string;
        ledgerQuery: Record<string, any>;
        name: string;
        paymentsPoolID: string;
    };

    export const inboundSchema: z.ZodType<PolicyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ledgerName: z.string(),
            ledgerQuery: z.record(z.any()),
            name: z.string(),
            paymentsPoolID: z.string(),
        })
        .transform((v) => {
            return {
                ledgerName: v.ledgerName,
                ledgerQuery: v.ledgerQuery,
                name: v.name,
                paymentsPoolID: v.paymentsPoolID,
            };
        });

    export type Outbound = {
        ledgerName: string;
        ledgerQuery: Record<string, any>;
        name: string;
        paymentsPoolID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PolicyRequest> = z
        .object({
            ledgerName: z.string(),
            ledgerQuery: z.record(z.any()),
            name: z.string(),
            paymentsPoolID: z.string(),
        })
        .transform((v) => {
            return {
                ledgerName: v.ledgerName,
                ledgerQuery: v.ledgerQuery,
                name: v.name,
                paymentsPoolID: v.paymentsPoolID,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type BankAccountRelatedAccounts = {
    accountID: string;
    connectorID: string;
    createdAt: Date;
    id: string;
    provider: string;
};

/** @internal */
export namespace BankAccountRelatedAccounts$ {
    export const inboundSchema: z.ZodType<BankAccountRelatedAccounts, z.ZodTypeDef, unknown> =
        z.object({
            accountID: z.string(),
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.string(),
            provider: z.string(),
        });

    export type Outbound = {
        accountID: string;
        connectorID: string;
        createdAt: string;
        id: string;
        provider: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankAccountRelatedAccounts> =
        z.object({
            accountID: z.string(),
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.string(),
            provider: z.string(),
        });
}

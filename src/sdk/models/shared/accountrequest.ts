/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountType, AccountType$ } from "./accounttype";
import * as z from "zod";

export type AccountRequest = {
    accountName?: string | undefined;
    connectorID: string;
    createdAt: Date;
    defaultAsset?: string | undefined;
    metadata?: Record<string, string> | null | undefined;
    reference: string;
    type: AccountType;
};

/** @internal */
export namespace AccountRequest$ {
    export const inboundSchema: z.ZodType<AccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            accountName: z.string().optional(),
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            defaultAsset: z.string().optional(),
            metadata: z.nullable(z.record(z.string())).optional(),
            reference: z.string(),
            type: AccountType$,
        })
        .transform((v) => {
            return {
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                ...(v.defaultAsset === undefined ? null : { defaultAsset: v.defaultAsset }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                reference: v.reference,
                type: v.type,
            };
        });

    export type Outbound = {
        accountName?: string | undefined;
        connectorID: string;
        createdAt: string;
        defaultAsset?: string | undefined;
        metadata?: Record<string, string> | null | undefined;
        reference: string;
        type: AccountType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountRequest> = z
        .object({
            accountName: z.string().optional(),
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            defaultAsset: z.string().optional(),
            metadata: z.nullable(z.record(z.string())).optional(),
            reference: z.string(),
            type: AccountType$,
        })
        .transform((v) => {
            return {
                ...(v.accountName === undefined ? null : { accountName: v.accountName }),
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                ...(v.defaultAsset === undefined ? null : { defaultAsset: v.defaultAsset }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                reference: v.reference,
                type: v.type,
            };
        });
}

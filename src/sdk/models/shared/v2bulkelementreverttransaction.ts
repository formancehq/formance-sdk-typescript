/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2BulkElementRevertTransactionData = {
    atEffectiveDate?: boolean | undefined;
    force?: boolean | undefined;
    id: bigint;
};

export type V2BulkElementRevertTransaction = {
    action: string;
    data?: V2BulkElementRevertTransactionData | undefined;
    ik?: string | undefined;
};

/** @internal */
export namespace V2BulkElementRevertTransactionData$ {
    export type Inbound = {
        atEffectiveDate?: boolean | undefined;
        force?: boolean | undefined;
        id: number;
    };

    export const inboundSchema: z.ZodType<
        V2BulkElementRevertTransactionData,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            atEffectiveDate: z.boolean().optional(),
            force: z.boolean().optional(),
            id: z.number().transform((v) => BigInt(v)),
        })
        .transform((v) => {
            return {
                ...(v.atEffectiveDate === undefined
                    ? null
                    : { atEffectiveDate: v.atEffectiveDate }),
                ...(v.force === undefined ? null : { force: v.force }),
                id: v.id,
            };
        });

    export type Outbound = {
        atEffectiveDate?: boolean | undefined;
        force?: boolean | undefined;
        id: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2BulkElementRevertTransactionData
    > = z
        .object({
            atEffectiveDate: z.boolean().optional(),
            force: z.boolean().optional(),
            id: z.bigint().transform((v) => Number(v)),
        })
        .transform((v) => {
            return {
                ...(v.atEffectiveDate === undefined
                    ? null
                    : { atEffectiveDate: v.atEffectiveDate }),
                ...(v.force === undefined ? null : { force: v.force }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace V2BulkElementRevertTransaction$ {
    export type Inbound = {
        action: string;
        data?: V2BulkElementRevertTransactionData$.Inbound | undefined;
        ik?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2BulkElementRevertTransaction, z.ZodTypeDef, Inbound> = z
        .object({
            action: z.string(),
            data: z.lazy(() => V2BulkElementRevertTransactionData$.inboundSchema).optional(),
            ik: z.string().optional(),
        })
        .transform((v) => {
            return {
                action: v.action,
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.ik === undefined ? null : { ik: v.ik }),
            };
        });

    export type Outbound = {
        action: string;
        data?: V2BulkElementRevertTransactionData$.Outbound | undefined;
        ik?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2BulkElementRevertTransaction> =
        z
            .object({
                action: z.string(),
                data: z.lazy(() => V2BulkElementRevertTransactionData$.outboundSchema).optional(),
                ik: z.string().optional(),
            })
            .transform((v) => {
                return {
                    action: v.action,
                    ...(v.data === undefined ? null : { data: v.data }),
                    ...(v.ik === undefined ? null : { ik: v.ik }),
                };
            });
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const V2BulkElementRevertTransactionData$inboundSchema: z.ZodType<
    V2BulkElementRevertTransactionData,
    z.ZodTypeDef,
    unknown
> = z.object({
    atEffectiveDate: z.boolean().optional(),
    force: z.boolean().optional(),
    id: z.number().transform((v) => BigInt(v)),
});

/** @internal */
export type V2BulkElementRevertTransactionData$Outbound = {
    atEffectiveDate?: boolean | undefined;
    force?: boolean | undefined;
    id: number;
};

/** @internal */
export const V2BulkElementRevertTransactionData$outboundSchema: z.ZodType<
    V2BulkElementRevertTransactionData$Outbound,
    z.ZodTypeDef,
    V2BulkElementRevertTransactionData
> = z.object({
    atEffectiveDate: z.boolean().optional(),
    force: z.boolean().optional(),
    id: z.bigint().transform((v) => Number(v)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementRevertTransactionData$ {
    /** @deprecated use `V2BulkElementRevertTransactionData$inboundSchema` instead. */
    export const inboundSchema = V2BulkElementRevertTransactionData$inboundSchema;
    /** @deprecated use `V2BulkElementRevertTransactionData$outboundSchema` instead. */
    export const outboundSchema = V2BulkElementRevertTransactionData$outboundSchema;
    /** @deprecated use `V2BulkElementRevertTransactionData$Outbound` instead. */
    export type Outbound = V2BulkElementRevertTransactionData$Outbound;
}

/** @internal */
export const V2BulkElementRevertTransaction$inboundSchema: z.ZodType<
    V2BulkElementRevertTransaction,
    z.ZodTypeDef,
    unknown
> = z.object({
    action: z.string(),
    data: z.lazy(() => V2BulkElementRevertTransactionData$inboundSchema).optional(),
    ik: z.string().optional(),
});

/** @internal */
export type V2BulkElementRevertTransaction$Outbound = {
    action: string;
    data?: V2BulkElementRevertTransactionData$Outbound | undefined;
    ik?: string | undefined;
};

/** @internal */
export const V2BulkElementRevertTransaction$outboundSchema: z.ZodType<
    V2BulkElementRevertTransaction$Outbound,
    z.ZodTypeDef,
    V2BulkElementRevertTransaction
> = z.object({
    action: z.string(),
    data: z.lazy(() => V2BulkElementRevertTransactionData$outboundSchema).optional(),
    ik: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementRevertTransaction$ {
    /** @deprecated use `V2BulkElementRevertTransaction$inboundSchema` instead. */
    export const inboundSchema = V2BulkElementRevertTransaction$inboundSchema;
    /** @deprecated use `V2BulkElementRevertTransaction$outboundSchema` instead. */
    export const outboundSchema = V2BulkElementRevertTransaction$outboundSchema;
    /** @deprecated use `V2BulkElementRevertTransaction$Outbound` instead. */
    export type Outbound = V2BulkElementRevertTransaction$Outbound;
}

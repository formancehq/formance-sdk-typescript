/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Volume = {
    balance?: bigint | undefined;
    input: bigint;
    output: bigint;
};

/** @internal */
export const Volume$inboundSchema: z.ZodType<Volume, z.ZodTypeDef, unknown> = z.object({
    balance: z
        .number()
        .transform((v) => BigInt(v))
        .optional(),
    input: z.number().transform((v) => BigInt(v)),
    output: z.number().transform((v) => BigInt(v)),
});

/** @internal */
export type Volume$Outbound = {
    balance?: number | undefined;
    input: number;
    output: number;
};

/** @internal */
export const Volume$outboundSchema: z.ZodType<Volume$Outbound, z.ZodTypeDef, Volume> = z.object({
    balance: z
        .bigint()
        .transform((v) => Number(v))
        .optional(),
    input: z.bigint().transform((v) => Number(v)),
    output: z.bigint().transform((v) => Number(v)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Volume$ {
    /** @deprecated use `Volume$inboundSchema` instead. */
    export const inboundSchema = Volume$inboundSchema;
    /** @deprecated use `Volume$outboundSchema` instead. */
    export const outboundSchema = Volume$outboundSchema;
    /** @deprecated use `Volume$Outbound` instead. */
    export type Outbound = Volume$Outbound;
}

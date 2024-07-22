/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ConfirmHoldRequest = {
    /**
     * Define the amount to transfer.
     */
    amount?: bigint | undefined;
    /**
     * Define a final confirmation. Remaining funds will be returned to the wallet.
     */
    final?: boolean | undefined;
};

/** @internal */
export const ConfirmHoldRequest$inboundSchema: z.ZodType<
    ConfirmHoldRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    amount: z
        .number()
        .transform((v) => BigInt(v))
        .optional(),
    final: z.boolean().optional(),
});

/** @internal */
export type ConfirmHoldRequest$Outbound = {
    amount?: number | undefined;
    final?: boolean | undefined;
};

/** @internal */
export const ConfirmHoldRequest$outboundSchema: z.ZodType<
    ConfirmHoldRequest$Outbound,
    z.ZodTypeDef,
    ConfirmHoldRequest
> = z.object({
    amount: z
        .bigint()
        .transform((v) => Number(v))
        .optional(),
    final: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfirmHoldRequest$ {
    /** @deprecated use `ConfirmHoldRequest$inboundSchema` instead. */
    export const inboundSchema = ConfirmHoldRequest$inboundSchema;
    /** @deprecated use `ConfirmHoldRequest$outboundSchema` instead. */
    export const outboundSchema = ConfirmHoldRequest$outboundSchema;
    /** @deprecated use `ConfirmHoldRequest$Outbound` instead. */
    export type Outbound = ConfirmHoldRequest$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityGetAccount = {
    id: string;
    ledger: string;
};

/** @internal */
export const V2ActivityGetAccount$inboundSchema: z.ZodType<
    V2ActivityGetAccount,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    ledger: z.string(),
});

/** @internal */
export type V2ActivityGetAccount$Outbound = {
    id: string;
    ledger: string;
};

/** @internal */
export const V2ActivityGetAccount$outboundSchema: z.ZodType<
    V2ActivityGetAccount$Outbound,
    z.ZodTypeDef,
    V2ActivityGetAccount
> = z.object({
    id: z.string(),
    ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityGetAccount$ {
    /** @deprecated use `V2ActivityGetAccount$inboundSchema` instead. */
    export const inboundSchema = V2ActivityGetAccount$inboundSchema;
    /** @deprecated use `V2ActivityGetAccount$outboundSchema` instead. */
    export const outboundSchema = V2ActivityGetAccount$outboundSchema;
    /** @deprecated use `V2ActivityGetAccount$Outbound` instead. */
    export type Outbound = V2ActivityGetAccount$Outbound;
}

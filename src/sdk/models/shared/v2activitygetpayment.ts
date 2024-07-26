/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ActivityGetPayment = {
    id: string;
};

/** @internal */
export const V2ActivityGetPayment$inboundSchema: z.ZodType<
    V2ActivityGetPayment,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type V2ActivityGetPayment$Outbound = {
    id: string;
};

/** @internal */
export const V2ActivityGetPayment$outboundSchema: z.ZodType<
    V2ActivityGetPayment$Outbound,
    z.ZodTypeDef,
    V2ActivityGetPayment
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityGetPayment$ {
    /** @deprecated use `V2ActivityGetPayment$inboundSchema` instead. */
    export const inboundSchema = V2ActivityGetPayment$inboundSchema;
    /** @deprecated use `V2ActivityGetPayment$outboundSchema` instead. */
    export const outboundSchema = V2ActivityGetPayment$outboundSchema;
    /** @deprecated use `V2ActivityGetPayment$Outbound` instead. */
    export type Outbound = V2ActivityGetPayment$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AggregateBalancesResponse = {
    data: { [k: string]: number };
};

/** @internal */
export const AggregateBalancesResponse$inboundSchema: z.ZodType<
    AggregateBalancesResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.record(z.number().int()),
});

/** @internal */
export type AggregateBalancesResponse$Outbound = {
    data: { [k: string]: number };
};

/** @internal */
export const AggregateBalancesResponse$outboundSchema: z.ZodType<
    AggregateBalancesResponse$Outbound,
    z.ZodTypeDef,
    AggregateBalancesResponse
> = z.object({
    data: z.record(z.number().int()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AggregateBalancesResponse$ {
    /** @deprecated use `AggregateBalancesResponse$inboundSchema` instead. */
    export const inboundSchema = AggregateBalancesResponse$inboundSchema;
    /** @deprecated use `AggregateBalancesResponse$outboundSchema` instead. */
    export const outboundSchema = AggregateBalancesResponse$outboundSchema;
    /** @deprecated use `AggregateBalancesResponse$Outbound` instead. */
    export type Outbound = AggregateBalancesResponse$Outbound;
}

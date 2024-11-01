/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2AggregateBalancesResponse = {
  data: { [k: string]: bigint };
};

/** @internal */
export const V2AggregateBalancesResponse$inboundSchema: z.ZodType<
  V2AggregateBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.record(z.number().transform(v => BigInt(v))),
});

/** @internal */
export type V2AggregateBalancesResponse$Outbound = {
  data: { [k: string]: number };
};

/** @internal */
export const V2AggregateBalancesResponse$outboundSchema: z.ZodType<
  V2AggregateBalancesResponse$Outbound,
  z.ZodTypeDef,
  V2AggregateBalancesResponse
> = z.object({
  data: z.record(z.bigint().transform(v => Number(v))),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2AggregateBalancesResponse$ {
  /** @deprecated use `V2AggregateBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = V2AggregateBalancesResponse$inboundSchema;
  /** @deprecated use `V2AggregateBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = V2AggregateBalancesResponse$outboundSchema;
  /** @deprecated use `V2AggregateBalancesResponse$Outbound` instead. */
  export type Outbound = V2AggregateBalancesResponse$Outbound;
}

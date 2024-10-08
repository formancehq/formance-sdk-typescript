/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Stats,
  V2Stats$inboundSchema,
  V2Stats$Outbound,
  V2Stats$outboundSchema,
} from "./v2stats.js";

export type V2StatsResponse = {
  data: V2Stats;
};

/** @internal */
export const V2StatsResponse$inboundSchema: z.ZodType<
  V2StatsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2Stats$inboundSchema,
});

/** @internal */
export type V2StatsResponse$Outbound = {
  data: V2Stats$Outbound;
};

/** @internal */
export const V2StatsResponse$outboundSchema: z.ZodType<
  V2StatsResponse$Outbound,
  z.ZodTypeDef,
  V2StatsResponse
> = z.object({
  data: V2Stats$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2StatsResponse$ {
  /** @deprecated use `V2StatsResponse$inboundSchema` instead. */
  export const inboundSchema = V2StatsResponse$inboundSchema;
  /** @deprecated use `V2StatsResponse$outboundSchema` instead. */
  export const outboundSchema = V2StatsResponse$outboundSchema;
  /** @deprecated use `V2StatsResponse$Outbound` instead. */
  export type Outbound = V2StatsResponse$Outbound;
}

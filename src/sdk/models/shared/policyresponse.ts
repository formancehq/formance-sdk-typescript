/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Policy,
  Policy$inboundSchema,
  Policy$Outbound,
  Policy$outboundSchema,
} from "./policy.js";

/**
 * OK
 */
export type PolicyResponse = {
  data: Policy;
};

/** @internal */
export const PolicyResponse$inboundSchema: z.ZodType<
  PolicyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Policy$inboundSchema,
});

/** @internal */
export type PolicyResponse$Outbound = {
  data: Policy$Outbound;
};

/** @internal */
export const PolicyResponse$outboundSchema: z.ZodType<
  PolicyResponse$Outbound,
  z.ZodTypeDef,
  PolicyResponse
> = z.object({
  data: Policy$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PolicyResponse$ {
  /** @deprecated use `PolicyResponse$inboundSchema` instead. */
  export const inboundSchema = PolicyResponse$inboundSchema;
  /** @deprecated use `PolicyResponse$outboundSchema` instead. */
  export const outboundSchema = PolicyResponse$outboundSchema;
  /** @deprecated use `PolicyResponse$Outbound` instead. */
  export type Outbound = PolicyResponse$Outbound;
}

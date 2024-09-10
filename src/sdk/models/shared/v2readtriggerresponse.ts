/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Trigger,
  V2Trigger$inboundSchema,
  V2Trigger$Outbound,
  V2Trigger$outboundSchema,
} from "./v2trigger.js";

export type V2ReadTriggerResponse = {
  data: V2Trigger;
};

/** @internal */
export const V2ReadTriggerResponse$inboundSchema: z.ZodType<
  V2ReadTriggerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2Trigger$inboundSchema,
});

/** @internal */
export type V2ReadTriggerResponse$Outbound = {
  data: V2Trigger$Outbound;
};

/** @internal */
export const V2ReadTriggerResponse$outboundSchema: z.ZodType<
  V2ReadTriggerResponse$Outbound,
  z.ZodTypeDef,
  V2ReadTriggerResponse
> = z.object({
  data: V2Trigger$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ReadTriggerResponse$ {
  /** @deprecated use `V2ReadTriggerResponse$inboundSchema` instead. */
  export const inboundSchema = V2ReadTriggerResponse$inboundSchema;
  /** @deprecated use `V2ReadTriggerResponse$outboundSchema` instead. */
  export const outboundSchema = V2ReadTriggerResponse$outboundSchema;
  /** @deprecated use `V2ReadTriggerResponse$Outbound` instead. */
  export type Outbound = V2ReadTriggerResponse$Outbound;
}

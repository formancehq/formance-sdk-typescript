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

export type V2CreateTriggerResponse = {
  data: V2Trigger;
};

/** @internal */
export const V2CreateTriggerResponse$inboundSchema: z.ZodType<
  V2CreateTriggerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2Trigger$inboundSchema,
});

/** @internal */
export type V2CreateTriggerResponse$Outbound = {
  data: V2Trigger$Outbound;
};

/** @internal */
export const V2CreateTriggerResponse$outboundSchema: z.ZodType<
  V2CreateTriggerResponse$Outbound,
  z.ZodTypeDef,
  V2CreateTriggerResponse
> = z.object({
  data: V2Trigger$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateTriggerResponse$ {
  /** @deprecated use `V2CreateTriggerResponse$inboundSchema` instead. */
  export const inboundSchema = V2CreateTriggerResponse$inboundSchema;
  /** @deprecated use `V2CreateTriggerResponse$outboundSchema` instead. */
  export const outboundSchema = V2CreateTriggerResponse$outboundSchema;
  /** @deprecated use `V2CreateTriggerResponse$Outbound` instead. */
  export type Outbound = V2CreateTriggerResponse$Outbound;
}

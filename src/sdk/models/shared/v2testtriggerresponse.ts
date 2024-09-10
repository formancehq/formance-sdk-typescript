/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2TriggerTest,
  V2TriggerTest$inboundSchema,
  V2TriggerTest$Outbound,
  V2TriggerTest$outboundSchema,
} from "./v2triggertest.js";

export type V2TestTriggerResponse = {
  data: V2TriggerTest;
};

/** @internal */
export const V2TestTriggerResponse$inboundSchema: z.ZodType<
  V2TestTriggerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2TriggerTest$inboundSchema,
});

/** @internal */
export type V2TestTriggerResponse$Outbound = {
  data: V2TriggerTest$Outbound;
};

/** @internal */
export const V2TestTriggerResponse$outboundSchema: z.ZodType<
  V2TestTriggerResponse$Outbound,
  z.ZodTypeDef,
  V2TestTriggerResponse
> = z.object({
  data: V2TriggerTest$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2TestTriggerResponse$ {
  /** @deprecated use `V2TestTriggerResponse$inboundSchema` instead. */
  export const inboundSchema = V2TestTriggerResponse$inboundSchema;
  /** @deprecated use `V2TestTriggerResponse$outboundSchema` instead. */
  export const outboundSchema = V2TestTriggerResponse$outboundSchema;
  /** @deprecated use `V2TestTriggerResponse$Outbound` instead. */
  export type Outbound = V2TestTriggerResponse$Outbound;
}

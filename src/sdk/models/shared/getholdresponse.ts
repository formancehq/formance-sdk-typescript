/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ExpandedDebitHold,
  ExpandedDebitHold$inboundSchema,
  ExpandedDebitHold$Outbound,
  ExpandedDebitHold$outboundSchema,
} from "./expandeddebithold.js";

export type GetHoldResponse = {
  data: ExpandedDebitHold;
};

/** @internal */
export const GetHoldResponse$inboundSchema: z.ZodType<
  GetHoldResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: ExpandedDebitHold$inboundSchema,
});

/** @internal */
export type GetHoldResponse$Outbound = {
  data: ExpandedDebitHold$Outbound;
};

/** @internal */
export const GetHoldResponse$outboundSchema: z.ZodType<
  GetHoldResponse$Outbound,
  z.ZodTypeDef,
  GetHoldResponse
> = z.object({
  data: ExpandedDebitHold$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetHoldResponse$ {
  /** @deprecated use `GetHoldResponse$inboundSchema` instead. */
  export const inboundSchema = GetHoldResponse$inboundSchema;
  /** @deprecated use `GetHoldResponse$outboundSchema` instead. */
  export const outboundSchema = GetHoldResponse$outboundSchema;
  /** @deprecated use `GetHoldResponse$Outbound` instead. */
  export type Outbound = GetHoldResponse$Outbound;
}

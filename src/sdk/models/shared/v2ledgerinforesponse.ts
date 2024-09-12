/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2LedgerInfo,
  V2LedgerInfo$inboundSchema,
  V2LedgerInfo$Outbound,
  V2LedgerInfo$outboundSchema,
} from "./v2ledgerinfo.js";

export type V2LedgerInfoResponse = {
  data?: V2LedgerInfo | undefined;
};

/** @internal */
export const V2LedgerInfoResponse$inboundSchema: z.ZodType<
  V2LedgerInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2LedgerInfo$inboundSchema.optional(),
});

/** @internal */
export type V2LedgerInfoResponse$Outbound = {
  data?: V2LedgerInfo$Outbound | undefined;
};

/** @internal */
export const V2LedgerInfoResponse$outboundSchema: z.ZodType<
  V2LedgerInfoResponse$Outbound,
  z.ZodTypeDef,
  V2LedgerInfoResponse
> = z.object({
  data: V2LedgerInfo$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LedgerInfoResponse$ {
  /** @deprecated use `V2LedgerInfoResponse$inboundSchema` instead. */
  export const inboundSchema = V2LedgerInfoResponse$inboundSchema;
  /** @deprecated use `V2LedgerInfoResponse$outboundSchema` instead. */
  export const outboundSchema = V2LedgerInfoResponse$outboundSchema;
  /** @deprecated use `V2LedgerInfoResponse$Outbound` instead. */
  export type Outbound = V2LedgerInfoResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Transaction,
  V2Transaction$inboundSchema,
  V2Transaction$Outbound,
  V2Transaction$outboundSchema,
} from "./v2transaction.js";

export type V2CreateTransactionResponse = {
  data: V2Transaction;
};

/** @internal */
export const V2CreateTransactionResponse$inboundSchema: z.ZodType<
  V2CreateTransactionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2Transaction$inboundSchema,
});

/** @internal */
export type V2CreateTransactionResponse$Outbound = {
  data: V2Transaction$Outbound;
};

/** @internal */
export const V2CreateTransactionResponse$outboundSchema: z.ZodType<
  V2CreateTransactionResponse$Outbound,
  z.ZodTypeDef,
  V2CreateTransactionResponse
> = z.object({
  data: V2Transaction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2CreateTransactionResponse$ {
  /** @deprecated use `V2CreateTransactionResponse$inboundSchema` instead. */
  export const inboundSchema = V2CreateTransactionResponse$inboundSchema;
  /** @deprecated use `V2CreateTransactionResponse$outboundSchema` instead. */
  export const outboundSchema = V2CreateTransactionResponse$outboundSchema;
  /** @deprecated use `V2CreateTransactionResponse$Outbound` instead. */
  export type Outbound = V2CreateTransactionResponse$Outbound;
}

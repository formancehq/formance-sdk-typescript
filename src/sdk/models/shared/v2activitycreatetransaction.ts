/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2PostTransaction,
  V2PostTransaction$inboundSchema,
  V2PostTransaction$Outbound,
  V2PostTransaction$outboundSchema,
} from "./v2posttransaction.js";

export type V2ActivityCreateTransaction = {
  data?: V2PostTransaction | undefined;
  ledger?: string | undefined;
};

/** @internal */
export const V2ActivityCreateTransaction$inboundSchema: z.ZodType<
  V2ActivityCreateTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: V2PostTransaction$inboundSchema.optional(),
  ledger: z.string().optional(),
});

/** @internal */
export type V2ActivityCreateTransaction$Outbound = {
  data?: V2PostTransaction$Outbound | undefined;
  ledger?: string | undefined;
};

/** @internal */
export const V2ActivityCreateTransaction$outboundSchema: z.ZodType<
  V2ActivityCreateTransaction$Outbound,
  z.ZodTypeDef,
  V2ActivityCreateTransaction
> = z.object({
  data: V2PostTransaction$outboundSchema.optional(),
  ledger: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ActivityCreateTransaction$ {
  /** @deprecated use `V2ActivityCreateTransaction$inboundSchema` instead. */
  export const inboundSchema = V2ActivityCreateTransaction$inboundSchema;
  /** @deprecated use `V2ActivityCreateTransaction$outboundSchema` instead. */
  export const outboundSchema = V2ActivityCreateTransaction$outboundSchema;
  /** @deprecated use `V2ActivityCreateTransaction$Outbound` instead. */
  export type Outbound = V2ActivityCreateTransaction$Outbound;
}

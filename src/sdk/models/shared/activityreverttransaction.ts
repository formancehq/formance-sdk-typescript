/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ActivityRevertTransaction = {
  id: string;
  ledger: string;
};

/** @internal */
export const ActivityRevertTransaction$inboundSchema: z.ZodType<
  ActivityRevertTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ledger: z.string(),
});

/** @internal */
export type ActivityRevertTransaction$Outbound = {
  id: string;
  ledger: string;
};

/** @internal */
export const ActivityRevertTransaction$outboundSchema: z.ZodType<
  ActivityRevertTransaction$Outbound,
  z.ZodTypeDef,
  ActivityRevertTransaction
> = z.object({
  id: z.string(),
  ledger: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityRevertTransaction$ {
  /** @deprecated use `ActivityRevertTransaction$inboundSchema` instead. */
  export const inboundSchema = ActivityRevertTransaction$inboundSchema;
  /** @deprecated use `ActivityRevertTransaction$outboundSchema` instead. */
  export const outboundSchema = ActivityRevertTransaction$outboundSchema;
  /** @deprecated use `ActivityRevertTransaction$Outbound` instead. */
  export type Outbound = ActivityRevertTransaction$Outbound;
}

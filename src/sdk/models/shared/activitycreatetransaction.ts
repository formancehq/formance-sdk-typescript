/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  OrchestrationPostTransaction,
  OrchestrationPostTransaction$inboundSchema,
  OrchestrationPostTransaction$Outbound,
  OrchestrationPostTransaction$outboundSchema,
} from "./orchestrationposttransaction.js";

export type ActivityCreateTransaction = {
  data?: OrchestrationPostTransaction | undefined;
  ledger?: string | undefined;
};

/** @internal */
export const ActivityCreateTransaction$inboundSchema: z.ZodType<
  ActivityCreateTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: OrchestrationPostTransaction$inboundSchema.optional(),
  ledger: z.string().optional(),
});

/** @internal */
export type ActivityCreateTransaction$Outbound = {
  data?: OrchestrationPostTransaction$Outbound | undefined;
  ledger?: string | undefined;
};

/** @internal */
export const ActivityCreateTransaction$outboundSchema: z.ZodType<
  ActivityCreateTransaction$Outbound,
  z.ZodTypeDef,
  ActivityCreateTransaction
> = z.object({
  data: OrchestrationPostTransaction$outboundSchema.optional(),
  ledger: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityCreateTransaction$ {
  /** @deprecated use `ActivityCreateTransaction$inboundSchema` instead. */
  export const inboundSchema = ActivityCreateTransaction$inboundSchema;
  /** @deprecated use `ActivityCreateTransaction$outboundSchema` instead. */
  export const outboundSchema = ActivityCreateTransaction$outboundSchema;
  /** @deprecated use `ActivityCreateTransaction$Outbound` instead. */
  export type Outbound = ActivityCreateTransaction$Outbound;
}

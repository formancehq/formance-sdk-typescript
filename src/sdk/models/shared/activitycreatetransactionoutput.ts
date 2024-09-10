/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  OrchestrationTransaction,
  OrchestrationTransaction$inboundSchema,
  OrchestrationTransaction$Outbound,
  OrchestrationTransaction$outboundSchema,
} from "./orchestrationtransaction.js";

export type ActivityCreateTransactionOutput = {
  data: OrchestrationTransaction;
};

/** @internal */
export const ActivityCreateTransactionOutput$inboundSchema: z.ZodType<
  ActivityCreateTransactionOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: OrchestrationTransaction$inboundSchema,
});

/** @internal */
export type ActivityCreateTransactionOutput$Outbound = {
  data: OrchestrationTransaction$Outbound;
};

/** @internal */
export const ActivityCreateTransactionOutput$outboundSchema: z.ZodType<
  ActivityCreateTransactionOutput$Outbound,
  z.ZodTypeDef,
  ActivityCreateTransactionOutput
> = z.object({
  data: OrchestrationTransaction$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityCreateTransactionOutput$ {
  /** @deprecated use `ActivityCreateTransactionOutput$inboundSchema` instead. */
  export const inboundSchema = ActivityCreateTransactionOutput$inboundSchema;
  /** @deprecated use `ActivityCreateTransactionOutput$outboundSchema` instead. */
  export const outboundSchema = ActivityCreateTransactionOutput$outboundSchema;
  /** @deprecated use `ActivityCreateTransactionOutput$Outbound` instead. */
  export type Outbound = ActivityCreateTransactionOutput$Outbound;
}

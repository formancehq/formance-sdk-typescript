/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2Stage,
  V2Stage$inboundSchema,
  V2Stage$Outbound,
  V2Stage$outboundSchema,
} from "./v2stage.js";

export type V2WorkflowInstanceHistory = {
  error?: string | undefined;
  input: V2Stage;
  name: string;
  startedAt: Date;
  terminated: boolean;
  terminatedAt?: Date | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistory$inboundSchema: z.ZodType<
  V2WorkflowInstanceHistory,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.string().optional(),
  input: V2Stage$inboundSchema,
  name: z.string(),
  startedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  terminated: z.boolean(),
  terminatedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
});

/** @internal */
export type V2WorkflowInstanceHistory$Outbound = {
  error?: string | undefined;
  input: V2Stage$Outbound;
  name: string;
  startedAt: string;
  terminated: boolean;
  terminatedAt?: string | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistory$outboundSchema: z.ZodType<
  V2WorkflowInstanceHistory$Outbound,
  z.ZodTypeDef,
  V2WorkflowInstanceHistory
> = z.object({
  error: z.string().optional(),
  input: V2Stage$outboundSchema,
  name: z.string(),
  startedAt: z.date().transform(v => v.toISOString()),
  terminated: z.boolean(),
  terminatedAt: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WorkflowInstanceHistory$ {
  /** @deprecated use `V2WorkflowInstanceHistory$inboundSchema` instead. */
  export const inboundSchema = V2WorkflowInstanceHistory$inboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistory$outboundSchema` instead. */
  export const outboundSchema = V2WorkflowInstanceHistory$outboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistory$Outbound` instead. */
  export type Outbound = V2WorkflowInstanceHistory$Outbound;
}

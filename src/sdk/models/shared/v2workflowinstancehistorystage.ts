/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2WorkflowInstanceHistoryStageInput,
  V2WorkflowInstanceHistoryStageInput$inboundSchema,
  V2WorkflowInstanceHistoryStageInput$Outbound,
  V2WorkflowInstanceHistoryStageInput$outboundSchema,
} from "./v2workflowinstancehistorystageinput.js";
import {
  V2WorkflowInstanceHistoryStageOutput,
  V2WorkflowInstanceHistoryStageOutput$inboundSchema,
  V2WorkflowInstanceHistoryStageOutput$Outbound,
  V2WorkflowInstanceHistoryStageOutput$outboundSchema,
} from "./v2workflowinstancehistorystageoutput.js";

export type V2WorkflowInstanceHistoryStage = {
  attempt: number;
  error?: string | undefined;
  input: V2WorkflowInstanceHistoryStageInput;
  lastFailure?: string | undefined;
  name: string;
  nextExecution?: Date | undefined;
  output?: V2WorkflowInstanceHistoryStageOutput | undefined;
  startedAt: Date;
  terminated: boolean;
  terminatedAt?: Date | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistoryStage$inboundSchema: z.ZodType<
  V2WorkflowInstanceHistoryStage,
  z.ZodTypeDef,
  unknown
> = z.object({
  attempt: z.number().int(),
  error: z.string().optional(),
  input: V2WorkflowInstanceHistoryStageInput$inboundSchema,
  lastFailure: z.string().optional(),
  name: z.string(),
  nextExecution: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  output: V2WorkflowInstanceHistoryStageOutput$inboundSchema.optional(),
  startedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  terminated: z.boolean(),
  terminatedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
});

/** @internal */
export type V2WorkflowInstanceHistoryStage$Outbound = {
  attempt: number;
  error?: string | undefined;
  input: V2WorkflowInstanceHistoryStageInput$Outbound;
  lastFailure?: string | undefined;
  name: string;
  nextExecution?: string | undefined;
  output?: V2WorkflowInstanceHistoryStageOutput$Outbound | undefined;
  startedAt: string;
  terminated: boolean;
  terminatedAt?: string | undefined;
};

/** @internal */
export const V2WorkflowInstanceHistoryStage$outboundSchema: z.ZodType<
  V2WorkflowInstanceHistoryStage$Outbound,
  z.ZodTypeDef,
  V2WorkflowInstanceHistoryStage
> = z.object({
  attempt: z.number().int(),
  error: z.string().optional(),
  input: V2WorkflowInstanceHistoryStageInput$outboundSchema,
  lastFailure: z.string().optional(),
  name: z.string(),
  nextExecution: z.date().transform(v => v.toISOString()).optional(),
  output: V2WorkflowInstanceHistoryStageOutput$outboundSchema.optional(),
  startedAt: z.date().transform(v => v.toISOString()),
  terminated: z.boolean(),
  terminatedAt: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WorkflowInstanceHistoryStage$ {
  /** @deprecated use `V2WorkflowInstanceHistoryStage$inboundSchema` instead. */
  export const inboundSchema = V2WorkflowInstanceHistoryStage$inboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistoryStage$outboundSchema` instead. */
  export const outboundSchema = V2WorkflowInstanceHistoryStage$outboundSchema;
  /** @deprecated use `V2WorkflowInstanceHistoryStage$Outbound` instead. */
  export type Outbound = V2WorkflowInstanceHistoryStage$Outbound;
}

export function v2WorkflowInstanceHistoryStageToJSON(
  v2WorkflowInstanceHistoryStage: V2WorkflowInstanceHistoryStage,
): string {
  return JSON.stringify(
    V2WorkflowInstanceHistoryStage$outboundSchema.parse(
      v2WorkflowInstanceHistoryStage,
    ),
  );
}

export function v2WorkflowInstanceHistoryStageFromJSON(
  jsonString: string,
): SafeParseResult<V2WorkflowInstanceHistoryStage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2WorkflowInstanceHistoryStage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2WorkflowInstanceHistoryStage' from JSON`,
  );
}

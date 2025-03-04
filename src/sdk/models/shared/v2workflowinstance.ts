/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2StageStatus,
  V2StageStatus$inboundSchema,
  V2StageStatus$Outbound,
  V2StageStatus$outboundSchema,
} from "./v2stagestatus.js";

export type V2WorkflowInstance = {
  createdAt: Date;
  error?: string | undefined;
  id: string;
  status?: Array<V2StageStatus> | undefined;
  terminated: boolean;
  terminatedAt?: Date | undefined;
  updatedAt: Date;
  workflowID: string;
};

/** @internal */
export const V2WorkflowInstance$inboundSchema: z.ZodType<
  V2WorkflowInstance,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  error: z.string().optional(),
  id: z.string(),
  status: z.array(V2StageStatus$inboundSchema).optional(),
  terminated: z.boolean(),
  terminatedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  workflowID: z.string(),
});

/** @internal */
export type V2WorkflowInstance$Outbound = {
  createdAt: string;
  error?: string | undefined;
  id: string;
  status?: Array<V2StageStatus$Outbound> | undefined;
  terminated: boolean;
  terminatedAt?: string | undefined;
  updatedAt: string;
  workflowID: string;
};

/** @internal */
export const V2WorkflowInstance$outboundSchema: z.ZodType<
  V2WorkflowInstance$Outbound,
  z.ZodTypeDef,
  V2WorkflowInstance
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  error: z.string().optional(),
  id: z.string(),
  status: z.array(V2StageStatus$outboundSchema).optional(),
  terminated: z.boolean(),
  terminatedAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.date().transform(v => v.toISOString()),
  workflowID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WorkflowInstance$ {
  /** @deprecated use `V2WorkflowInstance$inboundSchema` instead. */
  export const inboundSchema = V2WorkflowInstance$inboundSchema;
  /** @deprecated use `V2WorkflowInstance$outboundSchema` instead. */
  export const outboundSchema = V2WorkflowInstance$outboundSchema;
  /** @deprecated use `V2WorkflowInstance$Outbound` instead. */
  export type Outbound = V2WorkflowInstance$Outbound;
}

export function v2WorkflowInstanceToJSON(
  v2WorkflowInstance: V2WorkflowInstance,
): string {
  return JSON.stringify(
    V2WorkflowInstance$outboundSchema.parse(v2WorkflowInstance),
  );
}

export function v2WorkflowInstanceFromJSON(
  jsonString: string,
): SafeParseResult<V2WorkflowInstance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2WorkflowInstance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2WorkflowInstance' from JSON`,
  );
}

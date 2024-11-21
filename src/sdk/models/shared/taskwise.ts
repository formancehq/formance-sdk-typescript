/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PaymentStatus,
  PaymentStatus$inboundSchema,
  PaymentStatus$outboundSchema,
} from "./paymentstatus.js";

export type TaskWiseDescriptor = {
  key?: string | undefined;
  name?: string | undefined;
  profileID?: number | undefined;
};

export type TaskWiseState = {};

export type TaskWise = {
  connectorID: string;
  createdAt: Date;
  descriptor: TaskWiseDescriptor;
  error?: string | undefined;
  id: string;
  state: TaskWiseState;
  status: PaymentStatus;
  updatedAt: Date;
};

/** @internal */
export const TaskWiseDescriptor$inboundSchema: z.ZodType<
  TaskWiseDescriptor,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  name: z.string().optional(),
  profileID: z.number().int().optional(),
});

/** @internal */
export type TaskWiseDescriptor$Outbound = {
  key?: string | undefined;
  name?: string | undefined;
  profileID?: number | undefined;
};

/** @internal */
export const TaskWiseDescriptor$outboundSchema: z.ZodType<
  TaskWiseDescriptor$Outbound,
  z.ZodTypeDef,
  TaskWiseDescriptor
> = z.object({
  key: z.string().optional(),
  name: z.string().optional(),
  profileID: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskWiseDescriptor$ {
  /** @deprecated use `TaskWiseDescriptor$inboundSchema` instead. */
  export const inboundSchema = TaskWiseDescriptor$inboundSchema;
  /** @deprecated use `TaskWiseDescriptor$outboundSchema` instead. */
  export const outboundSchema = TaskWiseDescriptor$outboundSchema;
  /** @deprecated use `TaskWiseDescriptor$Outbound` instead. */
  export type Outbound = TaskWiseDescriptor$Outbound;
}

export function taskWiseDescriptorToJSON(
  taskWiseDescriptor: TaskWiseDescriptor,
): string {
  return JSON.stringify(
    TaskWiseDescriptor$outboundSchema.parse(taskWiseDescriptor),
  );
}

export function taskWiseDescriptorFromJSON(
  jsonString: string,
): SafeParseResult<TaskWiseDescriptor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskWiseDescriptor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskWiseDescriptor' from JSON`,
  );
}

/** @internal */
export const TaskWiseState$inboundSchema: z.ZodType<
  TaskWiseState,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TaskWiseState$Outbound = {};

/** @internal */
export const TaskWiseState$outboundSchema: z.ZodType<
  TaskWiseState$Outbound,
  z.ZodTypeDef,
  TaskWiseState
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskWiseState$ {
  /** @deprecated use `TaskWiseState$inboundSchema` instead. */
  export const inboundSchema = TaskWiseState$inboundSchema;
  /** @deprecated use `TaskWiseState$outboundSchema` instead. */
  export const outboundSchema = TaskWiseState$outboundSchema;
  /** @deprecated use `TaskWiseState$Outbound` instead. */
  export type Outbound = TaskWiseState$Outbound;
}

export function taskWiseStateToJSON(taskWiseState: TaskWiseState): string {
  return JSON.stringify(TaskWiseState$outboundSchema.parse(taskWiseState));
}

export function taskWiseStateFromJSON(
  jsonString: string,
): SafeParseResult<TaskWiseState, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskWiseState$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskWiseState' from JSON`,
  );
}

/** @internal */
export const TaskWise$inboundSchema: z.ZodType<
  TaskWise,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  descriptor: z.lazy(() => TaskWiseDescriptor$inboundSchema),
  error: z.string().optional(),
  id: z.string(),
  state: z.lazy(() => TaskWiseState$inboundSchema),
  status: PaymentStatus$inboundSchema,
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type TaskWise$Outbound = {
  connectorID: string;
  createdAt: string;
  descriptor: TaskWiseDescriptor$Outbound;
  error?: string | undefined;
  id: string;
  state: TaskWiseState$Outbound;
  status: string;
  updatedAt: string;
};

/** @internal */
export const TaskWise$outboundSchema: z.ZodType<
  TaskWise$Outbound,
  z.ZodTypeDef,
  TaskWise
> = z.object({
  connectorID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  descriptor: z.lazy(() => TaskWiseDescriptor$outboundSchema),
  error: z.string().optional(),
  id: z.string(),
  state: z.lazy(() => TaskWiseState$outboundSchema),
  status: PaymentStatus$outboundSchema,
  updatedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskWise$ {
  /** @deprecated use `TaskWise$inboundSchema` instead. */
  export const inboundSchema = TaskWise$inboundSchema;
  /** @deprecated use `TaskWise$outboundSchema` instead. */
  export const outboundSchema = TaskWise$outboundSchema;
  /** @deprecated use `TaskWise$Outbound` instead. */
  export type Outbound = TaskWise$Outbound;
}

export function taskWiseToJSON(taskWise: TaskWise): string {
  return JSON.stringify(TaskWise$outboundSchema.parse(taskWise));
}

export function taskWiseFromJSON(
  jsonString: string,
): SafeParseResult<TaskWise, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskWise$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskWise' from JSON`,
  );
}

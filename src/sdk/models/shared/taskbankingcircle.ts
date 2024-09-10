/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PaymentStatus,
  PaymentStatus$inboundSchema,
  PaymentStatus$outboundSchema,
} from "./paymentstatus.js";

export type Descriptor = {
  key?: string | undefined;
  name?: string | undefined;
};

export type TaskBankingCircleState = {};

export type TaskBankingCircle = {
  connectorID: string;
  createdAt: Date;
  descriptor: Descriptor;
  error?: string | undefined;
  id: string;
  state: TaskBankingCircleState;
  status: PaymentStatus;
  updatedAt: Date;
};

/** @internal */
export const Descriptor$inboundSchema: z.ZodType<
  Descriptor,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  name: z.string().optional(),
});

/** @internal */
export type Descriptor$Outbound = {
  key?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const Descriptor$outboundSchema: z.ZodType<
  Descriptor$Outbound,
  z.ZodTypeDef,
  Descriptor
> = z.object({
  key: z.string().optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Descriptor$ {
  /** @deprecated use `Descriptor$inboundSchema` instead. */
  export const inboundSchema = Descriptor$inboundSchema;
  /** @deprecated use `Descriptor$outboundSchema` instead. */
  export const outboundSchema = Descriptor$outboundSchema;
  /** @deprecated use `Descriptor$Outbound` instead. */
  export type Outbound = Descriptor$Outbound;
}

/** @internal */
export const TaskBankingCircleState$inboundSchema: z.ZodType<
  TaskBankingCircleState,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TaskBankingCircleState$Outbound = {};

/** @internal */
export const TaskBankingCircleState$outboundSchema: z.ZodType<
  TaskBankingCircleState$Outbound,
  z.ZodTypeDef,
  TaskBankingCircleState
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskBankingCircleState$ {
  /** @deprecated use `TaskBankingCircleState$inboundSchema` instead. */
  export const inboundSchema = TaskBankingCircleState$inboundSchema;
  /** @deprecated use `TaskBankingCircleState$outboundSchema` instead. */
  export const outboundSchema = TaskBankingCircleState$outboundSchema;
  /** @deprecated use `TaskBankingCircleState$Outbound` instead. */
  export type Outbound = TaskBankingCircleState$Outbound;
}

/** @internal */
export const TaskBankingCircle$inboundSchema: z.ZodType<
  TaskBankingCircle,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectorID: z.string(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  descriptor: z.lazy(() => Descriptor$inboundSchema),
  error: z.string().optional(),
  id: z.string(),
  state: z.lazy(() => TaskBankingCircleState$inboundSchema),
  status: PaymentStatus$inboundSchema,
  updatedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type TaskBankingCircle$Outbound = {
  connectorID: string;
  createdAt: string;
  descriptor: Descriptor$Outbound;
  error?: string | undefined;
  id: string;
  state: TaskBankingCircleState$Outbound;
  status: string;
  updatedAt: string;
};

/** @internal */
export const TaskBankingCircle$outboundSchema: z.ZodType<
  TaskBankingCircle$Outbound,
  z.ZodTypeDef,
  TaskBankingCircle
> = z.object({
  connectorID: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  descriptor: z.lazy(() => Descriptor$outboundSchema),
  error: z.string().optional(),
  id: z.string(),
  state: z.lazy(() => TaskBankingCircleState$outboundSchema),
  status: PaymentStatus$outboundSchema,
  updatedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskBankingCircle$ {
  /** @deprecated use `TaskBankingCircle$inboundSchema` instead. */
  export const inboundSchema = TaskBankingCircle$inboundSchema;
  /** @deprecated use `TaskBankingCircle$outboundSchema` instead. */
  export const outboundSchema = TaskBankingCircle$outboundSchema;
  /** @deprecated use `TaskBankingCircle$Outbound` instead. */
  export type Outbound = TaskBankingCircle$Outbound;
}

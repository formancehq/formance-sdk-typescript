/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskDummyPayDescriptor = {
    fileName?: string | undefined;
    key?: string | undefined;
    name?: string | undefined;
};

export type TaskDummyPayState = {};

export type TaskDummyPay = {
    connectorID: string;
    createdAt: Date;
    descriptor: TaskDummyPayDescriptor;
    error?: string | undefined;
    id: string;
    state: TaskDummyPayState;
    status: PaymentStatus;
    updatedAt: Date;
};

/** @internal */
export const TaskDummyPayDescriptor$inboundSchema: z.ZodType<
    TaskDummyPayDescriptor,
    z.ZodTypeDef,
    unknown
> = z.object({
    fileName: z.string().optional(),
    key: z.string().optional(),
    name: z.string().optional(),
});

/** @internal */
export type TaskDummyPayDescriptor$Outbound = {
    fileName?: string | undefined;
    key?: string | undefined;
    name?: string | undefined;
};

/** @internal */
export const TaskDummyPayDescriptor$outboundSchema: z.ZodType<
    TaskDummyPayDescriptor$Outbound,
    z.ZodTypeDef,
    TaskDummyPayDescriptor
> = z.object({
    fileName: z.string().optional(),
    key: z.string().optional(),
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskDummyPayDescriptor$ {
    /** @deprecated use `TaskDummyPayDescriptor$inboundSchema` instead. */
    export const inboundSchema = TaskDummyPayDescriptor$inboundSchema;
    /** @deprecated use `TaskDummyPayDescriptor$outboundSchema` instead. */
    export const outboundSchema = TaskDummyPayDescriptor$outboundSchema;
    /** @deprecated use `TaskDummyPayDescriptor$Outbound` instead. */
    export type Outbound = TaskDummyPayDescriptor$Outbound;
}

/** @internal */
export const TaskDummyPayState$inboundSchema: z.ZodType<TaskDummyPayState, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type TaskDummyPayState$Outbound = {};

/** @internal */
export const TaskDummyPayState$outboundSchema: z.ZodType<
    TaskDummyPayState$Outbound,
    z.ZodTypeDef,
    TaskDummyPayState
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskDummyPayState$ {
    /** @deprecated use `TaskDummyPayState$inboundSchema` instead. */
    export const inboundSchema = TaskDummyPayState$inboundSchema;
    /** @deprecated use `TaskDummyPayState$outboundSchema` instead. */
    export const outboundSchema = TaskDummyPayState$outboundSchema;
    /** @deprecated use `TaskDummyPayState$Outbound` instead. */
    export type Outbound = TaskDummyPayState$Outbound;
}

/** @internal */
export const TaskDummyPay$inboundSchema: z.ZodType<TaskDummyPay, z.ZodTypeDef, unknown> = z.object({
    connectorID: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    descriptor: z.lazy(() => TaskDummyPayDescriptor$inboundSchema),
    error: z.string().optional(),
    id: z.string(),
    state: z.lazy(() => TaskDummyPayState$inboundSchema),
    status: PaymentStatus$inboundSchema,
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type TaskDummyPay$Outbound = {
    connectorID: string;
    createdAt: string;
    descriptor: TaskDummyPayDescriptor$Outbound;
    error?: string | undefined;
    id: string;
    state: TaskDummyPayState$Outbound;
    status: string;
    updatedAt: string;
};

/** @internal */
export const TaskDummyPay$outboundSchema: z.ZodType<
    TaskDummyPay$Outbound,
    z.ZodTypeDef,
    TaskDummyPay
> = z.object({
    connectorID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    descriptor: z.lazy(() => TaskDummyPayDescriptor$outboundSchema),
    error: z.string().optional(),
    id: z.string(),
    state: z.lazy(() => TaskDummyPayState$outboundSchema),
    status: PaymentStatus$outboundSchema,
    updatedAt: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskDummyPay$ {
    /** @deprecated use `TaskDummyPay$inboundSchema` instead. */
    export const inboundSchema = TaskDummyPay$inboundSchema;
    /** @deprecated use `TaskDummyPay$outboundSchema` instead. */
    export const outboundSchema = TaskDummyPay$outboundSchema;
    /** @deprecated use `TaskDummyPay$Outbound` instead. */
    export type Outbound = TaskDummyPay$Outbound;
}

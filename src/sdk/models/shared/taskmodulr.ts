/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskModulrDescriptor = {
    accountID?: string | undefined;
    key?: string | undefined;
    name?: string | undefined;
};

export type TaskModulrState = {};

export type TaskModulr = {
    connectorID: string;
    createdAt: Date;
    descriptor: TaskModulrDescriptor;
    error?: string | undefined;
    id: string;
    state: TaskModulrState;
    status: PaymentStatus;
    updatedAt: Date;
};

/** @internal */
export const TaskModulrDescriptor$inboundSchema: z.ZodType<
    TaskModulrDescriptor,
    z.ZodTypeDef,
    unknown
> = z.object({
    accountID: z.string().optional(),
    key: z.string().optional(),
    name: z.string().optional(),
});

/** @internal */
export type TaskModulrDescriptor$Outbound = {
    accountID?: string | undefined;
    key?: string | undefined;
    name?: string | undefined;
};

/** @internal */
export const TaskModulrDescriptor$outboundSchema: z.ZodType<
    TaskModulrDescriptor$Outbound,
    z.ZodTypeDef,
    TaskModulrDescriptor
> = z.object({
    accountID: z.string().optional(),
    key: z.string().optional(),
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskModulrDescriptor$ {
    /** @deprecated use `TaskModulrDescriptor$inboundSchema` instead. */
    export const inboundSchema = TaskModulrDescriptor$inboundSchema;
    /** @deprecated use `TaskModulrDescriptor$outboundSchema` instead. */
    export const outboundSchema = TaskModulrDescriptor$outboundSchema;
    /** @deprecated use `TaskModulrDescriptor$Outbound` instead. */
    export type Outbound = TaskModulrDescriptor$Outbound;
}

/** @internal */
export const TaskModulrState$inboundSchema: z.ZodType<TaskModulrState, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type TaskModulrState$Outbound = {};

/** @internal */
export const TaskModulrState$outboundSchema: z.ZodType<
    TaskModulrState$Outbound,
    z.ZodTypeDef,
    TaskModulrState
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskModulrState$ {
    /** @deprecated use `TaskModulrState$inboundSchema` instead. */
    export const inboundSchema = TaskModulrState$inboundSchema;
    /** @deprecated use `TaskModulrState$outboundSchema` instead. */
    export const outboundSchema = TaskModulrState$outboundSchema;
    /** @deprecated use `TaskModulrState$Outbound` instead. */
    export type Outbound = TaskModulrState$Outbound;
}

/** @internal */
export const TaskModulr$inboundSchema: z.ZodType<TaskModulr, z.ZodTypeDef, unknown> = z.object({
    connectorID: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    descriptor: z.lazy(() => TaskModulrDescriptor$inboundSchema),
    error: z.string().optional(),
    id: z.string(),
    state: z.lazy(() => TaskModulrState$inboundSchema),
    status: PaymentStatus$inboundSchema,
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type TaskModulr$Outbound = {
    connectorID: string;
    createdAt: string;
    descriptor: TaskModulrDescriptor$Outbound;
    error?: string | undefined;
    id: string;
    state: TaskModulrState$Outbound;
    status: string;
    updatedAt: string;
};

/** @internal */
export const TaskModulr$outboundSchema: z.ZodType<TaskModulr$Outbound, z.ZodTypeDef, TaskModulr> =
    z.object({
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        descriptor: z.lazy(() => TaskModulrDescriptor$outboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskModulrState$outboundSchema),
        status: PaymentStatus$outboundSchema,
        updatedAt: z.date().transform((v) => v.toISOString()),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskModulr$ {
    /** @deprecated use `TaskModulr$inboundSchema` instead. */
    export const inboundSchema = TaskModulr$inboundSchema;
    /** @deprecated use `TaskModulr$outboundSchema` instead. */
    export const outboundSchema = TaskModulr$outboundSchema;
    /** @deprecated use `TaskModulr$Outbound` instead. */
    export type Outbound = TaskModulr$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PaymentStatus,
    PaymentStatus$inboundSchema,
    PaymentStatus$outboundSchema,
} from "./paymentstatus.js";
import * as z from "zod";

export type TaskMangoPayDescriptor = {
    key?: string | undefined;
    name?: string | undefined;
    userID?: string | undefined;
};

export type TaskMangoPayState = {};

export type TaskMangoPay = {
    connectorID: string;
    createdAt: Date;
    descriptor: TaskMangoPayDescriptor;
    error?: string | undefined;
    id: string;
    state: TaskMangoPayState;
    status: PaymentStatus;
    updatedAt: Date;
};

/** @internal */
export const TaskMangoPayDescriptor$inboundSchema: z.ZodType<
    TaskMangoPayDescriptor,
    z.ZodTypeDef,
    unknown
> = z.object({
    key: z.string().optional(),
    name: z.string().optional(),
    userID: z.string().optional(),
});

/** @internal */
export type TaskMangoPayDescriptor$Outbound = {
    key?: string | undefined;
    name?: string | undefined;
    userID?: string | undefined;
};

/** @internal */
export const TaskMangoPayDescriptor$outboundSchema: z.ZodType<
    TaskMangoPayDescriptor$Outbound,
    z.ZodTypeDef,
    TaskMangoPayDescriptor
> = z.object({
    key: z.string().optional(),
    name: z.string().optional(),
    userID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskMangoPayDescriptor$ {
    /** @deprecated use `TaskMangoPayDescriptor$inboundSchema` instead. */
    export const inboundSchema = TaskMangoPayDescriptor$inboundSchema;
    /** @deprecated use `TaskMangoPayDescriptor$outboundSchema` instead. */
    export const outboundSchema = TaskMangoPayDescriptor$outboundSchema;
    /** @deprecated use `TaskMangoPayDescriptor$Outbound` instead. */
    export type Outbound = TaskMangoPayDescriptor$Outbound;
}

/** @internal */
export const TaskMangoPayState$inboundSchema: z.ZodType<TaskMangoPayState, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type TaskMangoPayState$Outbound = {};

/** @internal */
export const TaskMangoPayState$outboundSchema: z.ZodType<
    TaskMangoPayState$Outbound,
    z.ZodTypeDef,
    TaskMangoPayState
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskMangoPayState$ {
    /** @deprecated use `TaskMangoPayState$inboundSchema` instead. */
    export const inboundSchema = TaskMangoPayState$inboundSchema;
    /** @deprecated use `TaskMangoPayState$outboundSchema` instead. */
    export const outboundSchema = TaskMangoPayState$outboundSchema;
    /** @deprecated use `TaskMangoPayState$Outbound` instead. */
    export type Outbound = TaskMangoPayState$Outbound;
}

/** @internal */
export const TaskMangoPay$inboundSchema: z.ZodType<TaskMangoPay, z.ZodTypeDef, unknown> = z.object({
    connectorID: z.string(),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    descriptor: z.lazy(() => TaskMangoPayDescriptor$inboundSchema),
    error: z.string().optional(),
    id: z.string(),
    state: z.lazy(() => TaskMangoPayState$inboundSchema),
    status: PaymentStatus$inboundSchema,
    updatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type TaskMangoPay$Outbound = {
    connectorID: string;
    createdAt: string;
    descriptor: TaskMangoPayDescriptor$Outbound;
    error?: string | undefined;
    id: string;
    state: TaskMangoPayState$Outbound;
    status: string;
    updatedAt: string;
};

/** @internal */
export const TaskMangoPay$outboundSchema: z.ZodType<
    TaskMangoPay$Outbound,
    z.ZodTypeDef,
    TaskMangoPay
> = z.object({
    connectorID: z.string(),
    createdAt: z.date().transform((v) => v.toISOString()),
    descriptor: z.lazy(() => TaskMangoPayDescriptor$outboundSchema),
    error: z.string().optional(),
    id: z.string(),
    state: z.lazy(() => TaskMangoPayState$outboundSchema),
    status: PaymentStatus$outboundSchema,
    updatedAt: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskMangoPay$ {
    /** @deprecated use `TaskMangoPay$inboundSchema` instead. */
    export const inboundSchema = TaskMangoPay$inboundSchema;
    /** @deprecated use `TaskMangoPay$outboundSchema` instead. */
    export const outboundSchema = TaskMangoPay$outboundSchema;
    /** @deprecated use `TaskMangoPay$Outbound` instead. */
    export type Outbound = TaskMangoPay$Outbound;
}

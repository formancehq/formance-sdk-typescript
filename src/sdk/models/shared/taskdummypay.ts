/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
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
export namespace TaskDummyPayDescriptor$ {
    export const inboundSchema: z.ZodType<TaskDummyPayDescriptor, z.ZodTypeDef, unknown> = z.object(
        {
            fileName: z.string().optional(),
            key: z.string().optional(),
            name: z.string().optional(),
        }
    );

    export type Outbound = {
        fileName?: string | undefined;
        key?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskDummyPayDescriptor> =
        z.object({
            fileName: z.string().optional(),
            key: z.string().optional(),
            name: z.string().optional(),
        });
}

/** @internal */
export namespace TaskDummyPayState$ {
    export const inboundSchema: z.ZodType<TaskDummyPayState, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskDummyPayState> = z.object(
        {}
    );
}

/** @internal */
export namespace TaskDummyPay$ {
    export const inboundSchema: z.ZodType<TaskDummyPay, z.ZodTypeDef, unknown> = z.object({
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        descriptor: z.lazy(() => TaskDummyPayDescriptor$.inboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskDummyPayState$.inboundSchema),
        status: PaymentStatus$.inboundSchema,
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskDummyPayDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskDummyPayState$.Outbound;
        status: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskDummyPay> = z.object({
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        descriptor: z.lazy(() => TaskDummyPayDescriptor$.outboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskDummyPayState$.outboundSchema),
        status: PaymentStatus$.outboundSchema,
        updatedAt: z.date().transform((v) => v.toISOString()),
    });
}

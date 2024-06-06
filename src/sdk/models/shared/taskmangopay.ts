/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
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
export namespace TaskMangoPayDescriptor$ {
    export const inboundSchema: z.ZodType<TaskMangoPayDescriptor, z.ZodTypeDef, unknown> = z.object(
        {
            key: z.string().optional(),
            name: z.string().optional(),
            userID: z.string().optional(),
        }
    );

    export type Outbound = {
        key?: string | undefined;
        name?: string | undefined;
        userID?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPayDescriptor> =
        z.object({
            key: z.string().optional(),
            name: z.string().optional(),
            userID: z.string().optional(),
        });
}

/** @internal */
export namespace TaskMangoPayState$ {
    export const inboundSchema: z.ZodType<TaskMangoPayState, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPayState> = z.object(
        {}
    );
}

/** @internal */
export namespace TaskMangoPay$ {
    export const inboundSchema: z.ZodType<TaskMangoPay, z.ZodTypeDef, unknown> = z.object({
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        descriptor: z.lazy(() => TaskMangoPayDescriptor$.inboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskMangoPayState$.inboundSchema),
        status: PaymentStatus$.inboundSchema,
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskMangoPayDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskMangoPayState$.Outbound;
        status: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPay> = z.object({
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        descriptor: z.lazy(() => TaskMangoPayDescriptor$.outboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskMangoPayState$.outboundSchema),
        status: PaymentStatus$.outboundSchema,
        updatedAt: z.date().transform((v) => v.toISOString()),
    });
}

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
    export type Inbound = {
        key?: string | undefined;
        name?: string | undefined;
        userID?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskMangoPayDescriptor, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
            userID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.userID === undefined ? null : { userID: v.userID }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        name?: string | undefined;
        userID?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPayDescriptor> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
            userID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.userID === undefined ? null : { userID: v.userID }),
            };
        });
}

/** @internal */
export namespace TaskMangoPayState$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TaskMangoPayState, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPayState> = z.object(
        {}
    );
}

/** @internal */
export namespace TaskMangoPay$ {
    export type Inbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskMangoPayDescriptor$.Inbound;
        error?: string | undefined;
        id: string;
        state: TaskMangoPayState$.Inbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<TaskMangoPay, z.ZodTypeDef, Inbound> = z
        .object({
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            descriptor: z.lazy(() => TaskMangoPayDescriptor$.inboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskMangoPayState$.inboundSchema),
            status: PaymentStatus$,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                descriptor: v.descriptor,
                ...(v.error === undefined ? null : { error: v.error }),
                id: v.id,
                state: v.state,
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskMangoPayDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskMangoPayState$.Outbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskMangoPay> = z
        .object({
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            descriptor: z.lazy(() => TaskMangoPayDescriptor$.outboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskMangoPayState$.outboundSchema),
            status: PaymentStatus$,
            updatedAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                connectorID: v.connectorID,
                createdAt: v.createdAt,
                descriptor: v.descriptor,
                ...(v.error === undefined ? null : { error: v.error }),
                id: v.id,
                state: v.state,
                status: v.status,
                updatedAt: v.updatedAt,
            };
        });
}

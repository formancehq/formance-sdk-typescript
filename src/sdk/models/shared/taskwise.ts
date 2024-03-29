/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import * as z from "zod";

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
export namespace TaskWiseDescriptor$ {
    export type Inbound = {
        key?: string | undefined;
        name?: string | undefined;
        profileID?: number | undefined;
    };

    export const inboundSchema: z.ZodType<TaskWiseDescriptor, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
            profileID: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.profileID === undefined ? null : { profileID: v.profileID }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        name?: string | undefined;
        profileID?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskWiseDescriptor> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
            profileID: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.profileID === undefined ? null : { profileID: v.profileID }),
            };
        });
}

/** @internal */
export namespace TaskWiseState$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TaskWiseState, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskWiseState> = z.object({});
}

/** @internal */
export namespace TaskWise$ {
    export type Inbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskWiseDescriptor$.Inbound;
        error?: string | undefined;
        id: string;
        state: TaskWiseState$.Inbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<TaskWise, z.ZodTypeDef, Inbound> = z
        .object({
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            descriptor: z.lazy(() => TaskWiseDescriptor$.inboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskWiseState$.inboundSchema),
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
        descriptor: TaskWiseDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskWiseState$.Outbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskWise> = z
        .object({
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            descriptor: z.lazy(() => TaskWiseDescriptor$.outboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskWiseState$.outboundSchema),
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

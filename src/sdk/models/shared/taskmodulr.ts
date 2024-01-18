/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import { z } from "zod";

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
export namespace TaskModulrDescriptor$ {
    export type Inbound = {
        accountID?: string | undefined;
        key?: string | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskModulrDescriptor, z.ZodTypeDef, Inbound> = z
        .object({
            accountID: z.string().optional(),
            key: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountID === undefined ? null : { accountID: v.accountID }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        accountID?: string | undefined;
        key?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskModulrDescriptor> = z
        .object({
            accountID: z.string().optional(),
            key: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountID === undefined ? null : { accountID: v.accountID }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace TaskModulrState$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TaskModulrState, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskModulrState> = z.object({});
}

/** @internal */
export namespace TaskModulr$ {
    export type Inbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskModulrDescriptor$.Inbound;
        error?: string | undefined;
        id: string;
        state: TaskModulrState$.Inbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<TaskModulr, z.ZodTypeDef, Inbound> = z
        .object({
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            descriptor: z.lazy(() => TaskModulrDescriptor$.inboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskModulrState$.inboundSchema),
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
        descriptor: TaskModulrDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskModulrState$.Outbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskModulr> = z
        .object({
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            descriptor: z.lazy(() => TaskModulrDescriptor$.outboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskModulrState$.outboundSchema),
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

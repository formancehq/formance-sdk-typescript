/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import * as z from "zod";

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
export namespace Descriptor$ {
    export type Inbound = {
        key?: string | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Descriptor, z.ZodTypeDef, Inbound> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        key?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Descriptor> = z
        .object({
            key: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace TaskBankingCircleState$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TaskBankingCircleState, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskBankingCircleState> =
        z.object({});
}

/** @internal */
export namespace TaskBankingCircle$ {
    export type Inbound = {
        connectorID: string;
        createdAt: string;
        descriptor: Descriptor$.Inbound;
        error?: string | undefined;
        id: string;
        state: TaskBankingCircleState$.Inbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<TaskBankingCircle, z.ZodTypeDef, Inbound> = z
        .object({
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            descriptor: z.lazy(() => Descriptor$.inboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskBankingCircleState$.inboundSchema),
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
        descriptor: Descriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskBankingCircleState$.Outbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskBankingCircle> = z
        .object({
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            descriptor: z.lazy(() => Descriptor$.outboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskBankingCircleState$.outboundSchema),
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

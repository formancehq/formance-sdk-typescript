/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentStatus, PaymentStatus$ } from "./paymentstatus";
import * as z from "zod";

export type TaskStripeDescriptor = {
    account: string;
    main?: boolean | undefined;
    name: string;
};

export type TaskStripeState = {};

export type TaskStripe = {
    connectorID: string;
    createdAt: Date;
    descriptor: TaskStripeDescriptor;
    error?: string | undefined;
    id: string;
    state: TaskStripeState;
    status: PaymentStatus;
    updatedAt: Date;
};

/** @internal */
export namespace TaskStripeDescriptor$ {
    export type Inbound = {
        account: string;
        main?: boolean | undefined;
        name: string;
    };

    export const inboundSchema: z.ZodType<TaskStripeDescriptor, z.ZodTypeDef, Inbound> = z
        .object({
            account: z.string(),
            main: z.boolean().optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                account: v.account,
                ...(v.main === undefined ? null : { main: v.main }),
                name: v.name,
            };
        });

    export type Outbound = {
        account: string;
        main?: boolean | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripeDescriptor> = z
        .object({
            account: z.string(),
            main: z.boolean().optional(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                account: v.account,
                ...(v.main === undefined ? null : { main: v.main }),
                name: v.name,
            };
        });
}

/** @internal */
export namespace TaskStripeState$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TaskStripeState, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripeState> = z.object({});
}

/** @internal */
export namespace TaskStripe$ {
    export type Inbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskStripeDescriptor$.Inbound;
        error?: string | undefined;
        id: string;
        state: TaskStripeState$.Inbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<TaskStripe, z.ZodTypeDef, Inbound> = z
        .object({
            connectorID: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            descriptor: z.lazy(() => TaskStripeDescriptor$.inboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskStripeState$.inboundSchema),
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
        descriptor: TaskStripeDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskStripeState$.Outbound;
        status: PaymentStatus;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripe> = z
        .object({
            connectorID: z.string(),
            createdAt: z.date().transform((v) => v.toISOString()),
            descriptor: z.lazy(() => TaskStripeDescriptor$.outboundSchema),
            error: z.string().optional(),
            id: z.string(),
            state: z.lazy(() => TaskStripeState$.outboundSchema),
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

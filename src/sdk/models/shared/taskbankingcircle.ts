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
    export const inboundSchema: z.ZodType<Descriptor, z.ZodTypeDef, unknown> = z.object({
        key: z.string().optional(),
        name: z.string().optional(),
    });

    export type Outbound = {
        key?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Descriptor> = z.object({
        key: z.string().optional(),
        name: z.string().optional(),
    });
}

/** @internal */
export namespace TaskBankingCircleState$ {
    export const inboundSchema: z.ZodType<TaskBankingCircleState, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskBankingCircleState> =
        z.object({});
}

/** @internal */
export namespace TaskBankingCircle$ {
    export const inboundSchema: z.ZodType<TaskBankingCircle, z.ZodTypeDef, unknown> = z.object({
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        descriptor: z.lazy(() => Descriptor$.inboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskBankingCircleState$.inboundSchema),
        status: PaymentStatus$.inboundSchema,
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        connectorID: string;
        createdAt: string;
        descriptor: Descriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskBankingCircleState$.Outbound;
        status: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskBankingCircle> = z.object({
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        descriptor: z.lazy(() => Descriptor$.outboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskBankingCircleState$.outboundSchema),
        status: PaymentStatus$.outboundSchema,
        updatedAt: z.date().transform((v) => v.toISOString()),
    });
}

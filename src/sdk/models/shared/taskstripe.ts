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
    export const inboundSchema: z.ZodType<TaskStripeDescriptor, z.ZodTypeDef, unknown> = z.object({
        account: z.string(),
        main: z.boolean().optional(),
        name: z.string(),
    });

    export type Outbound = {
        account: string;
        main?: boolean | undefined;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripeDescriptor> = z.object(
        {
            account: z.string(),
            main: z.boolean().optional(),
            name: z.string(),
        }
    );
}

/** @internal */
export namespace TaskStripeState$ {
    export const inboundSchema: z.ZodType<TaskStripeState, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripeState> = z.object({});
}

/** @internal */
export namespace TaskStripe$ {
    export const inboundSchema: z.ZodType<TaskStripe, z.ZodTypeDef, unknown> = z.object({
        connectorID: z.string(),
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        descriptor: z.lazy(() => TaskStripeDescriptor$.inboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskStripeState$.inboundSchema),
        status: PaymentStatus$.inboundSchema,
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        connectorID: string;
        createdAt: string;
        descriptor: TaskStripeDescriptor$.Outbound;
        error?: string | undefined;
        id: string;
        state: TaskStripeState$.Outbound;
        status: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskStripe> = z.object({
        connectorID: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        descriptor: z.lazy(() => TaskStripeDescriptor$.outboundSchema),
        error: z.string().optional(),
        id: z.string(),
        state: z.lazy(() => TaskStripeState$.outboundSchema),
        status: PaymentStatus$.outboundSchema,
        updatedAt: z.date().transform((v) => v.toISOString()),
    });
}

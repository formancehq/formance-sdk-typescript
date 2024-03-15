/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Stage, V2Stage$ } from "./v2stage";
import * as z from "zod";

export type V2WorkflowInstanceHistory = {
    error?: string | undefined;
    input: V2Stage;
    name: string;
    startedAt: Date;
    terminated: boolean;
    terminatedAt?: Date | undefined;
};

/** @internal */
export namespace V2WorkflowInstanceHistory$ {
    export type Inbound = {
        error?: string | undefined;
        input: V2Stage$.Inbound;
        name: string;
        startedAt: string;
        terminated: boolean;
        terminatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2WorkflowInstanceHistory, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.string().optional(),
            input: V2Stage$.inboundSchema,
            name: z.string(),
            startedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            terminated: z.boolean(),
            terminatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                input: v.input,
                name: v.name,
                startedAt: v.startedAt,
                terminated: v.terminated,
                ...(v.terminatedAt === undefined ? null : { terminatedAt: v.terminatedAt }),
            };
        });

    export type Outbound = {
        error?: string | undefined;
        input: V2Stage$.Outbound;
        name: string;
        startedAt: string;
        terminated: boolean;
        terminatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2WorkflowInstanceHistory> = z
        .object({
            error: z.string().optional(),
            input: V2Stage$.outboundSchema,
            name: z.string(),
            startedAt: z.date().transform((v) => v.toISOString()),
            terminated: z.boolean(),
            terminatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                input: v.input,
                name: v.name,
                startedAt: v.startedAt,
                terminated: v.terminated,
                ...(v.terminatedAt === undefined ? null : { terminatedAt: v.terminatedAt }),
            };
        });
}

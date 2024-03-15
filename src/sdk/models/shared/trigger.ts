/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Trigger = {
    createdAt: Date;
    event: string;
    filter?: string | undefined;
    id: string;
    vars?: Record<string, any> | undefined;
    workflowID: string;
};

/** @internal */
export namespace Trigger$ {
    export type Inbound = {
        createdAt: string;
        event: string;
        filter?: string | undefined;
        id: string;
        vars?: Record<string, any> | undefined;
        workflowID: string;
    };

    export const inboundSchema: z.ZodType<Trigger, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            event: z.string(),
            filter: z.string().optional(),
            id: z.string(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                id: v.id,
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });

    export type Outbound = {
        createdAt: string;
        event: string;
        filter?: string | undefined;
        id: string;
        vars?: Record<string, any> | undefined;
        workflowID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Trigger> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            event: z.string(),
            filter: z.string().optional(),
            id: z.string(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                id: v.id,
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });
}

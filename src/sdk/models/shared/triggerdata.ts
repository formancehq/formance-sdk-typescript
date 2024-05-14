/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TriggerData = {
    event: string;
    filter?: string | undefined;
    name?: string | undefined;
    vars?: Record<string, any> | undefined;
    workflowID: string;
};

/** @internal */
export namespace TriggerData$ {
    export const inboundSchema: z.ZodType<TriggerData, z.ZodTypeDef, unknown> = z
        .object({
            event: z.string(),
            filter: z.string().optional(),
            name: z.string().optional(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });

    export type Outbound = {
        event: string;
        filter?: string | undefined;
        name?: string | undefined;
        vars?: Record<string, any> | undefined;
        workflowID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TriggerData> = z
        .object({
            event: z.string(),
            filter: z.string().optional(),
            name: z.string().optional(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2TriggerData = {
    event: string;
    filter?: string | undefined;
    vars?: Record<string, any> | undefined;
    workflowID: string;
};

/** @internal */
export namespace V2TriggerData$ {
    export type Inbound = {
        event: string;
        filter?: string | undefined;
        vars?: Record<string, any> | undefined;
        workflowID: string;
    };

    export const inboundSchema: z.ZodType<V2TriggerData, z.ZodTypeDef, Inbound> = z
        .object({
            event: z.string(),
            filter: z.string().optional(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });

    export type Outbound = {
        event: string;
        filter?: string | undefined;
        vars?: Record<string, any> | undefined;
        workflowID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2TriggerData> = z
        .object({
            event: z.string(),
            filter: z.string().optional(),
            vars: z.record(z.any()).optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                event: v.event,
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.vars === undefined ? null : { vars: v.vars }),
                workflowID: v.workflowID,
            };
        });
}

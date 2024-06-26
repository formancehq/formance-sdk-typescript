/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2WorkflowConfig, V2WorkflowConfig$ } from "./v2workflowconfig";
import * as z from "zod";

export type V2Workflow = {
    config: V2WorkflowConfig;
    createdAt: Date;
    id: string;
    updatedAt: Date;
};

/** @internal */
export namespace V2Workflow$ {
    export const inboundSchema: z.ZodType<V2Workflow, z.ZodTypeDef, unknown> = z.object({
        config: V2WorkflowConfig$.inboundSchema,
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        id: z.string(),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
    });

    export type Outbound = {
        config: V2WorkflowConfig$.Outbound;
        createdAt: string;
        id: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2Workflow> = z.object({
        config: V2WorkflowConfig$.outboundSchema,
        createdAt: z.date().transform((v) => v.toISOString()),
        id: z.string(),
        updatedAt: z.date().transform((v) => v.toISOString()),
    });
}

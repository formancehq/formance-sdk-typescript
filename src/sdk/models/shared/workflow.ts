/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WorkflowConfig, WorkflowConfig$ } from "./workflowconfig";
import * as z from "zod";

export type Workflow = {
    config: WorkflowConfig;
    createdAt: Date;
    id: string;
    updatedAt: Date;
};

/** @internal */
export namespace Workflow$ {
    export type Inbound = {
        config: WorkflowConfig$.Inbound;
        createdAt: string;
        id: string;
        updatedAt: string;
    };

    export const inboundSchema: z.ZodType<Workflow, z.ZodTypeDef, Inbound> = z
        .object({
            config: WorkflowConfig$.inboundSchema,
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.string(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                config: v.config,
                createdAt: v.createdAt,
                id: v.id,
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        config: WorkflowConfig$.Outbound;
        createdAt: string;
        id: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Workflow> = z
        .object({
            config: WorkflowConfig$.outboundSchema,
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.string(),
            updatedAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                config: v.config,
                createdAt: v.createdAt,
                id: v.id,
                updatedAt: v.updatedAt,
            };
        });
}

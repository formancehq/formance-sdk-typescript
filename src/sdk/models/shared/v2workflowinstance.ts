/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2StageStatus, V2StageStatus$ } from "./v2stagestatus";
import * as z from "zod";

export type V2WorkflowInstance = {
    createdAt: Date;
    error?: string | undefined;
    id: string;
    status?: Array<V2StageStatus> | undefined;
    terminated: boolean;
    terminatedAt?: Date | undefined;
    updatedAt: Date;
    workflowID: string;
};

/** @internal */
export namespace V2WorkflowInstance$ {
    export const inboundSchema: z.ZodType<V2WorkflowInstance, z.ZodTypeDef, unknown> = z.object({
        createdAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        error: z.string().optional(),
        id: z.string(),
        status: z.array(V2StageStatus$.inboundSchema).optional(),
        terminated: z.boolean(),
        terminatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v))
            .optional(),
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        workflowID: z.string(),
    });

    export type Outbound = {
        createdAt: string;
        error?: string | undefined;
        id: string;
        status?: Array<V2StageStatus$.Outbound> | undefined;
        terminated: boolean;
        terminatedAt?: string | undefined;
        updatedAt: string;
        workflowID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2WorkflowInstance> = z.object({
        createdAt: z.date().transform((v) => v.toISOString()),
        error: z.string().optional(),
        id: z.string(),
        status: z.array(V2StageStatus$.outboundSchema).optional(),
        terminated: z.boolean(),
        terminatedAt: z
            .date()
            .transform((v) => v.toISOString())
            .optional(),
        updatedAt: z.date().transform((v) => v.toISOString()),
        workflowID: z.string(),
    });
}

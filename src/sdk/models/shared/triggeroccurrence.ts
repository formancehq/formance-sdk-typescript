/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    WorkflowInstance,
    WorkflowInstance$inboundSchema,
    WorkflowInstance$Outbound,
    WorkflowInstance$outboundSchema,
} from "./workflowinstance.js";
import * as z from "zod";

export type TriggerOccurrence = {
    date: Date;
    error?: string | undefined;
    event: { [k: string]: any };
    triggerID: string;
    workflowInstance?: WorkflowInstance | undefined;
    workflowInstanceID?: string | undefined;
};

/** @internal */
export const TriggerOccurrence$inboundSchema: z.ZodType<TriggerOccurrence, z.ZodTypeDef, unknown> =
    z.object({
        date: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        error: z.string().optional(),
        event: z.record(z.any()),
        triggerID: z.string(),
        workflowInstance: WorkflowInstance$inboundSchema.optional(),
        workflowInstanceID: z.string().optional(),
    });

/** @internal */
export type TriggerOccurrence$Outbound = {
    date: string;
    error?: string | undefined;
    event: { [k: string]: any };
    triggerID: string;
    workflowInstance?: WorkflowInstance$Outbound | undefined;
    workflowInstanceID?: string | undefined;
};

/** @internal */
export const TriggerOccurrence$outboundSchema: z.ZodType<
    TriggerOccurrence$Outbound,
    z.ZodTypeDef,
    TriggerOccurrence
> = z.object({
    date: z.date().transform((v) => v.toISOString()),
    error: z.string().optional(),
    event: z.record(z.any()),
    triggerID: z.string(),
    workflowInstance: WorkflowInstance$outboundSchema.optional(),
    workflowInstanceID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerOccurrence$ {
    /** @deprecated use `TriggerOccurrence$inboundSchema` instead. */
    export const inboundSchema = TriggerOccurrence$inboundSchema;
    /** @deprecated use `TriggerOccurrence$outboundSchema` instead. */
    export const outboundSchema = TriggerOccurrence$outboundSchema;
    /** @deprecated use `TriggerOccurrence$Outbound` instead. */
    export type Outbound = TriggerOccurrence$Outbound;
}

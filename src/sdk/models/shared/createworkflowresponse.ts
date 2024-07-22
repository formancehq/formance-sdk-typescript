/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Workflow,
    Workflow$inboundSchema,
    Workflow$Outbound,
    Workflow$outboundSchema,
} from "./workflow.js";
import * as z from "zod";

export type CreateWorkflowResponse = {
    data: Workflow;
};

/** @internal */
export const CreateWorkflowResponse$inboundSchema: z.ZodType<
    CreateWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: Workflow$inboundSchema,
});

/** @internal */
export type CreateWorkflowResponse$Outbound = {
    data: Workflow$Outbound;
};

/** @internal */
export const CreateWorkflowResponse$outboundSchema: z.ZodType<
    CreateWorkflowResponse$Outbound,
    z.ZodTypeDef,
    CreateWorkflowResponse
> = z.object({
    data: Workflow$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWorkflowResponse$ {
    /** @deprecated use `CreateWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = CreateWorkflowResponse$inboundSchema;
    /** @deprecated use `CreateWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = CreateWorkflowResponse$outboundSchema;
    /** @deprecated use `CreateWorkflowResponse$Outbound` instead. */
    export type Outbound = CreateWorkflowResponse$Outbound;
}

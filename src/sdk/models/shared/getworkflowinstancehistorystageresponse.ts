/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    WorkflowInstanceHistoryStage,
    WorkflowInstanceHistoryStage$inboundSchema,
    WorkflowInstanceHistoryStage$Outbound,
    WorkflowInstanceHistoryStage$outboundSchema,
} from "./workflowinstancehistorystage.js";
import * as z from "zod";

export type GetWorkflowInstanceHistoryStageResponse = {
    data: Array<WorkflowInstanceHistoryStage>;
};

/** @internal */
export const GetWorkflowInstanceHistoryStageResponse$inboundSchema: z.ZodType<
    GetWorkflowInstanceHistoryStageResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(WorkflowInstanceHistoryStage$inboundSchema),
});

/** @internal */
export type GetWorkflowInstanceHistoryStageResponse$Outbound = {
    data: Array<WorkflowInstanceHistoryStage$Outbound>;
};

/** @internal */
export const GetWorkflowInstanceHistoryStageResponse$outboundSchema: z.ZodType<
    GetWorkflowInstanceHistoryStageResponse$Outbound,
    z.ZodTypeDef,
    GetWorkflowInstanceHistoryStageResponse
> = z.object({
    data: z.array(WorkflowInstanceHistoryStage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowInstanceHistoryStageResponse$ {
    /** @deprecated use `GetWorkflowInstanceHistoryStageResponse$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowInstanceHistoryStageResponse$inboundSchema;
    /** @deprecated use `GetWorkflowInstanceHistoryStageResponse$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowInstanceHistoryStageResponse$outboundSchema;
    /** @deprecated use `GetWorkflowInstanceHistoryStageResponse$Outbound` instead. */
    export type Outbound = GetWorkflowInstanceHistoryStageResponse$Outbound;
}

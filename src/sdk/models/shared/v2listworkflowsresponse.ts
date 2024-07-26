/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2Workflow,
    V2Workflow$inboundSchema,
    V2Workflow$Outbound,
    V2Workflow$outboundSchema,
} from "./v2workflow.js";
import * as z from "zod";

export type V2ListWorkflowsResponseCursor = {
    data: Array<V2Workflow>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2ListWorkflowsResponse = {
    cursor: V2ListWorkflowsResponseCursor;
};

/** @internal */
export const V2ListWorkflowsResponseCursor$inboundSchema: z.ZodType<
    V2ListWorkflowsResponseCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(V2Workflow$inboundSchema),
    hasMore: z.boolean(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/** @internal */
export type V2ListWorkflowsResponseCursor$Outbound = {
    data: Array<V2Workflow$Outbound>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

/** @internal */
export const V2ListWorkflowsResponseCursor$outboundSchema: z.ZodType<
    V2ListWorkflowsResponseCursor$Outbound,
    z.ZodTypeDef,
    V2ListWorkflowsResponseCursor
> = z.object({
    data: z.array(V2Workflow$outboundSchema),
    hasMore: z.boolean(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListWorkflowsResponseCursor$ {
    /** @deprecated use `V2ListWorkflowsResponseCursor$inboundSchema` instead. */
    export const inboundSchema = V2ListWorkflowsResponseCursor$inboundSchema;
    /** @deprecated use `V2ListWorkflowsResponseCursor$outboundSchema` instead. */
    export const outboundSchema = V2ListWorkflowsResponseCursor$outboundSchema;
    /** @deprecated use `V2ListWorkflowsResponseCursor$Outbound` instead. */
    export type Outbound = V2ListWorkflowsResponseCursor$Outbound;
}

/** @internal */
export const V2ListWorkflowsResponse$inboundSchema: z.ZodType<
    V2ListWorkflowsResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => V2ListWorkflowsResponseCursor$inboundSchema),
});

/** @internal */
export type V2ListWorkflowsResponse$Outbound = {
    cursor: V2ListWorkflowsResponseCursor$Outbound;
};

/** @internal */
export const V2ListWorkflowsResponse$outboundSchema: z.ZodType<
    V2ListWorkflowsResponse$Outbound,
    z.ZodTypeDef,
    V2ListWorkflowsResponse
> = z.object({
    cursor: z.lazy(() => V2ListWorkflowsResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ListWorkflowsResponse$ {
    /** @deprecated use `V2ListWorkflowsResponse$inboundSchema` instead. */
    export const inboundSchema = V2ListWorkflowsResponse$inboundSchema;
    /** @deprecated use `V2ListWorkflowsResponse$outboundSchema` instead. */
    export const outboundSchema = V2ListWorkflowsResponse$outboundSchema;
    /** @deprecated use `V2ListWorkflowsResponse$Outbound` instead. */
    export type Outbound = V2ListWorkflowsResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type RunWorkflowRequest = {
    requestBody?: { [k: string]: string } | undefined;
    /**
     * Wait end of the workflow before return
     */
    wait?: boolean | undefined;
    /**
     * The flow id
     */
    workflowID: string;
};

export type RunWorkflowResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The workflow instance
     */
    runWorkflowResponse?: shared.RunWorkflowResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export const RunWorkflowRequest$inboundSchema: z.ZodType<
    RunWorkflowRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RequestBody: z.record(z.string()).optional(),
        wait: z.boolean().optional(),
        workflowID: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type RunWorkflowRequest$Outbound = {
    RequestBody?: { [k: string]: string } | undefined;
    wait?: boolean | undefined;
    workflowID: string;
};

/** @internal */
export const RunWorkflowRequest$outboundSchema: z.ZodType<
    RunWorkflowRequest$Outbound,
    z.ZodTypeDef,
    RunWorkflowRequest
> = z
    .object({
        requestBody: z.record(z.string()).optional(),
        wait: z.boolean().optional(),
        workflowID: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunWorkflowRequest$ {
    /** @deprecated use `RunWorkflowRequest$inboundSchema` instead. */
    export const inboundSchema = RunWorkflowRequest$inboundSchema;
    /** @deprecated use `RunWorkflowRequest$outboundSchema` instead. */
    export const outboundSchema = RunWorkflowRequest$outboundSchema;
    /** @deprecated use `RunWorkflowRequest$Outbound` instead. */
    export type Outbound = RunWorkflowRequest$Outbound;
}

/** @internal */
export const RunWorkflowResponse$inboundSchema: z.ZodType<
    RunWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        RunWorkflowResponse: shared.RunWorkflowResponse$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            RunWorkflowResponse: "runWorkflowResponse",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type RunWorkflowResponse$Outbound = {
    ContentType: string;
    RunWorkflowResponse?: shared.RunWorkflowResponse$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const RunWorkflowResponse$outboundSchema: z.ZodType<
    RunWorkflowResponse$Outbound,
    z.ZodTypeDef,
    RunWorkflowResponse
> = z
    .object({
        contentType: z.string(),
        runWorkflowResponse: shared.RunWorkflowResponse$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            runWorkflowResponse: "RunWorkflowResponse",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunWorkflowResponse$ {
    /** @deprecated use `RunWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = RunWorkflowResponse$inboundSchema;
    /** @deprecated use `RunWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = RunWorkflowResponse$outboundSchema;
    /** @deprecated use `RunWorkflowResponse$Outbound` instead. */
    export type Outbound = RunWorkflowResponse$Outbound;
}

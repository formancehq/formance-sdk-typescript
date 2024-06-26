/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
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
export namespace RunWorkflowRequest$ {
    export const inboundSchema: z.ZodType<RunWorkflowRequest, z.ZodTypeDef, unknown> = z
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

    export type Outbound = {
        RequestBody?: { [k: string]: string } | undefined;
        wait?: boolean | undefined;
        workflowID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunWorkflowRequest> = z
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
}

/** @internal */
export namespace RunWorkflowResponse$ {
    export const inboundSchema: z.ZodType<RunWorkflowResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            RunWorkflowResponse: shared.RunWorkflowResponse$.inboundSchema.optional(),
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

    export type Outbound = {
        ContentType: string;
        RunWorkflowResponse?: shared.RunWorkflowResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunWorkflowResponse> = z
        .object({
            contentType: z.string(),
            runWorkflowResponse: shared.RunWorkflowResponse$.outboundSchema.optional(),
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
}

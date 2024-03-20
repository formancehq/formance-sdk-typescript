/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type RunWorkflowRequest = {
    requestBody?: Record<string, string> | undefined;
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
     * General error
     */
    error?: shared.ErrorT | undefined;
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
    export type Inbound = {
        RequestBody?: Record<string, string> | undefined;
        wait?: boolean | undefined;
        workflowID: string;
    };

    export const inboundSchema: z.ZodType<RunWorkflowRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.record(z.string()).optional(),
            wait: z.boolean().optional(),
            workflowID: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                ...(v.wait === undefined ? null : { wait: v.wait }),
                workflowID: v.workflowID,
            };
        });

    export type Outbound = {
        RequestBody?: Record<string, string> | undefined;
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
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                ...(v.wait === undefined ? null : { wait: v.wait }),
                workflowID: v.workflowID,
            };
        });
}

/** @internal */
export namespace RunWorkflowResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        RunWorkflowResponse?: shared.RunWorkflowResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<RunWorkflowResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            RunWorkflowResponse: shared.RunWorkflowResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.RunWorkflowResponse === undefined
                    ? null
                    : { runWorkflowResponse: v.RunWorkflowResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        RunWorkflowResponse?: shared.RunWorkflowResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RunWorkflowResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            runWorkflowResponse: shared.RunWorkflowResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.runWorkflowResponse === undefined
                    ? null
                    : { RunWorkflowResponse: v.runWorkflowResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

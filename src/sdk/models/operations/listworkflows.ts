/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListWorkflowsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * General error
     */
    error?: shared.ErrorT | undefined;
    /**
     * List of workflows
     */
    listWorkflowsResponse?: shared.ListWorkflowsResponse | undefined;
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
export namespace ListWorkflowsResponse$ {
    export type Inbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Inbound | undefined;
        ListWorkflowsResponse?: shared.ListWorkflowsResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListWorkflowsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            ListWorkflowsResponse: shared.ListWorkflowsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Error === undefined ? null : { error: v.Error }),
                ...(v.ListWorkflowsResponse === undefined
                    ? null
                    : { listWorkflowsResponse: v.ListWorkflowsResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Error?: shared.ErrorT$.Outbound | undefined;
        ListWorkflowsResponse?: shared.ListWorkflowsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListWorkflowsResponse> = z
        .object({
            contentType: z.string(),
            error: shared.ErrorT$.outboundSchema.optional(),
            listWorkflowsResponse: shared.ListWorkflowsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.error === undefined ? null : { Error: v.error }),
                ...(v.listWorkflowsResponse === undefined
                    ? null
                    : { ListWorkflowsResponse: v.listWorkflowsResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

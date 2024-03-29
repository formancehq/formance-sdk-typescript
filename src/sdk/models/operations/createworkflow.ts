/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type CreateWorkflowResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Created workflow
     */
    createWorkflowResponse?: shared.CreateWorkflowResponse | undefined;
    /**
     * General error
     */
    error?: shared.ErrorT | undefined;
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
export namespace CreateWorkflowResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateWorkflowResponse?: shared.CreateWorkflowResponse$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateWorkflowResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateWorkflowResponse: shared.CreateWorkflowResponse$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateWorkflowResponse === undefined
                    ? null
                    : { createWorkflowResponse: v.CreateWorkflowResponse }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateWorkflowResponse?: shared.CreateWorkflowResponse$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWorkflowResponse> = z
        .object({
            contentType: z.string(),
            createWorkflowResponse: shared.CreateWorkflowResponse$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createWorkflowResponse === undefined
                    ? null
                    : { CreateWorkflowResponse: v.createWorkflowResponse }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

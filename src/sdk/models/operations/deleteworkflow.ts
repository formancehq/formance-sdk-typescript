/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteWorkflowRequest = {
    /**
     * The flow id
     */
    flowId: string;
};

export type DeleteWorkflowResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace DeleteWorkflowRequest$ {
    export type Inbound = {
        flowId: string;
    };

    export const inboundSchema: z.ZodType<DeleteWorkflowRequest, z.ZodTypeDef, Inbound> = z
        .object({
            flowId: z.string(),
        })
        .transform((v) => {
            return {
                flowId: v.flowId,
            };
        });

    export type Outbound = {
        flowId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWorkflowRequest> = z
        .object({
            flowId: z.string(),
        })
        .transform((v) => {
            return {
                flowId: v.flowId,
            };
        });
}

/** @internal */
export namespace DeleteWorkflowResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteWorkflowResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWorkflowResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

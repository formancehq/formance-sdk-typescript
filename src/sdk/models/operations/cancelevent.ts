/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CancelEventRequest = {
    /**
     * The instance id
     */
    instanceID: string;
};

export type CancelEventResponse = {
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
export namespace CancelEventRequest$ {
    export type Inbound = {
        instanceID: string;
    };

    export const inboundSchema: z.ZodType<CancelEventRequest, z.ZodTypeDef, Inbound> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });

    export type Outbound = {
        instanceID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelEventRequest> = z
        .object({
            instanceID: z.string(),
        })
        .transform((v) => {
            return {
                instanceID: v.instanceID,
            };
        });
}

/** @internal */
export namespace CancelEventResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CancelEventResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CancelEventResponse> = z
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

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type UpdateMetadataRequest = {
    requestBody: Record<string, string> | null;
    /**
     * The payment ID.
     */
    paymentId: string;
};

export type UpdateMetadataResponse = {
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
export namespace UpdateMetadataRequest$ {
    export type Inbound = {
        RequestBody: Record<string, string> | null;
        paymentId: string;
    };

    export const inboundSchema: z.ZodType<UpdateMetadataRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.nullable(z.record(z.string())),
            paymentId: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                paymentId: v.paymentId,
            };
        });

    export type Outbound = {
        RequestBody: Record<string, string> | null;
        paymentId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMetadataRequest> = z
        .object({
            requestBody: z.nullable(z.record(z.string())),
            paymentId: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                paymentId: v.paymentId,
            };
        });
}

/** @internal */
export namespace UpdateMetadataResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateMetadataResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMetadataResponse> = z
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

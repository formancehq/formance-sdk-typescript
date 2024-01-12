/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteSecretRequest = {
    /**
     * Client ID
     */
    clientId: string;
    /**
     * Secret ID
     */
    secretId: string;
};

export type DeleteSecretResponse = {
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
export namespace DeleteSecretRequest$ {
    export type Inbound = {
        clientId: string;
        secretId: string;
    };

    export const inboundSchema: z.ZodType<DeleteSecretRequest, z.ZodTypeDef, Inbound> = z
        .object({
            clientId: z.string(),
            secretId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                secretId: v.secretId,
            };
        });

    export type Outbound = {
        clientId: string;
        secretId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretRequest> = z
        .object({
            clientId: z.string(),
            secretId: z.string(),
        })
        .transform((v) => {
            return {
                clientId: v.clientId,
                secretId: v.secretId,
            };
        });
}

/** @internal */
export namespace DeleteSecretResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteSecretResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSecretResponse> = z
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

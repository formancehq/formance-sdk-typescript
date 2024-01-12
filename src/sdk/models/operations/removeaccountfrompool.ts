/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type RemoveAccountFromPoolRequest = {
    /**
     * The account ID.
     */
    accountId: string;
    /**
     * The pool ID.
     */
    poolId: string;
};

export type RemoveAccountFromPoolResponse = {
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
export namespace RemoveAccountFromPoolRequest$ {
    export type Inbound = {
        accountId: string;
        poolId: string;
    };

    export const inboundSchema: z.ZodType<RemoveAccountFromPoolRequest, z.ZodTypeDef, Inbound> = z
        .object({
            accountId: z.string(),
            poolId: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                poolId: v.poolId,
            };
        });

    export type Outbound = {
        accountId: string;
        poolId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveAccountFromPoolRequest> = z
        .object({
            accountId: z.string(),
            poolId: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.accountId,
                poolId: v.poolId,
            };
        });
}

/** @internal */
export namespace RemoveAccountFromPoolResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<RemoveAccountFromPoolResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveAccountFromPoolResponse> =
        z
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

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type V2DeleteAccountMetadataRequest = {
    /**
     * Account address
     */
    address: string;
    /**
     * The key to remove.
     */
    key: string;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type V2DeleteAccountMetadataResponse = {
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
export namespace V2DeleteAccountMetadataRequest$ {
    export type Inbound = {
        address: string;
        key: string;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2DeleteAccountMetadataRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            key: z.string(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                key: v.key,
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        address: string;
        key: string;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DeleteAccountMetadataRequest> =
        z
            .object({
                address: z.string(),
                key: z.string(),
                ledger: z.string(),
            })
            .transform((v) => {
                return {
                    address: v.address,
                    key: v.key,
                    ledger: v.ledger,
                };
            });
}

/** @internal */
export namespace V2DeleteAccountMetadataResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<V2DeleteAccountMetadataResponse, z.ZodTypeDef, Inbound> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2DeleteAccountMetadataResponse
    > = z
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
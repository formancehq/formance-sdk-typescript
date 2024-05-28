/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type AddMetadataToAccountRequest = {
    /**
     * metadata
     */
    requestBody: { [k: string]: any } | null;
    /**
     * Exact address of the account. It must match the following regular expressions pattern:
     *
     * @remarks
     * ```
     * ^\w+(:\w+)*$
     * ```
     *
     */
    address: string;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type AddMetadataToAccountResponse = {
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
export namespace AddMetadataToAccountRequest$ {
    export const inboundSchema: z.ZodType<AddMetadataToAccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            RequestBody: z.nullable(z.record(z.any())),
            address: z.string(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                address: v.address,
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        RequestBody: { [k: string]: any } | null;
        address: string;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMetadataToAccountRequest> = z
        .object({
            requestBody: z.nullable(z.record(z.any())),
            address: z.string(),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                address: v.address,
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace AddMetadataToAccountResponse$ {
    export const inboundSchema: z.ZodType<AddMetadataToAccountResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMetadataToAccountResponse> = z
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

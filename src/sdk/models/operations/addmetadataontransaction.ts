/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as z from "zod";

export type AddMetadataOnTransactionRequest = {
    /**
     * metadata
     */
    requestBody?: Record<string, any> | null | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Transaction ID.
     */
    txid: bigint;
};

export type AddMetadataOnTransactionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
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
export namespace AddMetadataOnTransactionRequest$ {
    export type Inbound = {
        RequestBody?: Record<string, any> | null | undefined;
        ledger: string;
        txid: number;
    };

    export const inboundSchema: z.ZodType<AddMetadataOnTransactionRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                RequestBody: z.nullable(z.record(z.any())).optional(),
                ledger: z.string(),
                txid: z.number().transform((v) => BigInt(v)),
            })
            .transform((v) => {
                return {
                    ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                    ledger: v.ledger,
                    txid: v.txid,
                };
            });

    export type Outbound = {
        RequestBody?: Record<string, any> | null | undefined;
        ledger: string;
        txid: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddMetadataOnTransactionRequest
    > = z
        .object({
            requestBody: z.nullable(z.record(z.any())).optional(),
            ledger: z.string(),
            txid: z.bigint().transform((v) => Number(v)),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                ledger: v.ledger,
                txid: v.txid,
            };
        });
}

/** @internal */
export namespace AddMetadataOnTransactionResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AddMetadataOnTransactionResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddMetadataOnTransactionResponse
    > = z
        .object({
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

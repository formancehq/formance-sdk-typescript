/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import { z } from "zod";

export type V2CountTransactionsRequest = {
    requestBody?: Record<string, any> | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
};

export type V2CountTransactionsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Error
     */
    v2ErrorResponse?: errors.V2ErrorResponse | undefined;
};

/** @internal */
export namespace V2CountTransactionsRequest$ {
    export type Inbound = {
        RequestBody?: Record<string, any> | undefined;
        ledger: string;
        pit?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2CountTransactionsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.record(z.any()).optional(),
            ledger: z.string(),
            pit: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                ledger: v.ledger,
                ...(v.pit === undefined ? null : { pit: v.pit }),
            };
        });

    export type Outbound = {
        RequestBody?: Record<string, any> | undefined;
        ledger: string;
        pit?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CountTransactionsRequest> = z
        .object({
            requestBody: z.record(z.any()).optional(),
            ledger: z.string(),
            pit: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                ledger: v.ledger,
                ...(v.pit === undefined ? null : { pit: v.pit }),
            };
        });
}

/** @internal */
export namespace V2CountTransactionsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        V2ErrorResponse?: errors.V2ErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2CountTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2ErrorResponse: errors.V2ErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2ErrorResponse === undefined
                    ? null
                    : { v2ErrorResponse: v.V2ErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        V2ErrorResponse?: errors.V2ErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CountTransactionsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2ErrorResponse: errors.V2ErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2ErrorResponse === undefined
                    ? null
                    : { V2ErrorResponse: v.v2ErrorResponse }),
            };
        });
}

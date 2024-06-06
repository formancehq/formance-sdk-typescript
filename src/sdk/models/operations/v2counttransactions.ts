/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type V2CountTransactionsRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
    query?: { [k: string]: any } | undefined;
};

export type V2CountTransactionsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: { [k: string]: Array<string> };
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
export namespace V2CountTransactionsRequest$ {
    export const inboundSchema: z.ZodType<V2CountTransactionsRequest, z.ZodTypeDef, unknown> =
        z.object({
            ledger: z.string(),
            pit: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            query: z.record(z.any()).optional(),
        });

    export type Outbound = {
        ledger: string;
        pit?: string | undefined;
        query?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CountTransactionsRequest> =
        z.object({
            ledger: z.string(),
            pit: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            query: z.record(z.any()).optional(),
        });
}

/** @internal */
export namespace V2CountTransactionsResponse$ {
    export const inboundSchema: z.ZodType<V2CountTransactionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                Headers: "headers",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        Headers: { [k: string]: Array<string> };
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CountTransactionsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                headers: "Headers",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

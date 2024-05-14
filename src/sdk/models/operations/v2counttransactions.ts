/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V2CountTransactionsRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
    pit?: Date | undefined;
    query?: Record<string, any> | undefined;
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
};

/** @internal */
export namespace V2CountTransactionsRequest$ {
    export const inboundSchema: z.ZodType<V2CountTransactionsRequest, z.ZodTypeDef, unknown> = z
        .object({
            ledger: z.string(),
            pit: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            query: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                ...(v.pit === undefined ? null : { pit: v.pit }),
                ...(v.query === undefined ? null : { query: v.query }),
            };
        });

    export type Outbound = {
        ledger: string;
        pit?: string | undefined;
        query?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CountTransactionsRequest> = z
        .object({
            ledger: z.string(),
            pit: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            query: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
                ...(v.pit === undefined ? null : { pit: v.pit }),
                ...(v.query === undefined ? null : { query: v.query }),
            };
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
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
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
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

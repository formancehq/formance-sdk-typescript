/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type CountAccountsRequest = {
    /**
     * Filter accounts by address pattern (regular expression placed between ^ and $).
     */
    address?: string | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]=value1&metadata[a.nested.key]=value2
     */
    metadata?: { [k: string]: any } | undefined;
};

export type CountAccountsResponse = {
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
export namespace CountAccountsRequest$ {
    export const inboundSchema: z.ZodType<CountAccountsRequest, z.ZodTypeDef, unknown> = z.object({
        address: z.string().optional(),
        ledger: z.string(),
        metadata: z.record(z.any()).optional(),
    });

    export type Outbound = {
        address?: string | undefined;
        ledger: string;
        metadata?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CountAccountsRequest> = z.object(
        {
            address: z.string().optional(),
            ledger: z.string(),
            metadata: z.record(z.any()).optional(),
        }
    );
}

/** @internal */
export namespace CountAccountsResponse$ {
    export const inboundSchema: z.ZodType<CountAccountsResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CountAccountsResponse> = z
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

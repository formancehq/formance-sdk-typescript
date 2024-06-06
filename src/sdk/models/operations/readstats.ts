/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ReadStatsRequest = {
    /**
     * name of the ledger
     */
    ledger: string;
};

export type ReadStatsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * OK
     */
    statsResponse?: shared.StatsResponse | undefined;
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
export namespace ReadStatsRequest$ {
    export const inboundSchema: z.ZodType<ReadStatsRequest, z.ZodTypeDef, unknown> = z.object({
        ledger: z.string(),
    });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadStatsRequest> = z.object({
        ledger: z.string(),
    });
}

/** @internal */
export namespace ReadStatsResponse$ {
    export const inboundSchema: z.ZodType<ReadStatsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatsResponse: shared.StatsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatsResponse: "statsResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatsResponse?: shared.StatsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadStatsResponse> = z
        .object({
            contentType: z.string(),
            statsResponse: shared.StatsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statsResponse: "StatsResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

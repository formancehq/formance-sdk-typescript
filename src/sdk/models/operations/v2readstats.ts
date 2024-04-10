/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type V2ReadStatsRequest = {
    /**
     * name of the ledger
     */
    ledger: string;
};

export type V2ReadStatsResponse = {
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
    /**
     * OK
     */
    v2StatsResponse?: shared.V2StatsResponse | undefined;
};

/** @internal */
export namespace V2ReadStatsRequest$ {
    export type Inbound = {
        ledger: string;
    };

    export const inboundSchema: z.ZodType<V2ReadStatsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ReadStatsRequest> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace V2ReadStatsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2StatsResponse?: shared.V2StatsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2ReadStatsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2StatsResponse: shared.V2StatsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2StatsResponse === undefined
                    ? null
                    : { v2StatsResponse: v.V2StatsResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2StatsResponse?: shared.V2StatsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ReadStatsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2StatsResponse: shared.V2StatsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2StatsResponse === undefined
                    ? null
                    : { V2StatsResponse: v.v2StatsResponse }),
            };
        });
}

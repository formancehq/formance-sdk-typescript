/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type V2GetVolumesWithBalancesRequest = {
    /**
     * Parameter used in pagination requests. Maximum page size is set to 15.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when this parameter is set.
     *
     */
    cursor?: string | undefined;
    endTime?: Date | undefined;
    /**
     * Group volumes and balance by the level of the segment of the address
     */
    groupBy?: number | undefined;
    /**
     * Use insertion date instead of effective date
     */
    insertionDate?: boolean | undefined;
    /**
     * Name of the ledger.
     */
    ledger: string;
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    query?: { [k: string]: any } | undefined;
    startTime?: Date | undefined;
};

export type V2GetVolumesWithBalancesResponse = {
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
    v2VolumesWithBalanceCursorResponse?: shared.V2VolumesWithBalanceCursorResponse | undefined;
};

/** @internal */
export const V2GetVolumesWithBalancesRequest$inboundSchema: z.ZodType<
    V2GetVolumesWithBalancesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.string().optional(),
    endTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
    groupBy: z.number().int().optional(),
    insertionDate: z.boolean().optional(),
    ledger: z.string(),
    pageSize: z.number().int().optional(),
    query: z.record(z.any()).optional(),
    startTime: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v))
        .optional(),
});

/** @internal */
export type V2GetVolumesWithBalancesRequest$Outbound = {
    cursor?: string | undefined;
    endTime?: string | undefined;
    groupBy?: number | undefined;
    insertionDate?: boolean | undefined;
    ledger: string;
    pageSize?: number | undefined;
    query?: { [k: string]: any } | undefined;
    startTime?: string | undefined;
};

/** @internal */
export const V2GetVolumesWithBalancesRequest$outboundSchema: z.ZodType<
    V2GetVolumesWithBalancesRequest$Outbound,
    z.ZodTypeDef,
    V2GetVolumesWithBalancesRequest
> = z.object({
    cursor: z.string().optional(),
    endTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
    groupBy: z.number().int().optional(),
    insertionDate: z.boolean().optional(),
    ledger: z.string(),
    pageSize: z.number().int().optional(),
    query: z.record(z.any()).optional(),
    startTime: z
        .date()
        .transform((v) => v.toISOString())
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetVolumesWithBalancesRequest$ {
    /** @deprecated use `V2GetVolumesWithBalancesRequest$inboundSchema` instead. */
    export const inboundSchema = V2GetVolumesWithBalancesRequest$inboundSchema;
    /** @deprecated use `V2GetVolumesWithBalancesRequest$outboundSchema` instead. */
    export const outboundSchema = V2GetVolumesWithBalancesRequest$outboundSchema;
    /** @deprecated use `V2GetVolumesWithBalancesRequest$Outbound` instead. */
    export type Outbound = V2GetVolumesWithBalancesRequest$Outbound;
}

/** @internal */
export const V2GetVolumesWithBalancesResponse$inboundSchema: z.ZodType<
    V2GetVolumesWithBalancesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        V2VolumesWithBalanceCursorResponse:
            shared.V2VolumesWithBalanceCursorResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            V2VolumesWithBalanceCursorResponse: "v2VolumesWithBalanceCursorResponse",
        });
    });

/** @internal */
export type V2GetVolumesWithBalancesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    V2VolumesWithBalanceCursorResponse?:
        | shared.V2VolumesWithBalanceCursorResponse$Outbound
        | undefined;
};

/** @internal */
export const V2GetVolumesWithBalancesResponse$outboundSchema: z.ZodType<
    V2GetVolumesWithBalancesResponse$Outbound,
    z.ZodTypeDef,
    V2GetVolumesWithBalancesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        v2VolumesWithBalanceCursorResponse:
            shared.V2VolumesWithBalanceCursorResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            v2VolumesWithBalanceCursorResponse: "V2VolumesWithBalanceCursorResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2GetVolumesWithBalancesResponse$ {
    /** @deprecated use `V2GetVolumesWithBalancesResponse$inboundSchema` instead. */
    export const inboundSchema = V2GetVolumesWithBalancesResponse$inboundSchema;
    /** @deprecated use `V2GetVolumesWithBalancesResponse$outboundSchema` instead. */
    export const outboundSchema = V2GetVolumesWithBalancesResponse$outboundSchema;
    /** @deprecated use `V2GetVolumesWithBalancesResponse$Outbound` instead. */
    export type Outbound = V2GetVolumesWithBalancesResponse$Outbound;
}

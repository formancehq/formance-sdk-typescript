/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetHoldsRequest = {
    /**
     * Parameter used in pagination requests.
     *
     * @remarks
     * Set to the value of next for the next page of results.
     * Set to the value of previous for the previous page of results.
     * No other parameters can be set when the pagination token is set.
     *
     */
    cursor?: string | undefined;
    /**
     * Filter holds by metadata key value pairs. Nested objects can be used as seen in the example below.
     */
    metadata?: Record<string, string> | undefined;
    /**
     * The maximum number of results to return per page
     */
    pageSize?: number | undefined;
    /**
     * The wallet to filter on
     */
    walletID?: string | undefined;
};

export type GetHoldsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Holds
     */
    getHoldsResponse?: shared.GetHoldsResponse | undefined;
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
    walletsErrorResponse?: errors.WalletsErrorResponse | undefined;
};

/** @internal */
export namespace GetHoldsRequest$ {
    export type Inbound = {
        cursor?: string | undefined;
        metadata?: Record<string, string> | undefined;
        pageSize?: number | undefined;
        walletID?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetHoldsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.string().optional(),
            metadata: z.record(z.string()).optional(),
            pageSize: z.number().int().default(15),
            walletID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.walletID === undefined ? null : { walletID: v.walletID }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        metadata?: Record<string, string> | undefined;
        pageSize: number;
        walletID?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetHoldsRequest> = z
        .object({
            cursor: z.string().optional(),
            metadata: z.record(z.string()).optional(),
            pageSize: z.number().int().default(15),
            walletID: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                pageSize: v.pageSize,
                ...(v.walletID === undefined ? null : { walletID: v.walletID }),
            };
        });
}

/** @internal */
export namespace GetHoldsResponse$ {
    export type Inbound = {
        ContentType: string;
        GetHoldsResponse?: shared.GetHoldsResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetHoldsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GetHoldsResponse: shared.GetHoldsResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: errors.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetHoldsResponse === undefined
                    ? null
                    : { getHoldsResponse: v.GetHoldsResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        GetHoldsResponse?: shared.GetHoldsResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetHoldsResponse> = z
        .object({
            contentType: z.string(),
            getHoldsResponse: shared.GetHoldsResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: errors.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getHoldsResponse === undefined
                    ? null
                    : { GetHoldsResponse: v.getHoldsResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

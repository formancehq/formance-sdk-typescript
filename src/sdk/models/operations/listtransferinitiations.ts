/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ListTransferInitiationsRequest = {
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
    /**
     * The maximum number of results to return per page.
     *
     * @remarks
     *
     */
    pageSize?: number | undefined;
    /**
     * Filters used to filter resources.
     *
     * @remarks
     *
     */
    query?: string | undefined;
    /**
     * Fields used to sort payments (default is date:desc).
     */
    sort?: Array<string> | undefined;
};

export type ListTransferInitiationsResponse = {
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
    transferInitiationsCursor?: shared.TransferInitiationsCursor | undefined;
};

/** @internal */
export namespace ListTransferInitiationsRequest$ {
    export type Inbound = {
        cursor?: string | undefined;
        pageSize?: number | undefined;
        query?: string | undefined;
        sort?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransferInitiationsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
            query: z.string().optional(),
            sort: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                pageSize: v.pageSize,
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });

    export type Outbound = {
        cursor?: string | undefined;
        pageSize: number;
        query?: string | undefined;
        sort?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransferInitiationsRequest> =
        z
            .object({
                cursor: z.string().optional(),
                pageSize: z.number().int().default(15),
                query: z.string().optional(),
                sort: z.array(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                    pageSize: v.pageSize,
                    ...(v.query === undefined ? null : { query: v.query }),
                    ...(v.sort === undefined ? null : { sort: v.sort }),
                };
            });
}

/** @internal */
export namespace ListTransferInitiationsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TransferInitiationsCursor?: shared.TransferInitiationsCursor$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListTransferInitiationsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                TransferInitiationsCursor:
                    shared.TransferInitiationsCursor$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.TransferInitiationsCursor === undefined
                        ? null
                        : { transferInitiationsCursor: v.TransferInitiationsCursor }),
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TransferInitiationsCursor?: shared.TransferInitiationsCursor$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListTransferInitiationsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            transferInitiationsCursor: shared.TransferInitiationsCursor$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.transferInitiationsCursor === undefined
                    ? null
                    : { TransferInitiationsCursor: v.transferInitiationsCursor }),
            };
        });
}

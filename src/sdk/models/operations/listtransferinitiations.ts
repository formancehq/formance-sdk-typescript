/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
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
    export const inboundSchema: z.ZodType<ListTransferInitiationsRequest, z.ZodTypeDef, unknown> =
        z.object({
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
            query: z.string().optional(),
            sort: z.array(z.string()).optional(),
        });

    export type Outbound = {
        cursor?: string | undefined;
        pageSize: number;
        query?: string | undefined;
        sort?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransferInitiationsRequest> =
        z.object({
            cursor: z.string().optional(),
            pageSize: z.number().int().default(15),
            query: z.string().optional(),
            sort: z.array(z.string()).optional(),
        });
}

/** @internal */
export namespace ListTransferInitiationsResponse$ {
    export const inboundSchema: z.ZodType<ListTransferInitiationsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                TransferInitiationsCursor:
                    shared.TransferInitiationsCursor$.inboundSchema.optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    ContentType: "contentType",
                    StatusCode: "statusCode",
                    RawResponse: "rawResponse",
                    TransferInitiationsCursor: "transferInitiationsCursor",
                });
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
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                transferInitiationsCursor: "TransferInitiationsCursor",
            });
        });
}

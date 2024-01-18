/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type ListLogsRequest = {
    /**
     * Pagination cursor, will return the logs after a given ID. (in descending order).
     */
    after?: string | undefined;
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
     * Filter transactions that occurred before this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is exclusive (for example, "2023-01-02T15:04:01Z" excludes the first second of 4th minute).
     *
     */
    endTime?: Date | undefined;
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
    /**
     * Filter transactions that occurred after this timestamp.
     *
     * @remarks
     * The format is RFC3339 and is inclusive (for example, "2023-01-02T15:04:01Z" includes the first second of 4th minute).
     *
     */
    startTime?: Date | undefined;
};

export type ListLogsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
    /**
     * OK
     */
    logsCursorResponse?: shared.LogsCursorResponse | undefined;
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
export namespace ListLogsRequest$ {
    export type Inbound = {
        after?: string | undefined;
        cursor?: string | undefined;
        endTime?: string | undefined;
        ledger: string;
        pageSize?: number | undefined;
        startTime?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListLogsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            after: z.string().optional(),
            cursor: z.string().optional(),
            endTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            ledger: z.string(),
            pageSize: z.number().int().default(15),
            startTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ledger: v.ledger,
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
            };
        });

    export type Outbound = {
        after?: string | undefined;
        cursor?: string | undefined;
        endTime?: string | undefined;
        ledger: string;
        pageSize: number;
        startTime?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListLogsRequest> = z
        .object({
            after: z.string().optional(),
            cursor: z.string().optional(),
            endTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            ledger: z.string(),
            pageSize: z.number().int().default(15),
            startTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ledger: v.ledger,
                pageSize: v.pageSize,
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
            };
        });
}

/** @internal */
export namespace ListLogsResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        LogsCursorResponse?: shared.LogsCursorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListLogsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            LogsCursorResponse: shared.LogsCursorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                ...(v.LogsCursorResponse === undefined
                    ? null
                    : { logsCursorResponse: v.LogsCursorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        LogsCursorResponse?: shared.LogsCursorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListLogsResponse> = z
        .object({
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            logsCursorResponse: shared.LogsCursorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                ...(v.logsCursorResponse === undefined
                    ? null
                    : { LogsCursorResponse: v.logsCursorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

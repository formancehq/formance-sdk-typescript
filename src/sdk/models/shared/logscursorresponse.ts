/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Log, Log$ } from "./log";
import { z } from "zod";

export type LogsCursorResponseCursor = {
    data: Array<Log>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type LogsCursorResponse = {
    cursor: LogsCursorResponseCursor;
};

/** @internal */
export namespace LogsCursorResponseCursor$ {
    export type Inbound = {
        data: Array<Log$.Inbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LogsCursorResponseCursor, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(Log$.inboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                hasMore: v.hasMore,
                ...(v.next === undefined ? null : { next: v.next }),
                pageSize: v.pageSize,
                ...(v.previous === undefined ? null : { previous: v.previous }),
            };
        });

    export type Outbound = {
        data: Array<Log$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogsCursorResponseCursor> = z
        .object({
            data: z.array(Log$.outboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                hasMore: v.hasMore,
                ...(v.next === undefined ? null : { next: v.next }),
                pageSize: v.pageSize,
                ...(v.previous === undefined ? null : { previous: v.previous }),
            };
        });
}

/** @internal */
export namespace LogsCursorResponse$ {
    export type Inbound = {
        cursor: LogsCursorResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<LogsCursorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.lazy(() => LogsCursorResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: LogsCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogsCursorResponse> = z
        .object({
            cursor: z.lazy(() => LogsCursorResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

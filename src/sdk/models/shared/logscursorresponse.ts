/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Log, Log$ } from "./log";
import * as z from "zod";

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
    export const inboundSchema: z.ZodType<LogsCursorResponseCursor, z.ZodTypeDef, unknown> =
        z.object({
            data: z.array(Log$.inboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });

    export type Outbound = {
        data: Array<Log$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogsCursorResponseCursor> =
        z.object({
            data: z.array(Log$.outboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });
}

/** @internal */
export namespace LogsCursorResponse$ {
    export const inboundSchema: z.ZodType<LogsCursorResponse, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => LogsCursorResponseCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: LogsCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LogsCursorResponse> = z.object({
        cursor: z.lazy(() => LogsCursorResponseCursor$.outboundSchema),
    });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Log, V2Log$ } from "./v2log";
import * as z from "zod";

export type V2LogsCursorResponseCursor = {
    data: Array<V2Log>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2LogsCursorResponse = {
    cursor: V2LogsCursorResponseCursor;
};

/** @internal */
export namespace V2LogsCursorResponseCursor$ {
    export const inboundSchema: z.ZodType<V2LogsCursorResponseCursor, z.ZodTypeDef, unknown> =
        z.object({
            data: z.array(V2Log$.inboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });

    export type Outbound = {
        data: Array<V2Log$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2LogsCursorResponseCursor> =
        z.object({
            data: z.array(V2Log$.outboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });
}

/** @internal */
export namespace V2LogsCursorResponse$ {
    export const inboundSchema: z.ZodType<V2LogsCursorResponse, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => V2LogsCursorResponseCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: V2LogsCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2LogsCursorResponse> = z.object(
        {
            cursor: z.lazy(() => V2LogsCursorResponseCursor$.outboundSchema),
        }
    );
}

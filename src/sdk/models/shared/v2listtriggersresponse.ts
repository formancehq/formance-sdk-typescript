/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2Trigger, V2Trigger$ } from "./v2trigger";
import * as z from "zod";

export type V2ListTriggersResponseCursor = {
    data: Array<V2Trigger>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2ListTriggersResponse = {
    cursor: V2ListTriggersResponseCursor;
};

/** @internal */
export namespace V2ListTriggersResponseCursor$ {
    export type Inbound = {
        data: Array<V2Trigger$.Inbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<V2ListTriggersResponseCursor, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(V2Trigger$.inboundSchema),
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
        data: Array<V2Trigger$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTriggersResponseCursor> = z
        .object({
            data: z.array(V2Trigger$.outboundSchema),
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
export namespace V2ListTriggersResponse$ {
    export type Inbound = {
        cursor: V2ListTriggersResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<V2ListTriggersResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.lazy(() => V2ListTriggersResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: V2ListTriggersResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ListTriggersResponse> = z
        .object({
            cursor: z.lazy(() => V2ListTriggersResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

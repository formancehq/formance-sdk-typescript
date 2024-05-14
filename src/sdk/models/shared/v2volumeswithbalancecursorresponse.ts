/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2VolumesWithBalance, V2VolumesWithBalance$ } from "./v2volumeswithbalance";
import * as z from "zod";

export type V2VolumesWithBalanceCursorResponseCursor = {
    data: Array<V2VolumesWithBalance>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2VolumesWithBalanceCursorResponse = {
    cursor: V2VolumesWithBalanceCursorResponseCursor;
};

/** @internal */
export namespace V2VolumesWithBalanceCursorResponseCursor$ {
    export const inboundSchema: z.ZodType<
        V2VolumesWithBalanceCursorResponseCursor,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            data: z.array(V2VolumesWithBalance$.inboundSchema),
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
        data: Array<V2VolumesWithBalance$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2VolumesWithBalanceCursorResponseCursor
    > = z
        .object({
            data: z.array(V2VolumesWithBalance$.outboundSchema),
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
export namespace V2VolumesWithBalanceCursorResponse$ {
    export const inboundSchema: z.ZodType<
        V2VolumesWithBalanceCursorResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            cursor: z.lazy(() => V2VolumesWithBalanceCursorResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: V2VolumesWithBalanceCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2VolumesWithBalanceCursorResponse
    > = z
        .object({
            cursor: z.lazy(() => V2VolumesWithBalanceCursorResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

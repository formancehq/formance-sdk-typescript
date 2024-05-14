/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2ExpandedTransaction, V2ExpandedTransaction$ } from "./v2expandedtransaction";
import * as z from "zod";

export type V2TransactionsCursorResponseCursor = {
    data: Array<V2ExpandedTransaction>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2TransactionsCursorResponse = {
    cursor: V2TransactionsCursorResponseCursor;
};

/** @internal */
export namespace V2TransactionsCursorResponseCursor$ {
    export const inboundSchema: z.ZodType<
        V2TransactionsCursorResponseCursor,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            data: z.array(V2ExpandedTransaction$.inboundSchema),
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
        data: Array<V2ExpandedTransaction$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2TransactionsCursorResponseCursor
    > = z
        .object({
            data: z.array(V2ExpandedTransaction$.outboundSchema),
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
export namespace V2TransactionsCursorResponse$ {
    export const inboundSchema: z.ZodType<V2TransactionsCursorResponse, z.ZodTypeDef, unknown> = z
        .object({
            cursor: z.lazy(() => V2TransactionsCursorResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: V2TransactionsCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2TransactionsCursorResponse> = z
        .object({
            cursor: z.lazy(() => V2TransactionsCursorResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

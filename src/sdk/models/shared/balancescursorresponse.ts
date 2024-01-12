/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type BalancesCursorResponseCursor = {
    data: Array<Record<string, Record<string, number>>>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type BalancesCursorResponse = {
    cursor: BalancesCursorResponseCursor;
};

/** @internal */
export namespace BalancesCursorResponseCursor$ {
    export type Inbound = {
        data: Array<Record<string, Record<string, number>>>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<BalancesCursorResponseCursor, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(z.record(z.record(z.number().int()))),
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
        data: Array<Record<string, Record<string, number>>>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesCursorResponseCursor> = z
        .object({
            data: z.array(z.record(z.record(z.number().int()))),
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
export namespace BalancesCursorResponse$ {
    export type Inbound = {
        cursor: BalancesCursorResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<BalancesCursorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.lazy(() => BalancesCursorResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: BalancesCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesCursorResponse> = z
        .object({
            cursor: z.lazy(() => BalancesCursorResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WalletsTransaction, WalletsTransaction$ } from "./walletstransaction";
import * as z from "zod";

export type GetTransactionsResponseCursor = {
    data: Array<WalletsTransaction>;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type GetTransactionsResponse = {
    cursor: GetTransactionsResponseCursor;
};

/** @internal */
export namespace GetTransactionsResponseCursor$ {
    export type Inbound = {
        data: Array<WalletsTransaction$.Inbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTransactionsResponseCursor, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(WalletsTransaction$.inboundSchema),
            hasMore: z.boolean().optional(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.hasMore === undefined ? null : { hasMore: v.hasMore }),
                ...(v.next === undefined ? null : { next: v.next }),
                pageSize: v.pageSize,
                ...(v.previous === undefined ? null : { previous: v.previous }),
            };
        });

    export type Outbound = {
        data: Array<WalletsTransaction$.Outbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsResponseCursor> =
        z
            .object({
                data: z.array(WalletsTransaction$.outboundSchema),
                hasMore: z.boolean().optional(),
                next: z.string().optional(),
                pageSize: z.number().int(),
                previous: z.string().optional(),
            })
            .transform((v) => {
                return {
                    data: v.data,
                    ...(v.hasMore === undefined ? null : { hasMore: v.hasMore }),
                    ...(v.next === undefined ? null : { next: v.next }),
                    pageSize: v.pageSize,
                    ...(v.previous === undefined ? null : { previous: v.previous }),
                };
            });
}

/** @internal */
export namespace GetTransactionsResponse$ {
    export type Inbound = {
        cursor: GetTransactionsResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetTransactionsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.lazy(() => GetTransactionsResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: GetTransactionsResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionsResponse> = z
        .object({
            cursor: z.lazy(() => GetTransactionsResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

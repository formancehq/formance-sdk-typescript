/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Hold, Hold$ } from "./hold";
import * as z from "zod";

export type GetHoldsResponseCursor = {
    data: Array<Hold>;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type GetHoldsResponse = {
    cursor: GetHoldsResponseCursor;
};

/** @internal */
export namespace GetHoldsResponseCursor$ {
    export type Inbound = {
        data: Array<Hold$.Inbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetHoldsResponseCursor, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(Hold$.inboundSchema),
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
        data: Array<Hold$.Outbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetHoldsResponseCursor> = z
        .object({
            data: z.array(Hold$.outboundSchema),
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
export namespace GetHoldsResponse$ {
    export type Inbound = {
        cursor: GetHoldsResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetHoldsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            cursor: z.lazy(() => GetHoldsResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: GetHoldsResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetHoldsResponse> = z
        .object({
            cursor: z.lazy(() => GetHoldsResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

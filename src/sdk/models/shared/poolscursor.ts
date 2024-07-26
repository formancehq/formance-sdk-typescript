/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { Pool, Pool$inboundSchema, Pool$Outbound, Pool$outboundSchema } from "./pool.js";
import * as z from "zod";

export type PoolsCursorCursor = {
    data: Array<Pool>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type PoolsCursor = {
    cursor: PoolsCursorCursor;
};

/** @internal */
export const PoolsCursorCursor$inboundSchema: z.ZodType<PoolsCursorCursor, z.ZodTypeDef, unknown> =
    z.object({
        data: z.array(Pool$inboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });

/** @internal */
export type PoolsCursorCursor$Outbound = {
    data: Array<Pool$Outbound>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

/** @internal */
export const PoolsCursorCursor$outboundSchema: z.ZodType<
    PoolsCursorCursor$Outbound,
    z.ZodTypeDef,
    PoolsCursorCursor
> = z.object({
    data: z.array(Pool$outboundSchema),
    hasMore: z.boolean(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PoolsCursorCursor$ {
    /** @deprecated use `PoolsCursorCursor$inboundSchema` instead. */
    export const inboundSchema = PoolsCursorCursor$inboundSchema;
    /** @deprecated use `PoolsCursorCursor$outboundSchema` instead. */
    export const outboundSchema = PoolsCursorCursor$outboundSchema;
    /** @deprecated use `PoolsCursorCursor$Outbound` instead. */
    export type Outbound = PoolsCursorCursor$Outbound;
}

/** @internal */
export const PoolsCursor$inboundSchema: z.ZodType<PoolsCursor, z.ZodTypeDef, unknown> = z.object({
    cursor: z.lazy(() => PoolsCursorCursor$inboundSchema),
});

/** @internal */
export type PoolsCursor$Outbound = {
    cursor: PoolsCursorCursor$Outbound;
};

/** @internal */
export const PoolsCursor$outboundSchema: z.ZodType<
    PoolsCursor$Outbound,
    z.ZodTypeDef,
    PoolsCursor
> = z.object({
    cursor: z.lazy(() => PoolsCursorCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PoolsCursor$ {
    /** @deprecated use `PoolsCursor$inboundSchema` instead. */
    export const inboundSchema = PoolsCursor$inboundSchema;
    /** @deprecated use `PoolsCursor$outboundSchema` instead. */
    export const outboundSchema = PoolsCursor$outboundSchema;
    /** @deprecated use `PoolsCursor$Outbound` instead. */
    export type Outbound = PoolsCursor$Outbound;
}

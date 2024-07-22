/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AccountBalance,
    AccountBalance$inboundSchema,
    AccountBalance$Outbound,
    AccountBalance$outboundSchema,
} from "./accountbalance.js";
import * as z from "zod";

export type BalancesCursorCursor = {
    data: Array<AccountBalance>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type BalancesCursor = {
    cursor: BalancesCursorCursor;
};

/** @internal */
export const BalancesCursorCursor$inboundSchema: z.ZodType<
    BalancesCursorCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(AccountBalance$inboundSchema),
    hasMore: z.boolean(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/** @internal */
export type BalancesCursorCursor$Outbound = {
    data: Array<AccountBalance$Outbound>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

/** @internal */
export const BalancesCursorCursor$outboundSchema: z.ZodType<
    BalancesCursorCursor$Outbound,
    z.ZodTypeDef,
    BalancesCursorCursor
> = z.object({
    data: z.array(AccountBalance$outboundSchema),
    hasMore: z.boolean(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesCursorCursor$ {
    /** @deprecated use `BalancesCursorCursor$inboundSchema` instead. */
    export const inboundSchema = BalancesCursorCursor$inboundSchema;
    /** @deprecated use `BalancesCursorCursor$outboundSchema` instead. */
    export const outboundSchema = BalancesCursorCursor$outboundSchema;
    /** @deprecated use `BalancesCursorCursor$Outbound` instead. */
    export type Outbound = BalancesCursorCursor$Outbound;
}

/** @internal */
export const BalancesCursor$inboundSchema: z.ZodType<BalancesCursor, z.ZodTypeDef, unknown> =
    z.object({
        cursor: z.lazy(() => BalancesCursorCursor$inboundSchema),
    });

/** @internal */
export type BalancesCursor$Outbound = {
    cursor: BalancesCursorCursor$Outbound;
};

/** @internal */
export const BalancesCursor$outboundSchema: z.ZodType<
    BalancesCursor$Outbound,
    z.ZodTypeDef,
    BalancesCursor
> = z.object({
    cursor: z.lazy(() => BalancesCursorCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalancesCursor$ {
    /** @deprecated use `BalancesCursor$inboundSchema` instead. */
    export const inboundSchema = BalancesCursor$inboundSchema;
    /** @deprecated use `BalancesCursor$outboundSchema` instead. */
    export const outboundSchema = BalancesCursor$outboundSchema;
    /** @deprecated use `BalancesCursor$Outbound` instead. */
    export type Outbound = BalancesCursor$Outbound;
}

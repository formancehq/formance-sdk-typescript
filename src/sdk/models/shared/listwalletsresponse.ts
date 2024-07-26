/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { Wallet, Wallet$inboundSchema, Wallet$Outbound, Wallet$outboundSchema } from "./wallet.js";
import * as z from "zod";

export type ListWalletsResponseCursor = {
    data: Array<Wallet>;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type ListWalletsResponse = {
    cursor: ListWalletsResponseCursor;
};

/** @internal */
export const ListWalletsResponseCursor$inboundSchema: z.ZodType<
    ListWalletsResponseCursor,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.array(Wallet$inboundSchema),
    hasMore: z.boolean().optional(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/** @internal */
export type ListWalletsResponseCursor$Outbound = {
    data: Array<Wallet$Outbound>;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

/** @internal */
export const ListWalletsResponseCursor$outboundSchema: z.ZodType<
    ListWalletsResponseCursor$Outbound,
    z.ZodTypeDef,
    ListWalletsResponseCursor
> = z.object({
    data: z.array(Wallet$outboundSchema),
    hasMore: z.boolean().optional(),
    next: z.string().optional(),
    pageSize: z.number().int(),
    previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWalletsResponseCursor$ {
    /** @deprecated use `ListWalletsResponseCursor$inboundSchema` instead. */
    export const inboundSchema = ListWalletsResponseCursor$inboundSchema;
    /** @deprecated use `ListWalletsResponseCursor$outboundSchema` instead. */
    export const outboundSchema = ListWalletsResponseCursor$outboundSchema;
    /** @deprecated use `ListWalletsResponseCursor$Outbound` instead. */
    export type Outbound = ListWalletsResponseCursor$Outbound;
}

/** @internal */
export const ListWalletsResponse$inboundSchema: z.ZodType<
    ListWalletsResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    cursor: z.lazy(() => ListWalletsResponseCursor$inboundSchema),
});

/** @internal */
export type ListWalletsResponse$Outbound = {
    cursor: ListWalletsResponseCursor$Outbound;
};

/** @internal */
export const ListWalletsResponse$outboundSchema: z.ZodType<
    ListWalletsResponse$Outbound,
    z.ZodTypeDef,
    ListWalletsResponse
> = z.object({
    cursor: z.lazy(() => ListWalletsResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWalletsResponse$ {
    /** @deprecated use `ListWalletsResponse$inboundSchema` instead. */
    export const inboundSchema = ListWalletsResponse$inboundSchema;
    /** @deprecated use `ListWalletsResponse$outboundSchema` instead. */
    export const outboundSchema = ListWalletsResponse$outboundSchema;
    /** @deprecated use `ListWalletsResponse$Outbound` instead. */
    export type Outbound = ListWalletsResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountBalance, AccountBalance$ } from "./accountbalance";
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
export namespace BalancesCursorCursor$ {
    export const inboundSchema: z.ZodType<BalancesCursorCursor, z.ZodTypeDef, unknown> = z.object({
        data: z.array(AccountBalance$.inboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });

    export type Outbound = {
        data: Array<AccountBalance$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesCursorCursor> = z.object(
        {
            data: z.array(AccountBalance$.outboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        }
    );
}

/** @internal */
export namespace BalancesCursor$ {
    export const inboundSchema: z.ZodType<BalancesCursor, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => BalancesCursorCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: BalancesCursorCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BalancesCursor> = z.object({
        cursor: z.lazy(() => BalancesCursorCursor$.outboundSchema),
    });
}

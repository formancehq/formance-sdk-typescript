/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PaymentsAccount, PaymentsAccount$ } from "./paymentsaccount";
import * as z from "zod";

export type Cursor = {
    data: Array<PaymentsAccount>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type AccountsCursor = {
    cursor: Cursor;
};

/** @internal */
export namespace Cursor$ {
    export const inboundSchema: z.ZodType<Cursor, z.ZodTypeDef, unknown> = z.object({
        data: z.array(PaymentsAccount$.inboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });

    export type Outbound = {
        data: Array<PaymentsAccount$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Cursor> = z.object({
        data: z.array(PaymentsAccount$.outboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });
}

/** @internal */
export namespace AccountsCursor$ {
    export const inboundSchema: z.ZodType<AccountsCursor, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => Cursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: Cursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountsCursor> = z.object({
        cursor: z.lazy(() => Cursor$.outboundSchema),
    });
}

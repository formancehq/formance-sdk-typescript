/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BankAccount, BankAccount$ } from "./bankaccount";
import * as z from "zod";

export type BankAccountsCursorCursor = {
    data: Array<BankAccount>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type BankAccountsCursor = {
    cursor: BankAccountsCursorCursor;
};

/** @internal */
export namespace BankAccountsCursorCursor$ {
    export const inboundSchema: z.ZodType<BankAccountsCursorCursor, z.ZodTypeDef, unknown> =
        z.object({
            data: z.array(BankAccount$.inboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });

    export type Outbound = {
        data: Array<BankAccount$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankAccountsCursorCursor> =
        z.object({
            data: z.array(BankAccount$.outboundSchema),
            hasMore: z.boolean(),
            next: z.string().optional(),
            pageSize: z.number().int(),
            previous: z.string().optional(),
        });
}

/** @internal */
export namespace BankAccountsCursor$ {
    export const inboundSchema: z.ZodType<BankAccountsCursor, z.ZodTypeDef, unknown> = z.object({
        cursor: z.lazy(() => BankAccountsCursorCursor$.inboundSchema),
    });

    export type Outbound = {
        cursor: BankAccountsCursorCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BankAccountsCursor> = z.object({
        cursor: z.lazy(() => BankAccountsCursorCursor$.outboundSchema),
    });
}

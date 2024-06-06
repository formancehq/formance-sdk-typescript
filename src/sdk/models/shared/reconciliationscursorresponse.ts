/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Reconciliation, Reconciliation$ } from "./reconciliation";
import * as z from "zod";

export type ReconciliationsCursorResponseCursor = {
    data: Array<Reconciliation>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type ReconciliationsCursorResponse = {
    cursor: ReconciliationsCursorResponseCursor;
};

/** @internal */
export namespace ReconciliationsCursorResponseCursor$ {
    export const inboundSchema: z.ZodType<
        ReconciliationsCursorResponseCursor,
        z.ZodTypeDef,
        unknown
    > = z.object({
        data: z.array(Reconciliation$.inboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });

    export type Outbound = {
        data: Array<Reconciliation$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReconciliationsCursorResponseCursor
    > = z.object({
        data: z.array(Reconciliation$.outboundSchema),
        hasMore: z.boolean(),
        next: z.string().optional(),
        pageSize: z.number().int(),
        previous: z.string().optional(),
    });
}

/** @internal */
export namespace ReconciliationsCursorResponse$ {
    export const inboundSchema: z.ZodType<ReconciliationsCursorResponse, z.ZodTypeDef, unknown> =
        z.object({
            cursor: z.lazy(() => ReconciliationsCursorResponseCursor$.inboundSchema),
        });

    export type Outbound = {
        cursor: ReconciliationsCursorResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReconciliationsCursorResponse> =
        z.object({
            cursor: z.lazy(() => ReconciliationsCursorResponseCursor$.outboundSchema),
        });
}

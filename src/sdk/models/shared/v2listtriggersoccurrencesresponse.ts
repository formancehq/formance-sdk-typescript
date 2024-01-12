/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { V2TriggerOccurrence, V2TriggerOccurrence$ } from "./v2triggeroccurrence";
import { z } from "zod";

export type V2ListTriggersOccurrencesResponseCursor = {
    data: Array<V2TriggerOccurrence>;
    hasMore: boolean;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type V2ListTriggersOccurrencesResponse = {
    cursor: V2ListTriggersOccurrencesResponseCursor;
};

/** @internal */
export namespace V2ListTriggersOccurrencesResponseCursor$ {
    export type Inbound = {
        data: Array<V2TriggerOccurrence$.Inbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        V2ListTriggersOccurrencesResponseCursor,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.array(V2TriggerOccurrence$.inboundSchema),
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
        data: Array<V2TriggerOccurrence$.Outbound>;
        hasMore: boolean;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2ListTriggersOccurrencesResponseCursor
    > = z
        .object({
            data: z.array(V2TriggerOccurrence$.outboundSchema),
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
export namespace V2ListTriggersOccurrencesResponse$ {
    export type Inbound = {
        cursor: V2ListTriggersOccurrencesResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        V2ListTriggersOccurrencesResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            cursor: z.lazy(() => V2ListTriggersOccurrencesResponseCursor$.inboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });

    export type Outbound = {
        cursor: V2ListTriggersOccurrencesResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        V2ListTriggersOccurrencesResponse
    > = z
        .object({
            cursor: z.lazy(() => V2ListTriggersOccurrencesResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

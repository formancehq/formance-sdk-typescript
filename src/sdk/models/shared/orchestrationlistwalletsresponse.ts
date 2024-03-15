/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Wallet, Wallet$ } from "./wallet";
import * as z from "zod";

export type OrchestrationListWalletsResponseCursor = {
    data: Array<Wallet>;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize: number;
    previous?: string | undefined;
};

export type OrchestrationListWalletsResponse = {
    cursor: OrchestrationListWalletsResponseCursor;
};

/** @internal */
export namespace OrchestrationListWalletsResponseCursor$ {
    export type Inbound = {
        data: Array<Wallet$.Inbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        OrchestrationListWalletsResponseCursor,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.array(Wallet$.inboundSchema),
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
        data: Array<Wallet$.Outbound>;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize: number;
        previous?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        OrchestrationListWalletsResponseCursor
    > = z
        .object({
            data: z.array(Wallet$.outboundSchema),
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
export namespace OrchestrationListWalletsResponse$ {
    export type Inbound = {
        cursor: OrchestrationListWalletsResponseCursor$.Inbound;
    };

    export const inboundSchema: z.ZodType<OrchestrationListWalletsResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                cursor: z.lazy(() => OrchestrationListWalletsResponseCursor$.inboundSchema),
            })
            .transform((v) => {
                return {
                    cursor: v.cursor,
                };
            });

    export type Outbound = {
        cursor: OrchestrationListWalletsResponseCursor$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        OrchestrationListWalletsResponse
    > = z
        .object({
            cursor: z.lazy(() => OrchestrationListWalletsResponseCursor$.outboundSchema),
        })
        .transform((v) => {
            return {
                cursor: v.cursor,
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Total = {
    relation?: string | undefined;
    value?: number | undefined;
};

export type ResponseCursor = {
    data?: Array<Record<string, any>> | undefined;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize?: number | undefined;
    previous?: string | undefined;
    total?: Total | undefined;
};

export type Response = {
    cursor?: ResponseCursor | undefined;
    /**
     * The payload
     */
    data?: Record<string, any> | undefined;
};

/** @internal */
export namespace Total$ {
    export const inboundSchema: z.ZodType<Total, z.ZodTypeDef, unknown> = z
        .object({
            relation: z.string().optional(),
            value: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.relation === undefined ? null : { relation: v.relation }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        relation?: string | undefined;
        value?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Total> = z
        .object({
            relation: z.string().optional(),
            value: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.relation === undefined ? null : { relation: v.relation }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace ResponseCursor$ {
    export const inboundSchema: z.ZodType<ResponseCursor, z.ZodTypeDef, unknown> = z
        .object({
            data: z.array(z.record(z.any())).optional(),
            hasMore: z.boolean().optional(),
            next: z.string().optional(),
            pageSize: z.number().int().optional(),
            previous: z.string().optional(),
            total: z.lazy(() => Total$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.hasMore === undefined ? null : { hasMore: v.hasMore }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });

    export type Outbound = {
        data?: Array<Record<string, any>> | undefined;
        hasMore?: boolean | undefined;
        next?: string | undefined;
        pageSize?: number | undefined;
        previous?: string | undefined;
        total?: Total$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseCursor> = z
        .object({
            data: z.array(z.record(z.any())).optional(),
            hasMore: z.boolean().optional(),
            next: z.string().optional(),
            pageSize: z.number().int().optional(),
            previous: z.string().optional(),
            total: z.lazy(() => Total$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.hasMore === undefined ? null : { hasMore: v.hasMore }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.total === undefined ? null : { total: v.total }),
            };
        });
}

/** @internal */
export namespace Response$ {
    export const inboundSchema: z.ZodType<Response, z.ZodTypeDef, unknown> = z
        .object({
            cursor: z.lazy(() => ResponseCursor$.inboundSchema).optional(),
            data: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        cursor?: ResponseCursor$.Outbound | undefined;
        data?: Record<string, any> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Response> = z
        .object({
            cursor: z.lazy(() => ResponseCursor$.outboundSchema).optional(),
            data: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

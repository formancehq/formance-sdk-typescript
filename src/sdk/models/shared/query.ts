/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type QueryRaw = {};

export type Query = {
    after?: Array<string> | undefined;
    cursor?: string | undefined;
    ledgers?: Array<string> | undefined;
    pageSize?: number | undefined;
    policy?: string | undefined;
    raw?: QueryRaw | undefined;
    sort?: string | undefined;
    target?: string | undefined;
    terms?: Array<string> | undefined;
};

/** @internal */
export namespace QueryRaw$ {
    export const inboundSchema: z.ZodType<QueryRaw, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryRaw> = z.object({});
}

/** @internal */
export namespace Query$ {
    export const inboundSchema: z.ZodType<Query, z.ZodTypeDef, unknown> = z
        .object({
            after: z.array(z.string()).optional(),
            cursor: z.string().optional(),
            ledgers: z.array(z.string()).optional(),
            pageSize: z.number().int().optional(),
            policy: z.string().optional(),
            raw: z.lazy(() => QueryRaw$.inboundSchema).optional(),
            sort: z.string().optional(),
            target: z.string().optional(),
            terms: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.ledgers === undefined ? null : { ledgers: v.ledgers }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.policy === undefined ? null : { policy: v.policy }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.terms === undefined ? null : { terms: v.terms }),
            };
        });

    export type Outbound = {
        after?: Array<string> | undefined;
        cursor?: string | undefined;
        ledgers?: Array<string> | undefined;
        pageSize?: number | undefined;
        policy?: string | undefined;
        raw?: QueryRaw$.Outbound | undefined;
        sort?: string | undefined;
        target?: string | undefined;
        terms?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Query> = z
        .object({
            after: z.array(z.string()).optional(),
            cursor: z.string().optional(),
            ledgers: z.array(z.string()).optional(),
            pageSize: z.number().int().optional(),
            policy: z.string().optional(),
            raw: z.lazy(() => QueryRaw$.outboundSchema).optional(),
            sort: z.string().optional(),
            target: z.string().optional(),
            terms: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.after === undefined ? null : { after: v.after }),
                ...(v.cursor === undefined ? null : { cursor: v.cursor }),
                ...(v.ledgers === undefined ? null : { ledgers: v.ledgers }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.policy === undefined ? null : { policy: v.policy }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.terms === undefined ? null : { terms: v.terms }),
            };
        });
}

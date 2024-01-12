/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Filter = {
    error?: string | undefined;
    match?: boolean | undefined;
};

export type Variables = {
    error?: string | undefined;
    value?: string | undefined;
};

export type V2TriggerTest = {
    filter?: Filter | undefined;
    variables?: Record<string, Variables> | undefined;
};

/** @internal */
export namespace Filter$ {
    export type Inbound = {
        error?: string | undefined;
        match?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<Filter, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.string().optional(),
            match: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.match === undefined ? null : { match: v.match }),
            };
        });

    export type Outbound = {
        error?: string | undefined;
        match?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Filter> = z
        .object({
            error: z.string().optional(),
            match: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.match === undefined ? null : { match: v.match }),
            };
        });
}

/** @internal */
export namespace Variables$ {
    export type Inbound = {
        error?: string | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Variables, z.ZodTypeDef, Inbound> = z
        .object({
            error: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        error?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Variables> = z
        .object({
            error: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.error === undefined ? null : { error: v.error }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace V2TriggerTest$ {
    export type Inbound = {
        filter?: Filter$.Inbound | undefined;
        variables?: Record<string, Variables$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<V2TriggerTest, z.ZodTypeDef, Inbound> = z
        .object({
            filter: z.lazy(() => Filter$.inboundSchema).optional(),
            variables: z.record(z.lazy(() => Variables$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.variables === undefined ? null : { variables: v.variables }),
            };
        });

    export type Outbound = {
        filter?: Filter$.Outbound | undefined;
        variables?: Record<string, Variables$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2TriggerTest> = z
        .object({
            filter: z.lazy(() => Filter$.outboundSchema).optional(),
            variables: z.record(z.lazy(() => Variables$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.variables === undefined ? null : { variables: v.variables }),
            };
        });
}

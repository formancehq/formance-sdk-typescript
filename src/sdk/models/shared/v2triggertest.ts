/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

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
    variables?: { [k: string]: Variables } | undefined;
};

/** @internal */
export const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z.object({
    error: z.string().optional(),
    match: z.boolean().optional(),
});

/** @internal */
export type Filter$Outbound = {
    error?: string | undefined;
    match?: boolean | undefined;
};

/** @internal */
export const Filter$outboundSchema: z.ZodType<Filter$Outbound, z.ZodTypeDef, Filter> = z.object({
    error: z.string().optional(),
    match: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
    /** @deprecated use `Filter$inboundSchema` instead. */
    export const inboundSchema = Filter$inboundSchema;
    /** @deprecated use `Filter$outboundSchema` instead. */
    export const outboundSchema = Filter$outboundSchema;
    /** @deprecated use `Filter$Outbound` instead. */
    export type Outbound = Filter$Outbound;
}

/** @internal */
export const Variables$inboundSchema: z.ZodType<Variables, z.ZodTypeDef, unknown> = z.object({
    error: z.string().optional(),
    value: z.string().optional(),
});

/** @internal */
export type Variables$Outbound = {
    error?: string | undefined;
    value?: string | undefined;
};

/** @internal */
export const Variables$outboundSchema: z.ZodType<Variables$Outbound, z.ZodTypeDef, Variables> =
    z.object({
        error: z.string().optional(),
        value: z.string().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variables$ {
    /** @deprecated use `Variables$inboundSchema` instead. */
    export const inboundSchema = Variables$inboundSchema;
    /** @deprecated use `Variables$outboundSchema` instead. */
    export const outboundSchema = Variables$outboundSchema;
    /** @deprecated use `Variables$Outbound` instead. */
    export type Outbound = Variables$Outbound;
}

/** @internal */
export const V2TriggerTest$inboundSchema: z.ZodType<V2TriggerTest, z.ZodTypeDef, unknown> =
    z.object({
        filter: z.lazy(() => Filter$inboundSchema).optional(),
        variables: z.record(z.lazy(() => Variables$inboundSchema)).optional(),
    });

/** @internal */
export type V2TriggerTest$Outbound = {
    filter?: Filter$Outbound | undefined;
    variables?: { [k: string]: Variables$Outbound } | undefined;
};

/** @internal */
export const V2TriggerTest$outboundSchema: z.ZodType<
    V2TriggerTest$Outbound,
    z.ZodTypeDef,
    V2TriggerTest
> = z.object({
    filter: z.lazy(() => Filter$outboundSchema).optional(),
    variables: z.record(z.lazy(() => Variables$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2TriggerTest$ {
    /** @deprecated use `V2TriggerTest$inboundSchema` instead. */
    export const inboundSchema = V2TriggerTest$inboundSchema;
    /** @deprecated use `V2TriggerTest$outboundSchema` instead. */
    export const outboundSchema = V2TriggerTest$outboundSchema;
    /** @deprecated use `V2TriggerTest$Outbound` instead. */
    export type Outbound = V2TriggerTest$Outbound;
}

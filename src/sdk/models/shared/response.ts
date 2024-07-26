/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Total = {
    relation?: string | undefined;
    value?: number | undefined;
};

export type ResponseCursor = {
    data?: Array<{ [k: string]: any }> | undefined;
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
    data?: { [k: string]: any } | undefined;
};

/** @internal */
export const Total$inboundSchema: z.ZodType<Total, z.ZodTypeDef, unknown> = z.object({
    relation: z.string().optional(),
    value: z.number().int().optional(),
});

/** @internal */
export type Total$Outbound = {
    relation?: string | undefined;
    value?: number | undefined;
};

/** @internal */
export const Total$outboundSchema: z.ZodType<Total$Outbound, z.ZodTypeDef, Total> = z.object({
    relation: z.string().optional(),
    value: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Total$ {
    /** @deprecated use `Total$inboundSchema` instead. */
    export const inboundSchema = Total$inboundSchema;
    /** @deprecated use `Total$outboundSchema` instead. */
    export const outboundSchema = Total$outboundSchema;
    /** @deprecated use `Total$Outbound` instead. */
    export type Outbound = Total$Outbound;
}

/** @internal */
export const ResponseCursor$inboundSchema: z.ZodType<ResponseCursor, z.ZodTypeDef, unknown> =
    z.object({
        data: z.array(z.record(z.any())).optional(),
        hasMore: z.boolean().optional(),
        next: z.string().optional(),
        pageSize: z.number().int().optional(),
        previous: z.string().optional(),
        total: z.lazy(() => Total$inboundSchema).optional(),
    });

/** @internal */
export type ResponseCursor$Outbound = {
    data?: Array<{ [k: string]: any }> | undefined;
    hasMore?: boolean | undefined;
    next?: string | undefined;
    pageSize?: number | undefined;
    previous?: string | undefined;
    total?: Total$Outbound | undefined;
};

/** @internal */
export const ResponseCursor$outboundSchema: z.ZodType<
    ResponseCursor$Outbound,
    z.ZodTypeDef,
    ResponseCursor
> = z.object({
    data: z.array(z.record(z.any())).optional(),
    hasMore: z.boolean().optional(),
    next: z.string().optional(),
    pageSize: z.number().int().optional(),
    previous: z.string().optional(),
    total: z.lazy(() => Total$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseCursor$ {
    /** @deprecated use `ResponseCursor$inboundSchema` instead. */
    export const inboundSchema = ResponseCursor$inboundSchema;
    /** @deprecated use `ResponseCursor$outboundSchema` instead. */
    export const outboundSchema = ResponseCursor$outboundSchema;
    /** @deprecated use `ResponseCursor$Outbound` instead. */
    export type Outbound = ResponseCursor$Outbound;
}

/** @internal */
export const Response$inboundSchema: z.ZodType<Response, z.ZodTypeDef, unknown> = z.object({
    cursor: z.lazy(() => ResponseCursor$inboundSchema).optional(),
    data: z.record(z.any()).optional(),
});

/** @internal */
export type Response$Outbound = {
    cursor?: ResponseCursor$Outbound | undefined;
    data?: { [k: string]: any } | undefined;
};

/** @internal */
export const Response$outboundSchema: z.ZodType<Response$Outbound, z.ZodTypeDef, Response> =
    z.object({
        cursor: z.lazy(() => ResponseCursor$outboundSchema).optional(),
        data: z.record(z.any()).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Response$ {
    /** @deprecated use `Response$inboundSchema` instead. */
    export const inboundSchema = Response$inboundSchema;
    /** @deprecated use `Response$outboundSchema` instead. */
    export const outboundSchema = Response$outboundSchema;
    /** @deprecated use `Response$Outbound` instead. */
    export type Outbound = Response$Outbound;
}

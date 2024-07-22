/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Key = {
    dataType: string;
    required: boolean;
};

export type ConnectorsConfigsResponseConnector = {
    key: Key;
};

export type ConnectorsConfigsResponseData = {
    connector: ConnectorsConfigsResponseConnector;
};

export type ConnectorsConfigsResponse = {
    data: ConnectorsConfigsResponseData;
};

/** @internal */
export const Key$inboundSchema: z.ZodType<Key, z.ZodTypeDef, unknown> = z.object({
    dataType: z.string(),
    required: z.boolean(),
});

/** @internal */
export type Key$Outbound = {
    dataType: string;
    required: boolean;
};

/** @internal */
export const Key$outboundSchema: z.ZodType<Key$Outbound, z.ZodTypeDef, Key> = z.object({
    dataType: z.string(),
    required: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Key$ {
    /** @deprecated use `Key$inboundSchema` instead. */
    export const inboundSchema = Key$inboundSchema;
    /** @deprecated use `Key$outboundSchema` instead. */
    export const outboundSchema = Key$outboundSchema;
    /** @deprecated use `Key$Outbound` instead. */
    export type Outbound = Key$Outbound;
}

/** @internal */
export const ConnectorsConfigsResponseConnector$inboundSchema: z.ZodType<
    ConnectorsConfigsResponseConnector,
    z.ZodTypeDef,
    unknown
> = z.object({
    key: z.lazy(() => Key$inboundSchema),
});

/** @internal */
export type ConnectorsConfigsResponseConnector$Outbound = {
    key: Key$Outbound;
};

/** @internal */
export const ConnectorsConfigsResponseConnector$outboundSchema: z.ZodType<
    ConnectorsConfigsResponseConnector$Outbound,
    z.ZodTypeDef,
    ConnectorsConfigsResponseConnector
> = z.object({
    key: z.lazy(() => Key$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsConfigsResponseConnector$ {
    /** @deprecated use `ConnectorsConfigsResponseConnector$inboundSchema` instead. */
    export const inboundSchema = ConnectorsConfigsResponseConnector$inboundSchema;
    /** @deprecated use `ConnectorsConfigsResponseConnector$outboundSchema` instead. */
    export const outboundSchema = ConnectorsConfigsResponseConnector$outboundSchema;
    /** @deprecated use `ConnectorsConfigsResponseConnector$Outbound` instead. */
    export type Outbound = ConnectorsConfigsResponseConnector$Outbound;
}

/** @internal */
export const ConnectorsConfigsResponseData$inboundSchema: z.ZodType<
    ConnectorsConfigsResponseData,
    z.ZodTypeDef,
    unknown
> = z.object({
    connector: z.lazy(() => ConnectorsConfigsResponseConnector$inboundSchema),
});

/** @internal */
export type ConnectorsConfigsResponseData$Outbound = {
    connector: ConnectorsConfigsResponseConnector$Outbound;
};

/** @internal */
export const ConnectorsConfigsResponseData$outboundSchema: z.ZodType<
    ConnectorsConfigsResponseData$Outbound,
    z.ZodTypeDef,
    ConnectorsConfigsResponseData
> = z.object({
    connector: z.lazy(() => ConnectorsConfigsResponseConnector$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsConfigsResponseData$ {
    /** @deprecated use `ConnectorsConfigsResponseData$inboundSchema` instead. */
    export const inboundSchema = ConnectorsConfigsResponseData$inboundSchema;
    /** @deprecated use `ConnectorsConfigsResponseData$outboundSchema` instead. */
    export const outboundSchema = ConnectorsConfigsResponseData$outboundSchema;
    /** @deprecated use `ConnectorsConfigsResponseData$Outbound` instead. */
    export type Outbound = ConnectorsConfigsResponseData$Outbound;
}

/** @internal */
export const ConnectorsConfigsResponse$inboundSchema: z.ZodType<
    ConnectorsConfigsResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: z.lazy(() => ConnectorsConfigsResponseData$inboundSchema),
});

/** @internal */
export type ConnectorsConfigsResponse$Outbound = {
    data: ConnectorsConfigsResponseData$Outbound;
};

/** @internal */
export const ConnectorsConfigsResponse$outboundSchema: z.ZodType<
    ConnectorsConfigsResponse$Outbound,
    z.ZodTypeDef,
    ConnectorsConfigsResponse
> = z.object({
    data: z.lazy(() => ConnectorsConfigsResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsConfigsResponse$ {
    /** @deprecated use `ConnectorsConfigsResponse$inboundSchema` instead. */
    export const inboundSchema = ConnectorsConfigsResponse$inboundSchema;
    /** @deprecated use `ConnectorsConfigsResponse$outboundSchema` instead. */
    export const outboundSchema = ConnectorsConfigsResponse$outboundSchema;
    /** @deprecated use `ConnectorsConfigsResponse$Outbound` instead. */
    export type Outbound = ConnectorsConfigsResponse$Outbound;
}

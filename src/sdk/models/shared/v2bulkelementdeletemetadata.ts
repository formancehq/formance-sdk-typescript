/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    V2TargetId,
    V2TargetId$inboundSchema,
    V2TargetId$Outbound,
    V2TargetId$outboundSchema,
} from "./v2targetid.js";
import {
    V2TargetType,
    V2TargetType$inboundSchema,
    V2TargetType$outboundSchema,
} from "./v2targettype.js";
import * as z from "zod";

export type V2BulkElementDeleteMetadataData = {
    key: string;
    targetId: V2TargetId;
    targetType: V2TargetType;
};

export type V2BulkElementDeleteMetadata = {
    action: string;
    data?: V2BulkElementDeleteMetadataData | undefined;
    ik?: string | undefined;
};

/** @internal */
export const V2BulkElementDeleteMetadataData$inboundSchema: z.ZodType<
    V2BulkElementDeleteMetadataData,
    z.ZodTypeDef,
    unknown
> = z.object({
    key: z.string(),
    targetId: V2TargetId$inboundSchema,
    targetType: V2TargetType$inboundSchema,
});

/** @internal */
export type V2BulkElementDeleteMetadataData$Outbound = {
    key: string;
    targetId: V2TargetId$Outbound;
    targetType: string;
};

/** @internal */
export const V2BulkElementDeleteMetadataData$outboundSchema: z.ZodType<
    V2BulkElementDeleteMetadataData$Outbound,
    z.ZodTypeDef,
    V2BulkElementDeleteMetadataData
> = z.object({
    key: z.string(),
    targetId: V2TargetId$outboundSchema,
    targetType: V2TargetType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementDeleteMetadataData$ {
    /** @deprecated use `V2BulkElementDeleteMetadataData$inboundSchema` instead. */
    export const inboundSchema = V2BulkElementDeleteMetadataData$inboundSchema;
    /** @deprecated use `V2BulkElementDeleteMetadataData$outboundSchema` instead. */
    export const outboundSchema = V2BulkElementDeleteMetadataData$outboundSchema;
    /** @deprecated use `V2BulkElementDeleteMetadataData$Outbound` instead. */
    export type Outbound = V2BulkElementDeleteMetadataData$Outbound;
}

/** @internal */
export const V2BulkElementDeleteMetadata$inboundSchema: z.ZodType<
    V2BulkElementDeleteMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({
    action: z.string(),
    data: z.lazy(() => V2BulkElementDeleteMetadataData$inboundSchema).optional(),
    ik: z.string().optional(),
});

/** @internal */
export type V2BulkElementDeleteMetadata$Outbound = {
    action: string;
    data?: V2BulkElementDeleteMetadataData$Outbound | undefined;
    ik?: string | undefined;
};

/** @internal */
export const V2BulkElementDeleteMetadata$outboundSchema: z.ZodType<
    V2BulkElementDeleteMetadata$Outbound,
    z.ZodTypeDef,
    V2BulkElementDeleteMetadata
> = z.object({
    action: z.string(),
    data: z.lazy(() => V2BulkElementDeleteMetadataData$outboundSchema).optional(),
    ik: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementDeleteMetadata$ {
    /** @deprecated use `V2BulkElementDeleteMetadata$inboundSchema` instead. */
    export const inboundSchema = V2BulkElementDeleteMetadata$inboundSchema;
    /** @deprecated use `V2BulkElementDeleteMetadata$outboundSchema` instead. */
    export const outboundSchema = V2BulkElementDeleteMetadata$outboundSchema;
    /** @deprecated use `V2BulkElementDeleteMetadata$Outbound` instead. */
    export type Outbound = V2BulkElementDeleteMetadata$Outbound;
}

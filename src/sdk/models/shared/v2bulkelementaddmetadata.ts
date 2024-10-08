/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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

export type V2BulkElementAddMetadataData = {
  metadata: { [k: string]: string };
  targetId: V2TargetId;
  targetType: V2TargetType;
};

export type V2BulkElementAddMetadata = {
  action: string;
  data?: V2BulkElementAddMetadataData | undefined;
  ik?: string | undefined;
};

/** @internal */
export const V2BulkElementAddMetadataData$inboundSchema: z.ZodType<
  V2BulkElementAddMetadataData,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()),
  targetId: V2TargetId$inboundSchema,
  targetType: V2TargetType$inboundSchema,
});

/** @internal */
export type V2BulkElementAddMetadataData$Outbound = {
  metadata: { [k: string]: string };
  targetId: V2TargetId$Outbound;
  targetType: string;
};

/** @internal */
export const V2BulkElementAddMetadataData$outboundSchema: z.ZodType<
  V2BulkElementAddMetadataData$Outbound,
  z.ZodTypeDef,
  V2BulkElementAddMetadataData
> = z.object({
  metadata: z.record(z.string()),
  targetId: V2TargetId$outboundSchema,
  targetType: V2TargetType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementAddMetadataData$ {
  /** @deprecated use `V2BulkElementAddMetadataData$inboundSchema` instead. */
  export const inboundSchema = V2BulkElementAddMetadataData$inboundSchema;
  /** @deprecated use `V2BulkElementAddMetadataData$outboundSchema` instead. */
  export const outboundSchema = V2BulkElementAddMetadataData$outboundSchema;
  /** @deprecated use `V2BulkElementAddMetadataData$Outbound` instead. */
  export type Outbound = V2BulkElementAddMetadataData$Outbound;
}

/** @internal */
export const V2BulkElementAddMetadata$inboundSchema: z.ZodType<
  V2BulkElementAddMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  action: z.string(),
  data: z.lazy(() => V2BulkElementAddMetadataData$inboundSchema).optional(),
  ik: z.string().optional(),
});

/** @internal */
export type V2BulkElementAddMetadata$Outbound = {
  action: string;
  data?: V2BulkElementAddMetadataData$Outbound | undefined;
  ik?: string | undefined;
};

/** @internal */
export const V2BulkElementAddMetadata$outboundSchema: z.ZodType<
  V2BulkElementAddMetadata$Outbound,
  z.ZodTypeDef,
  V2BulkElementAddMetadata
> = z.object({
  action: z.string(),
  data: z.lazy(() => V2BulkElementAddMetadataData$outboundSchema).optional(),
  ik: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2BulkElementAddMetadata$ {
  /** @deprecated use `V2BulkElementAddMetadata$inboundSchema` instead. */
  export const inboundSchema = V2BulkElementAddMetadata$inboundSchema;
  /** @deprecated use `V2BulkElementAddMetadata$outboundSchema` instead. */
  export const outboundSchema = V2BulkElementAddMetadata$outboundSchema;
  /** @deprecated use `V2BulkElementAddMetadata$Outbound` instead. */
  export type Outbound = V2BulkElementAddMetadata$Outbound;
}

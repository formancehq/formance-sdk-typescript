/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V3Pool,
  V3Pool$inboundSchema,
  V3Pool$Outbound,
  V3Pool$outboundSchema,
} from "./v3pool.js";

export type V3PoolsCursorResponseCursor = {
  data: Array<V3Pool>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type V3PoolsCursorResponse = {
  cursor: V3PoolsCursorResponseCursor;
};

/** @internal */
export const V3PoolsCursorResponseCursor$inboundSchema: z.ZodType<
  V3PoolsCursorResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(V3Pool$inboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type V3PoolsCursorResponseCursor$Outbound = {
  data: Array<V3Pool$Outbound>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const V3PoolsCursorResponseCursor$outboundSchema: z.ZodType<
  V3PoolsCursorResponseCursor$Outbound,
  z.ZodTypeDef,
  V3PoolsCursorResponseCursor
> = z.object({
  data: z.array(V3Pool$outboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3PoolsCursorResponseCursor$ {
  /** @deprecated use `V3PoolsCursorResponseCursor$inboundSchema` instead. */
  export const inboundSchema = V3PoolsCursorResponseCursor$inboundSchema;
  /** @deprecated use `V3PoolsCursorResponseCursor$outboundSchema` instead. */
  export const outboundSchema = V3PoolsCursorResponseCursor$outboundSchema;
  /** @deprecated use `V3PoolsCursorResponseCursor$Outbound` instead. */
  export type Outbound = V3PoolsCursorResponseCursor$Outbound;
}

export function v3PoolsCursorResponseCursorToJSON(
  v3PoolsCursorResponseCursor: V3PoolsCursorResponseCursor,
): string {
  return JSON.stringify(
    V3PoolsCursorResponseCursor$outboundSchema.parse(
      v3PoolsCursorResponseCursor,
    ),
  );
}

export function v3PoolsCursorResponseCursorFromJSON(
  jsonString: string,
): SafeParseResult<V3PoolsCursorResponseCursor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3PoolsCursorResponseCursor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3PoolsCursorResponseCursor' from JSON`,
  );
}

/** @internal */
export const V3PoolsCursorResponse$inboundSchema: z.ZodType<
  V3PoolsCursorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => V3PoolsCursorResponseCursor$inboundSchema),
});

/** @internal */
export type V3PoolsCursorResponse$Outbound = {
  cursor: V3PoolsCursorResponseCursor$Outbound;
};

/** @internal */
export const V3PoolsCursorResponse$outboundSchema: z.ZodType<
  V3PoolsCursorResponse$Outbound,
  z.ZodTypeDef,
  V3PoolsCursorResponse
> = z.object({
  cursor: z.lazy(() => V3PoolsCursorResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3PoolsCursorResponse$ {
  /** @deprecated use `V3PoolsCursorResponse$inboundSchema` instead. */
  export const inboundSchema = V3PoolsCursorResponse$inboundSchema;
  /** @deprecated use `V3PoolsCursorResponse$outboundSchema` instead. */
  export const outboundSchema = V3PoolsCursorResponse$outboundSchema;
  /** @deprecated use `V3PoolsCursorResponse$Outbound` instead. */
  export type Outbound = V3PoolsCursorResponse$Outbound;
}

export function v3PoolsCursorResponseToJSON(
  v3PoolsCursorResponse: V3PoolsCursorResponse,
): string {
  return JSON.stringify(
    V3PoolsCursorResponse$outboundSchema.parse(v3PoolsCursorResponse),
  );
}

export function v3PoolsCursorResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3PoolsCursorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3PoolsCursorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3PoolsCursorResponse' from JSON`,
  );
}

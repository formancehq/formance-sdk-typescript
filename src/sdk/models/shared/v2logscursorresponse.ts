/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2Log,
  V2Log$inboundSchema,
  V2Log$Outbound,
  V2Log$outboundSchema,
} from "./v2log.js";

export type V2LogsCursorResponseCursor = {
  data: Array<V2Log>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type V2LogsCursorResponse = {
  cursor: V2LogsCursorResponseCursor;
};

/** @internal */
export const V2LogsCursorResponseCursor$inboundSchema: z.ZodType<
  V2LogsCursorResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(V2Log$inboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type V2LogsCursorResponseCursor$Outbound = {
  data: Array<V2Log$Outbound>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const V2LogsCursorResponseCursor$outboundSchema: z.ZodType<
  V2LogsCursorResponseCursor$Outbound,
  z.ZodTypeDef,
  V2LogsCursorResponseCursor
> = z.object({
  data: z.array(V2Log$outboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LogsCursorResponseCursor$ {
  /** @deprecated use `V2LogsCursorResponseCursor$inboundSchema` instead. */
  export const inboundSchema = V2LogsCursorResponseCursor$inboundSchema;
  /** @deprecated use `V2LogsCursorResponseCursor$outboundSchema` instead. */
  export const outboundSchema = V2LogsCursorResponseCursor$outboundSchema;
  /** @deprecated use `V2LogsCursorResponseCursor$Outbound` instead. */
  export type Outbound = V2LogsCursorResponseCursor$Outbound;
}

export function v2LogsCursorResponseCursorToJSON(
  v2LogsCursorResponseCursor: V2LogsCursorResponseCursor,
): string {
  return JSON.stringify(
    V2LogsCursorResponseCursor$outboundSchema.parse(v2LogsCursorResponseCursor),
  );
}

export function v2LogsCursorResponseCursorFromJSON(
  jsonString: string,
): SafeParseResult<V2LogsCursorResponseCursor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2LogsCursorResponseCursor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2LogsCursorResponseCursor' from JSON`,
  );
}

/** @internal */
export const V2LogsCursorResponse$inboundSchema: z.ZodType<
  V2LogsCursorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => V2LogsCursorResponseCursor$inboundSchema),
});

/** @internal */
export type V2LogsCursorResponse$Outbound = {
  cursor: V2LogsCursorResponseCursor$Outbound;
};

/** @internal */
export const V2LogsCursorResponse$outboundSchema: z.ZodType<
  V2LogsCursorResponse$Outbound,
  z.ZodTypeDef,
  V2LogsCursorResponse
> = z.object({
  cursor: z.lazy(() => V2LogsCursorResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LogsCursorResponse$ {
  /** @deprecated use `V2LogsCursorResponse$inboundSchema` instead. */
  export const inboundSchema = V2LogsCursorResponse$inboundSchema;
  /** @deprecated use `V2LogsCursorResponse$outboundSchema` instead. */
  export const outboundSchema = V2LogsCursorResponse$outboundSchema;
  /** @deprecated use `V2LogsCursorResponse$Outbound` instead. */
  export type Outbound = V2LogsCursorResponse$Outbound;
}

export function v2LogsCursorResponseToJSON(
  v2LogsCursorResponse: V2LogsCursorResponse,
): string {
  return JSON.stringify(
    V2LogsCursorResponse$outboundSchema.parse(v2LogsCursorResponse),
  );
}

export function v2LogsCursorResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2LogsCursorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2LogsCursorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2LogsCursorResponse' from JSON`,
  );
}

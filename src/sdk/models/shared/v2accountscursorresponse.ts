/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2Account,
  V2Account$inboundSchema,
  V2Account$Outbound,
  V2Account$outboundSchema,
} from "./v2account.js";

export type V2AccountsCursorResponseCursor = {
  data: Array<V2Account>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type V2AccountsCursorResponse = {
  cursor: V2AccountsCursorResponseCursor;
};

/** @internal */
export const V2AccountsCursorResponseCursor$inboundSchema: z.ZodType<
  V2AccountsCursorResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(V2Account$inboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type V2AccountsCursorResponseCursor$Outbound = {
  data: Array<V2Account$Outbound>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const V2AccountsCursorResponseCursor$outboundSchema: z.ZodType<
  V2AccountsCursorResponseCursor$Outbound,
  z.ZodTypeDef,
  V2AccountsCursorResponseCursor
> = z.object({
  data: z.array(V2Account$outboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2AccountsCursorResponseCursor$ {
  /** @deprecated use `V2AccountsCursorResponseCursor$inboundSchema` instead. */
  export const inboundSchema = V2AccountsCursorResponseCursor$inboundSchema;
  /** @deprecated use `V2AccountsCursorResponseCursor$outboundSchema` instead. */
  export const outboundSchema = V2AccountsCursorResponseCursor$outboundSchema;
  /** @deprecated use `V2AccountsCursorResponseCursor$Outbound` instead. */
  export type Outbound = V2AccountsCursorResponseCursor$Outbound;
}

export function v2AccountsCursorResponseCursorToJSON(
  v2AccountsCursorResponseCursor: V2AccountsCursorResponseCursor,
): string {
  return JSON.stringify(
    V2AccountsCursorResponseCursor$outboundSchema.parse(
      v2AccountsCursorResponseCursor,
    ),
  );
}

export function v2AccountsCursorResponseCursorFromJSON(
  jsonString: string,
): SafeParseResult<V2AccountsCursorResponseCursor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2AccountsCursorResponseCursor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2AccountsCursorResponseCursor' from JSON`,
  );
}

/** @internal */
export const V2AccountsCursorResponse$inboundSchema: z.ZodType<
  V2AccountsCursorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => V2AccountsCursorResponseCursor$inboundSchema),
});

/** @internal */
export type V2AccountsCursorResponse$Outbound = {
  cursor: V2AccountsCursorResponseCursor$Outbound;
};

/** @internal */
export const V2AccountsCursorResponse$outboundSchema: z.ZodType<
  V2AccountsCursorResponse$Outbound,
  z.ZodTypeDef,
  V2AccountsCursorResponse
> = z.object({
  cursor: z.lazy(() => V2AccountsCursorResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2AccountsCursorResponse$ {
  /** @deprecated use `V2AccountsCursorResponse$inboundSchema` instead. */
  export const inboundSchema = V2AccountsCursorResponse$inboundSchema;
  /** @deprecated use `V2AccountsCursorResponse$outboundSchema` instead. */
  export const outboundSchema = V2AccountsCursorResponse$outboundSchema;
  /** @deprecated use `V2AccountsCursorResponse$Outbound` instead. */
  export type Outbound = V2AccountsCursorResponse$Outbound;
}

export function v2AccountsCursorResponseToJSON(
  v2AccountsCursorResponse: V2AccountsCursorResponse,
): string {
  return JSON.stringify(
    V2AccountsCursorResponse$outboundSchema.parse(v2AccountsCursorResponse),
  );
}

export function v2AccountsCursorResponseFromJSON(
  jsonString: string,
): SafeParseResult<V2AccountsCursorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2AccountsCursorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2AccountsCursorResponse' from JSON`,
  );
}

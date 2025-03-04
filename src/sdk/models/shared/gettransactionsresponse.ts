/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WalletsTransaction,
  WalletsTransaction$inboundSchema,
  WalletsTransaction$Outbound,
  WalletsTransaction$outboundSchema,
} from "./walletstransaction.js";

export type GetTransactionsResponseCursor = {
  data: Array<WalletsTransaction>;
  hasMore?: boolean | undefined;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type GetTransactionsResponse = {
  cursor: GetTransactionsResponseCursor;
};

/** @internal */
export const GetTransactionsResponseCursor$inboundSchema: z.ZodType<
  GetTransactionsResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(WalletsTransaction$inboundSchema),
  hasMore: z.boolean().optional(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type GetTransactionsResponseCursor$Outbound = {
  data: Array<WalletsTransaction$Outbound>;
  hasMore?: boolean | undefined;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const GetTransactionsResponseCursor$outboundSchema: z.ZodType<
  GetTransactionsResponseCursor$Outbound,
  z.ZodTypeDef,
  GetTransactionsResponseCursor
> = z.object({
  data: z.array(WalletsTransaction$outboundSchema),
  hasMore: z.boolean().optional(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsResponseCursor$ {
  /** @deprecated use `GetTransactionsResponseCursor$inboundSchema` instead. */
  export const inboundSchema = GetTransactionsResponseCursor$inboundSchema;
  /** @deprecated use `GetTransactionsResponseCursor$outboundSchema` instead. */
  export const outboundSchema = GetTransactionsResponseCursor$outboundSchema;
  /** @deprecated use `GetTransactionsResponseCursor$Outbound` instead. */
  export type Outbound = GetTransactionsResponseCursor$Outbound;
}

export function getTransactionsResponseCursorToJSON(
  getTransactionsResponseCursor: GetTransactionsResponseCursor,
): string {
  return JSON.stringify(
    GetTransactionsResponseCursor$outboundSchema.parse(
      getTransactionsResponseCursor,
    ),
  );
}

export function getTransactionsResponseCursorFromJSON(
  jsonString: string,
): SafeParseResult<GetTransactionsResponseCursor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransactionsResponseCursor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionsResponseCursor' from JSON`,
  );
}

/** @internal */
export const GetTransactionsResponse$inboundSchema: z.ZodType<
  GetTransactionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => GetTransactionsResponseCursor$inboundSchema),
});

/** @internal */
export type GetTransactionsResponse$Outbound = {
  cursor: GetTransactionsResponseCursor$Outbound;
};

/** @internal */
export const GetTransactionsResponse$outboundSchema: z.ZodType<
  GetTransactionsResponse$Outbound,
  z.ZodTypeDef,
  GetTransactionsResponse
> = z.object({
  cursor: z.lazy(() => GetTransactionsResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsResponse$ {
  /** @deprecated use `GetTransactionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTransactionsResponse$inboundSchema;
  /** @deprecated use `GetTransactionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTransactionsResponse$outboundSchema;
  /** @deprecated use `GetTransactionsResponse$Outbound` instead. */
  export type Outbound = GetTransactionsResponse$Outbound;
}

export function getTransactionsResponseToJSON(
  getTransactionsResponse: GetTransactionsResponse,
): string {
  return JSON.stringify(
    GetTransactionsResponse$outboundSchema.parse(getTransactionsResponse),
  );
}

export function getTransactionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTransactionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransactionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionsResponse' from JSON`,
  );
}

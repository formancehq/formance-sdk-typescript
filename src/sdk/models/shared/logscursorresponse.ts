/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Log,
  Log$inboundSchema,
  Log$Outbound,
  Log$outboundSchema,
} from "./log.js";

export type LogsCursorResponseCursor = {
  data: Array<Log>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type LogsCursorResponse = {
  cursor: LogsCursorResponseCursor;
};

/** @internal */
export const LogsCursorResponseCursor$inboundSchema: z.ZodType<
  LogsCursorResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Log$inboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type LogsCursorResponseCursor$Outbound = {
  data: Array<Log$Outbound>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const LogsCursorResponseCursor$outboundSchema: z.ZodType<
  LogsCursorResponseCursor$Outbound,
  z.ZodTypeDef,
  LogsCursorResponseCursor
> = z.object({
  data: z.array(Log$outboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogsCursorResponseCursor$ {
  /** @deprecated use `LogsCursorResponseCursor$inboundSchema` instead. */
  export const inboundSchema = LogsCursorResponseCursor$inboundSchema;
  /** @deprecated use `LogsCursorResponseCursor$outboundSchema` instead. */
  export const outboundSchema = LogsCursorResponseCursor$outboundSchema;
  /** @deprecated use `LogsCursorResponseCursor$Outbound` instead. */
  export type Outbound = LogsCursorResponseCursor$Outbound;
}

/** @internal */
export const LogsCursorResponse$inboundSchema: z.ZodType<
  LogsCursorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => LogsCursorResponseCursor$inboundSchema),
});

/** @internal */
export type LogsCursorResponse$Outbound = {
  cursor: LogsCursorResponseCursor$Outbound;
};

/** @internal */
export const LogsCursorResponse$outboundSchema: z.ZodType<
  LogsCursorResponse$Outbound,
  z.ZodTypeDef,
  LogsCursorResponse
> = z.object({
  cursor: z.lazy(() => LogsCursorResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LogsCursorResponse$ {
  /** @deprecated use `LogsCursorResponse$inboundSchema` instead. */
  export const inboundSchema = LogsCursorResponse$inboundSchema;
  /** @deprecated use `LogsCursorResponse$outboundSchema` instead. */
  export const outboundSchema = LogsCursorResponse$outboundSchema;
  /** @deprecated use `LogsCursorResponse$Outbound` instead. */
  export type Outbound = LogsCursorResponse$Outbound;
}

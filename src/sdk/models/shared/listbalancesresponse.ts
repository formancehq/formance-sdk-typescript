/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Balance,
  Balance$inboundSchema,
  Balance$Outbound,
  Balance$outboundSchema,
} from "./balance.js";

export type ListBalancesResponseCursor = {
  data: Array<Balance>;
  hasMore?: boolean | undefined;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type ListBalancesResponse = {
  cursor: ListBalancesResponseCursor;
};

/** @internal */
export const ListBalancesResponseCursor$inboundSchema: z.ZodType<
  ListBalancesResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Balance$inboundSchema),
  hasMore: z.boolean().optional(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type ListBalancesResponseCursor$Outbound = {
  data: Array<Balance$Outbound>;
  hasMore?: boolean | undefined;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const ListBalancesResponseCursor$outboundSchema: z.ZodType<
  ListBalancesResponseCursor$Outbound,
  z.ZodTypeDef,
  ListBalancesResponseCursor
> = z.object({
  data: z.array(Balance$outboundSchema),
  hasMore: z.boolean().optional(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBalancesResponseCursor$ {
  /** @deprecated use `ListBalancesResponseCursor$inboundSchema` instead. */
  export const inboundSchema = ListBalancesResponseCursor$inboundSchema;
  /** @deprecated use `ListBalancesResponseCursor$outboundSchema` instead. */
  export const outboundSchema = ListBalancesResponseCursor$outboundSchema;
  /** @deprecated use `ListBalancesResponseCursor$Outbound` instead. */
  export type Outbound = ListBalancesResponseCursor$Outbound;
}

/** @internal */
export const ListBalancesResponse$inboundSchema: z.ZodType<
  ListBalancesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => ListBalancesResponseCursor$inboundSchema),
});

/** @internal */
export type ListBalancesResponse$Outbound = {
  cursor: ListBalancesResponseCursor$Outbound;
};

/** @internal */
export const ListBalancesResponse$outboundSchema: z.ZodType<
  ListBalancesResponse$Outbound,
  z.ZodTypeDef,
  ListBalancesResponse
> = z.object({
  cursor: z.lazy(() => ListBalancesResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListBalancesResponse$ {
  /** @deprecated use `ListBalancesResponse$inboundSchema` instead. */
  export const inboundSchema = ListBalancesResponse$inboundSchema;
  /** @deprecated use `ListBalancesResponse$outboundSchema` instead. */
  export const outboundSchema = ListBalancesResponse$outboundSchema;
  /** @deprecated use `ListBalancesResponse$Outbound` instead. */
  export type Outbound = ListBalancesResponse$Outbound;
}

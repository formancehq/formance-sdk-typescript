/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  V2MigrationInfo,
  V2MigrationInfo$inboundSchema,
  V2MigrationInfo$Outbound,
  V2MigrationInfo$outboundSchema,
} from "./v2migrationinfo.js";

export type V2LedgerInfoStorage = {
  migrations?: Array<V2MigrationInfo> | undefined;
};

export type V2LedgerInfo = {
  name?: string | undefined;
  storage?: V2LedgerInfoStorage | undefined;
};

/** @internal */
export const V2LedgerInfoStorage$inboundSchema: z.ZodType<
  V2LedgerInfoStorage,
  z.ZodTypeDef,
  unknown
> = z.object({
  migrations: z.array(V2MigrationInfo$inboundSchema).optional(),
});

/** @internal */
export type V2LedgerInfoStorage$Outbound = {
  migrations?: Array<V2MigrationInfo$Outbound> | undefined;
};

/** @internal */
export const V2LedgerInfoStorage$outboundSchema: z.ZodType<
  V2LedgerInfoStorage$Outbound,
  z.ZodTypeDef,
  V2LedgerInfoStorage
> = z.object({
  migrations: z.array(V2MigrationInfo$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LedgerInfoStorage$ {
  /** @deprecated use `V2LedgerInfoStorage$inboundSchema` instead. */
  export const inboundSchema = V2LedgerInfoStorage$inboundSchema;
  /** @deprecated use `V2LedgerInfoStorage$outboundSchema` instead. */
  export const outboundSchema = V2LedgerInfoStorage$outboundSchema;
  /** @deprecated use `V2LedgerInfoStorage$Outbound` instead. */
  export type Outbound = V2LedgerInfoStorage$Outbound;
}

/** @internal */
export const V2LedgerInfo$inboundSchema: z.ZodType<
  V2LedgerInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => V2LedgerInfoStorage$inboundSchema).optional(),
});

/** @internal */
export type V2LedgerInfo$Outbound = {
  name?: string | undefined;
  storage?: V2LedgerInfoStorage$Outbound | undefined;
};

/** @internal */
export const V2LedgerInfo$outboundSchema: z.ZodType<
  V2LedgerInfo$Outbound,
  z.ZodTypeDef,
  V2LedgerInfo
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => V2LedgerInfoStorage$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LedgerInfo$ {
  /** @deprecated use `V2LedgerInfo$inboundSchema` instead. */
  export const inboundSchema = V2LedgerInfo$inboundSchema;
  /** @deprecated use `V2LedgerInfo$outboundSchema` instead. */
  export const outboundSchema = V2LedgerInfo$outboundSchema;
  /** @deprecated use `V2LedgerInfo$Outbound` instead. */
  export type Outbound = V2LedgerInfo$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  MigrationInfo,
  MigrationInfo$inboundSchema,
  MigrationInfo$Outbound,
  MigrationInfo$outboundSchema,
} from "./migrationinfo.js";

export type Storage = {
  migrations?: Array<MigrationInfo> | undefined;
};

export type LedgerInfo = {
  name?: string | undefined;
  storage?: Storage | undefined;
};

/** @internal */
export const Storage$inboundSchema: z.ZodType<Storage, z.ZodTypeDef, unknown> =
  z.object({
    migrations: z.array(MigrationInfo$inboundSchema).optional(),
  });

/** @internal */
export type Storage$Outbound = {
  migrations?: Array<MigrationInfo$Outbound> | undefined;
};

/** @internal */
export const Storage$outboundSchema: z.ZodType<
  Storage$Outbound,
  z.ZodTypeDef,
  Storage
> = z.object({
  migrations: z.array(MigrationInfo$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Storage$ {
  /** @deprecated use `Storage$inboundSchema` instead. */
  export const inboundSchema = Storage$inboundSchema;
  /** @deprecated use `Storage$outboundSchema` instead. */
  export const outboundSchema = Storage$outboundSchema;
  /** @deprecated use `Storage$Outbound` instead. */
  export type Outbound = Storage$Outbound;
}

/** @internal */
export const LedgerInfo$inboundSchema: z.ZodType<
  LedgerInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => Storage$inboundSchema).optional(),
});

/** @internal */
export type LedgerInfo$Outbound = {
  name?: string | undefined;
  storage?: Storage$Outbound | undefined;
};

/** @internal */
export const LedgerInfo$outboundSchema: z.ZodType<
  LedgerInfo$Outbound,
  z.ZodTypeDef,
  LedgerInfo
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => Storage$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerInfo$ {
  /** @deprecated use `LedgerInfo$inboundSchema` instead. */
  export const inboundSchema = LedgerInfo$inboundSchema;
  /** @deprecated use `LedgerInfo$outboundSchema` instead. */
  export const outboundSchema = LedgerInfo$outboundSchema;
  /** @deprecated use `LedgerInfo$Outbound` instead. */
  export type Outbound = LedgerInfo$Outbound;
}

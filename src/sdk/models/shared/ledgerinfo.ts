/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MigrationInfo,
  MigrationInfo$inboundSchema,
  MigrationInfo$Outbound,
  MigrationInfo$outboundSchema,
} from "./migrationinfo.js";

export type LedgerInfoStorage = {
  migrations?: Array<MigrationInfo> | undefined;
};

export type LedgerInfo = {
  name?: string | undefined;
  storage?: LedgerInfoStorage | undefined;
};

/** @internal */
export const LedgerInfoStorage$inboundSchema: z.ZodType<
  LedgerInfoStorage,
  z.ZodTypeDef,
  unknown
> = z.object({
  migrations: z.array(MigrationInfo$inboundSchema).optional(),
});

/** @internal */
export type LedgerInfoStorage$Outbound = {
  migrations?: Array<MigrationInfo$Outbound> | undefined;
};

/** @internal */
export const LedgerInfoStorage$outboundSchema: z.ZodType<
  LedgerInfoStorage$Outbound,
  z.ZodTypeDef,
  LedgerInfoStorage
> = z.object({
  migrations: z.array(MigrationInfo$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerInfoStorage$ {
  /** @deprecated use `LedgerInfoStorage$inboundSchema` instead. */
  export const inboundSchema = LedgerInfoStorage$inboundSchema;
  /** @deprecated use `LedgerInfoStorage$outboundSchema` instead. */
  export const outboundSchema = LedgerInfoStorage$outboundSchema;
  /** @deprecated use `LedgerInfoStorage$Outbound` instead. */
  export type Outbound = LedgerInfoStorage$Outbound;
}

export function ledgerInfoStorageToJSON(
  ledgerInfoStorage: LedgerInfoStorage,
): string {
  return JSON.stringify(
    LedgerInfoStorage$outboundSchema.parse(ledgerInfoStorage),
  );
}

export function ledgerInfoStorageFromJSON(
  jsonString: string,
): SafeParseResult<LedgerInfoStorage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LedgerInfoStorage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LedgerInfoStorage' from JSON`,
  );
}

/** @internal */
export const LedgerInfo$inboundSchema: z.ZodType<
  LedgerInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => LedgerInfoStorage$inboundSchema).optional(),
});

/** @internal */
export type LedgerInfo$Outbound = {
  name?: string | undefined;
  storage?: LedgerInfoStorage$Outbound | undefined;
};

/** @internal */
export const LedgerInfo$outboundSchema: z.ZodType<
  LedgerInfo$Outbound,
  z.ZodTypeDef,
  LedgerInfo
> = z.object({
  name: z.string().optional(),
  storage: z.lazy(() => LedgerInfoStorage$outboundSchema).optional(),
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

export function ledgerInfoToJSON(ledgerInfo: LedgerInfo): string {
  return JSON.stringify(LedgerInfo$outboundSchema.parse(ledgerInfo));
}

export function ledgerInfoFromJSON(
  jsonString: string,
): SafeParseResult<LedgerInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LedgerInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LedgerInfo' from JSON`,
  );
}

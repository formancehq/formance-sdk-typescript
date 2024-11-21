/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V2AssetHolder,
  V2AssetHolder$inboundSchema,
  V2AssetHolder$Outbound,
  V2AssetHolder$outboundSchema,
} from "./v2assetholder.js";

export type Balances = {
  main: V2AssetHolder;
};

export type V2WalletWithBalances = {
  balances: Balances;
  createdAt: Date;
  /**
   * The unique ID of the wallet.
   */
  id: string;
  ledger: string;
  /**
   * Metadata associated with the wallet.
   */
  metadata: { [k: string]: string };
  name: string;
};

/** @internal */
export const Balances$inboundSchema: z.ZodType<
  Balances,
  z.ZodTypeDef,
  unknown
> = z.object({
  main: V2AssetHolder$inboundSchema,
});

/** @internal */
export type Balances$Outbound = {
  main: V2AssetHolder$Outbound;
};

/** @internal */
export const Balances$outboundSchema: z.ZodType<
  Balances$Outbound,
  z.ZodTypeDef,
  Balances
> = z.object({
  main: V2AssetHolder$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Balances$ {
  /** @deprecated use `Balances$inboundSchema` instead. */
  export const inboundSchema = Balances$inboundSchema;
  /** @deprecated use `Balances$outboundSchema` instead. */
  export const outboundSchema = Balances$outboundSchema;
  /** @deprecated use `Balances$Outbound` instead. */
  export type Outbound = Balances$Outbound;
}

export function balancesToJSON(balances: Balances): string {
  return JSON.stringify(Balances$outboundSchema.parse(balances));
}

export function balancesFromJSON(
  jsonString: string,
): SafeParseResult<Balances, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Balances$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Balances' from JSON`,
  );
}

/** @internal */
export const V2WalletWithBalances$inboundSchema: z.ZodType<
  V2WalletWithBalances,
  z.ZodTypeDef,
  unknown
> = z.object({
  balances: z.lazy(() => Balances$inboundSchema),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
  name: z.string(),
});

/** @internal */
export type V2WalletWithBalances$Outbound = {
  balances: Balances$Outbound;
  createdAt: string;
  id: string;
  ledger: string;
  metadata: { [k: string]: string };
  name: string;
};

/** @internal */
export const V2WalletWithBalances$outboundSchema: z.ZodType<
  V2WalletWithBalances$Outbound,
  z.ZodTypeDef,
  V2WalletWithBalances
> = z.object({
  balances: z.lazy(() => Balances$outboundSchema),
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  ledger: z.string(),
  metadata: z.record(z.string()),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2WalletWithBalances$ {
  /** @deprecated use `V2WalletWithBalances$inboundSchema` instead. */
  export const inboundSchema = V2WalletWithBalances$inboundSchema;
  /** @deprecated use `V2WalletWithBalances$outboundSchema` instead. */
  export const outboundSchema = V2WalletWithBalances$outboundSchema;
  /** @deprecated use `V2WalletWithBalances$Outbound` instead. */
  export type Outbound = V2WalletWithBalances$Outbound;
}

export function v2WalletWithBalancesToJSON(
  v2WalletWithBalances: V2WalletWithBalances,
): string {
  return JSON.stringify(
    V2WalletWithBalances$outboundSchema.parse(v2WalletWithBalances),
  );
}

export function v2WalletWithBalancesFromJSON(
  jsonString: string,
): SafeParseResult<V2WalletWithBalances, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V2WalletWithBalances$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V2WalletWithBalances' from JSON`,
  );
}

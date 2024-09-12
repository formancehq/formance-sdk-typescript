/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Volume,
  Volume$inboundSchema,
  Volume$Outbound,
  Volume$outboundSchema,
} from "./volume.js";

export type AccountWithVolumesAndBalances = {
  address: string;
  balances?: { [k: string]: bigint } | undefined;
  metadata?: { [k: string]: any } | undefined;
  type?: string | undefined;
  volumes?: { [k: string]: Volume } | undefined;
};

/** @internal */
export const AccountWithVolumesAndBalances$inboundSchema: z.ZodType<
  AccountWithVolumesAndBalances,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  balances: z.record(z.number().transform(v => BigInt(v))).optional(),
  metadata: z.record(z.any()).optional(),
  type: z.string().optional(),
  volumes: z.record(Volume$inboundSchema).optional(),
});

/** @internal */
export type AccountWithVolumesAndBalances$Outbound = {
  address: string;
  balances?: { [k: string]: number } | undefined;
  metadata?: { [k: string]: any } | undefined;
  type?: string | undefined;
  volumes?: { [k: string]: Volume$Outbound } | undefined;
};

/** @internal */
export const AccountWithVolumesAndBalances$outboundSchema: z.ZodType<
  AccountWithVolumesAndBalances$Outbound,
  z.ZodTypeDef,
  AccountWithVolumesAndBalances
> = z.object({
  address: z.string(),
  balances: z.record(z.bigint().transform(v => Number(v))).optional(),
  metadata: z.record(z.any()).optional(),
  type: z.string().optional(),
  volumes: z.record(Volume$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountWithVolumesAndBalances$ {
  /** @deprecated use `AccountWithVolumesAndBalances$inboundSchema` instead. */
  export const inboundSchema = AccountWithVolumesAndBalances$inboundSchema;
  /** @deprecated use `AccountWithVolumesAndBalances$outboundSchema` instead. */
  export const outboundSchema = AccountWithVolumesAndBalances$outboundSchema;
  /** @deprecated use `AccountWithVolumesAndBalances$Outbound` instead. */
  export type Outbound = AccountWithVolumesAndBalances$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  PoolBalance,
  PoolBalance$inboundSchema,
  PoolBalance$Outbound,
  PoolBalance$outboundSchema,
} from "./poolbalance.js";

export type PoolBalances = {
  balances: Array<PoolBalance>;
};

/** @internal */
export const PoolBalances$inboundSchema: z.ZodType<
  PoolBalances,
  z.ZodTypeDef,
  unknown
> = z.object({
  balances: z.array(PoolBalance$inboundSchema),
});

/** @internal */
export type PoolBalances$Outbound = {
  balances: Array<PoolBalance$Outbound>;
};

/** @internal */
export const PoolBalances$outboundSchema: z.ZodType<
  PoolBalances$Outbound,
  z.ZodTypeDef,
  PoolBalances
> = z.object({
  balances: z.array(PoolBalance$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PoolBalances$ {
  /** @deprecated use `PoolBalances$inboundSchema` instead. */
  export const inboundSchema = PoolBalances$inboundSchema;
  /** @deprecated use `PoolBalances$outboundSchema` instead. */
  export const outboundSchema = PoolBalances$outboundSchema;
  /** @deprecated use `PoolBalances$Outbound` instead. */
  export type Outbound = PoolBalances$Outbound;
}

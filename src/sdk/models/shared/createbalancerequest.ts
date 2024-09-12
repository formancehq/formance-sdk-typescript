/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateBalanceRequest = {
  expiresAt?: Date | null | undefined;
  name: string;
  priority?: bigint | undefined;
};

/** @internal */
export const CreateBalanceRequest$inboundSchema: z.ZodType<
  CreateBalanceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expiresAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  name: z.string(),
  priority: z.number().transform(v => BigInt(v)).optional(),
});

/** @internal */
export type CreateBalanceRequest$Outbound = {
  expiresAt?: string | null | undefined;
  name: string;
  priority?: number | undefined;
};

/** @internal */
export const CreateBalanceRequest$outboundSchema: z.ZodType<
  CreateBalanceRequest$Outbound,
  z.ZodTypeDef,
  CreateBalanceRequest
> = z.object({
  expiresAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  name: z.string(),
  priority: z.bigint().transform(v => Number(v)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBalanceRequest$ {
  /** @deprecated use `CreateBalanceRequest$inboundSchema` instead. */
  export const inboundSchema = CreateBalanceRequest$inboundSchema;
  /** @deprecated use `CreateBalanceRequest$outboundSchema` instead. */
  export const outboundSchema = CreateBalanceRequest$outboundSchema;
  /** @deprecated use `CreateBalanceRequest$Outbound` instead. */
  export type Outbound = CreateBalanceRequest$Outbound;
}

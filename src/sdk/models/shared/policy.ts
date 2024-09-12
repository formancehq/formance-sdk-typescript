/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Policy = {
  createdAt: Date;
  id: string;
  ledgerName: string;
  ledgerQuery: { [k: string]: any };
  name: string;
  paymentsPoolID: string;
};

/** @internal */
export const Policy$inboundSchema: z.ZodType<Policy, z.ZodTypeDef, unknown> = z
  .object({
    createdAt: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    id: z.string(),
    ledgerName: z.string(),
    ledgerQuery: z.record(z.any()),
    name: z.string(),
    paymentsPoolID: z.string(),
  });

/** @internal */
export type Policy$Outbound = {
  createdAt: string;
  id: string;
  ledgerName: string;
  ledgerQuery: { [k: string]: any };
  name: string;
  paymentsPoolID: string;
};

/** @internal */
export const Policy$outboundSchema: z.ZodType<
  Policy$Outbound,
  z.ZodTypeDef,
  Policy
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.string(),
  ledgerName: z.string(),
  ledgerQuery: z.record(z.any()),
  name: z.string(),
  paymentsPoolID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Policy$ {
  /** @deprecated use `Policy$inboundSchema` instead. */
  export const inboundSchema = Policy$inboundSchema;
  /** @deprecated use `Policy$outboundSchema` instead. */
  export const outboundSchema = Policy$outboundSchema;
  /** @deprecated use `Policy$Outbound` instead. */
  export type Outbound = Policy$Outbound;
}

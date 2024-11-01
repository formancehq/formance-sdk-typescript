/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum V2LogType {
  NewTransaction = "NEW_TRANSACTION",
  SetMetadata = "SET_METADATA",
  RevertedTransaction = "REVERTED_TRANSACTION",
}

export type V2Log = {
  data: { [k: string]: any };
  date: Date;
  hash: string;
  id: bigint;
  type: V2LogType;
};

/** @internal */
export const V2LogType$inboundSchema: z.ZodNativeEnum<typeof V2LogType> = z
  .nativeEnum(V2LogType);

/** @internal */
export const V2LogType$outboundSchema: z.ZodNativeEnum<typeof V2LogType> =
  V2LogType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2LogType$ {
  /** @deprecated use `V2LogType$inboundSchema` instead. */
  export const inboundSchema = V2LogType$inboundSchema;
  /** @deprecated use `V2LogType$outboundSchema` instead. */
  export const outboundSchema = V2LogType$outboundSchema;
}

/** @internal */
export const V2Log$inboundSchema: z.ZodType<V2Log, z.ZodTypeDef, unknown> = z
  .object({
    data: z.record(z.any()),
    date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
    hash: z.string(),
    id: z.number().transform(v => BigInt(v)),
    type: V2LogType$inboundSchema,
  });

/** @internal */
export type V2Log$Outbound = {
  data: { [k: string]: any };
  date: string;
  hash: string;
  id: number;
  type: string;
};

/** @internal */
export const V2Log$outboundSchema: z.ZodType<
  V2Log$Outbound,
  z.ZodTypeDef,
  V2Log
> = z.object({
  data: z.record(z.any()),
  date: z.date().transform(v => v.toISOString()),
  hash: z.string(),
  id: z.bigint().transform(v => Number(v)),
  type: V2LogType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2Log$ {
  /** @deprecated use `V2Log$inboundSchema` instead. */
  export const inboundSchema = V2Log$inboundSchema;
  /** @deprecated use `V2Log$outboundSchema` instead. */
  export const outboundSchema = V2Log$outboundSchema;
  /** @deprecated use `V2Log$Outbound` instead. */
  export type Outbound = V2Log$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V2ServerInfo = {
  version: string;
};

/** @internal */
export const V2ServerInfo$inboundSchema: z.ZodType<
  V2ServerInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.string(),
});

/** @internal */
export type V2ServerInfo$Outbound = {
  version: string;
};

/** @internal */
export const V2ServerInfo$outboundSchema: z.ZodType<
  V2ServerInfo$Outbound,
  z.ZodTypeDef,
  V2ServerInfo
> = z.object({
  version: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V2ServerInfo$ {
  /** @deprecated use `V2ServerInfo$inboundSchema` instead. */
  export const inboundSchema = V2ServerInfo$inboundSchema;
  /** @deprecated use `V2ServerInfo$outboundSchema` instead. */
  export const outboundSchema = V2ServerInfo$outboundSchema;
  /** @deprecated use `V2ServerInfo$Outbound` instead. */
  export type Outbound = V2ServerInfo$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ConfigChangeSecret = {
  secret: string;
};

/** @internal */
export const ConfigChangeSecret$inboundSchema: z.ZodType<
  ConfigChangeSecret,
  z.ZodTypeDef,
  unknown
> = z.object({
  secret: z.string(),
});

/** @internal */
export type ConfigChangeSecret$Outbound = {
  secret: string;
};

/** @internal */
export const ConfigChangeSecret$outboundSchema: z.ZodType<
  ConfigChangeSecret$Outbound,
  z.ZodTypeDef,
  ConfigChangeSecret
> = z.object({
  secret: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigChangeSecret$ {
  /** @deprecated use `ConfigChangeSecret$inboundSchema` instead. */
  export const inboundSchema = ConfigChangeSecret$inboundSchema;
  /** @deprecated use `ConfigChangeSecret$outboundSchema` instead. */
  export const outboundSchema = ConfigChangeSecret$outboundSchema;
  /** @deprecated use `ConfigChangeSecret$Outbound` instead. */
  export type Outbound = ConfigChangeSecret$Outbound;
}

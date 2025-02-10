/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum V3AccountTypeEnum {
  Unknown = "UNKNOWN",
  Internal = "INTERNAL",
  External = "EXTERNAL",
}

/** @internal */
export const V3AccountTypeEnum$inboundSchema: z.ZodNativeEnum<
  typeof V3AccountTypeEnum
> = z.nativeEnum(V3AccountTypeEnum);

/** @internal */
export const V3AccountTypeEnum$outboundSchema: z.ZodNativeEnum<
  typeof V3AccountTypeEnum
> = V3AccountTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3AccountTypeEnum$ {
  /** @deprecated use `V3AccountTypeEnum$inboundSchema` instead. */
  export const inboundSchema = V3AccountTypeEnum$inboundSchema;
  /** @deprecated use `V3AccountTypeEnum$outboundSchema` instead. */
  export const outboundSchema = V3AccountTypeEnum$outboundSchema;
}

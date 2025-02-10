/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum V3TaskStatusEnum {
  Processing = "PROCESSING",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
}

/** @internal */
export const V3TaskStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof V3TaskStatusEnum
> = z.nativeEnum(V3TaskStatusEnum);

/** @internal */
export const V3TaskStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof V3TaskStatusEnum
> = V3TaskStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3TaskStatusEnum$ {
  /** @deprecated use `V3TaskStatusEnum$inboundSchema` instead. */
  export const inboundSchema = V3TaskStatusEnum$inboundSchema;
  /** @deprecated use `V3TaskStatusEnum$outboundSchema` instead. */
  export const outboundSchema = V3TaskStatusEnum$outboundSchema;
}

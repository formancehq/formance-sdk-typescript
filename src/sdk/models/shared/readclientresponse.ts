/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Client,
  Client$inboundSchema,
  Client$Outbound,
  Client$outboundSchema,
} from "./client.js";

export type ReadClientResponse = {
  data?: Client | undefined;
};

/** @internal */
export const ReadClientResponse$inboundSchema: z.ZodType<
  ReadClientResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Client$inboundSchema.optional(),
});

/** @internal */
export type ReadClientResponse$Outbound = {
  data?: Client$Outbound | undefined;
};

/** @internal */
export const ReadClientResponse$outboundSchema: z.ZodType<
  ReadClientResponse$Outbound,
  z.ZodTypeDef,
  ReadClientResponse
> = z.object({
  data: Client$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadClientResponse$ {
  /** @deprecated use `ReadClientResponse$inboundSchema` instead. */
  export const inboundSchema = ReadClientResponse$inboundSchema;
  /** @deprecated use `ReadClientResponse$outboundSchema` instead. */
  export const outboundSchema = ReadClientResponse$outboundSchema;
  /** @deprecated use `ReadClientResponse$Outbound` instead. */
  export type Outbound = ReadClientResponse$Outbound;
}

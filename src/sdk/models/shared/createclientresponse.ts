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

export type CreateClientResponse = {
  data?: Client | undefined;
};

/** @internal */
export const CreateClientResponse$inboundSchema: z.ZodType<
  CreateClientResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Client$inboundSchema.optional(),
});

/** @internal */
export type CreateClientResponse$Outbound = {
  data?: Client$Outbound | undefined;
};

/** @internal */
export const CreateClientResponse$outboundSchema: z.ZodType<
  CreateClientResponse$Outbound,
  z.ZodTypeDef,
  CreateClientResponse
> = z.object({
  data: Client$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateClientResponse$ {
  /** @deprecated use `CreateClientResponse$inboundSchema` instead. */
  export const inboundSchema = CreateClientResponse$inboundSchema;
  /** @deprecated use `CreateClientResponse$outboundSchema` instead. */
  export const outboundSchema = CreateClientResponse$outboundSchema;
  /** @deprecated use `CreateClientResponse$Outbound` instead. */
  export type Outbound = CreateClientResponse$Outbound;
}

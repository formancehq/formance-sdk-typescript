/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Version,
  Version$inboundSchema,
  Version$Outbound,
  Version$outboundSchema,
} from "./version.js";

export type GetVersionsResponse = {
  env: string;
  region: string;
  versions: Array<Version>;
};

/** @internal */
export const GetVersionsResponse$inboundSchema: z.ZodType<
  GetVersionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  env: z.string(),
  region: z.string(),
  versions: z.array(Version$inboundSchema),
});

/** @internal */
export type GetVersionsResponse$Outbound = {
  env: string;
  region: string;
  versions: Array<Version$Outbound>;
};

/** @internal */
export const GetVersionsResponse$outboundSchema: z.ZodType<
  GetVersionsResponse$Outbound,
  z.ZodTypeDef,
  GetVersionsResponse
> = z.object({
  env: z.string(),
  region: z.string(),
  versions: z.array(Version$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVersionsResponse$ {
  /** @deprecated use `GetVersionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetVersionsResponse$inboundSchema;
  /** @deprecated use `GetVersionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetVersionsResponse$outboundSchema;
  /** @deprecated use `GetVersionsResponse$Outbound` instead. */
  export type Outbound = GetVersionsResponse$Outbound;
}

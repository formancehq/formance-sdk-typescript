/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Config,
  Config$inboundSchema,
  Config$Outbound,
  Config$outboundSchema,
} from "./config.js";

export type ConfigInfo = {
  config: Config;
  server: string;
  version: string;
};

/** @internal */
export const ConfigInfo$inboundSchema: z.ZodType<
  ConfigInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  config: Config$inboundSchema,
  server: z.string(),
  version: z.string(),
});

/** @internal */
export type ConfigInfo$Outbound = {
  config: Config$Outbound;
  server: string;
  version: string;
};

/** @internal */
export const ConfigInfo$outboundSchema: z.ZodType<
  ConfigInfo$Outbound,
  z.ZodTypeDef,
  ConfigInfo
> = z.object({
  config: Config$outboundSchema,
  server: z.string(),
  version: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigInfo$ {
  /** @deprecated use `ConfigInfo$inboundSchema` instead. */
  export const inboundSchema = ConfigInfo$inboundSchema;
  /** @deprecated use `ConfigInfo$outboundSchema` instead. */
  export const outboundSchema = ConfigInfo$outboundSchema;
  /** @deprecated use `ConfigInfo$Outbound` instead. */
  export type Outbound = ConfigInfo$Outbound;
}

export function configInfoToJSON(configInfo: ConfigInfo): string {
  return JSON.stringify(ConfigInfo$outboundSchema.parse(configInfo));
}

export function configInfoFromJSON(
  jsonString: string,
): SafeParseResult<ConfigInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConfigInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConfigInfo' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ConnectorConfig,
  ConnectorConfig$inboundSchema,
  ConnectorConfig$Outbound,
  ConnectorConfig$outboundSchema,
} from "./connectorconfig.js";

export type ConnectorConfigResponse = {
  data: ConnectorConfig;
};

/** @internal */
export const ConnectorConfigResponse$inboundSchema: z.ZodType<
  ConnectorConfigResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: ConnectorConfig$inboundSchema,
});

/** @internal */
export type ConnectorConfigResponse$Outbound = {
  data: ConnectorConfig$Outbound;
};

/** @internal */
export const ConnectorConfigResponse$outboundSchema: z.ZodType<
  ConnectorConfigResponse$Outbound,
  z.ZodTypeDef,
  ConnectorConfigResponse
> = z.object({
  data: ConnectorConfig$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorConfigResponse$ {
  /** @deprecated use `ConnectorConfigResponse$inboundSchema` instead. */
  export const inboundSchema = ConnectorConfigResponse$inboundSchema;
  /** @deprecated use `ConnectorConfigResponse$outboundSchema` instead. */
  export const outboundSchema = ConnectorConfigResponse$outboundSchema;
  /** @deprecated use `ConnectorConfigResponse$Outbound` instead. */
  export type Outbound = ConnectorConfigResponse$Outbound;
}

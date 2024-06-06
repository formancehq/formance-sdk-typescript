/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type InstallConnectorRequest = {
    connectorConfig: shared.ConnectorConfig;
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
};

export type InstallConnectorResponse = {
    /**
     * OK
     */
    connectorResponse?: shared.ConnectorResponse | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace InstallConnectorRequest$ {
    export const inboundSchema: z.ZodType<InstallConnectorRequest, z.ZodTypeDef, unknown> = z
        .object({
            ConnectorConfig: shared.ConnectorConfig$.inboundSchema,
            connector: shared.Connector$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                ConnectorConfig: "connectorConfig",
            });
        });

    export type Outbound = {
        ConnectorConfig: shared.ConnectorConfig$.Outbound;
        connector: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InstallConnectorRequest> = z
        .object({
            connectorConfig: shared.ConnectorConfig$.outboundSchema,
            connector: shared.Connector$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                connectorConfig: "ConnectorConfig",
            });
        });
}

/** @internal */
export namespace InstallConnectorResponse$ {
    export const inboundSchema: z.ZodType<InstallConnectorResponse, z.ZodTypeDef, unknown> = z
        .object({
            ConnectorResponse: shared.ConnectorResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ConnectorResponse: "connectorResponse",
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ConnectorResponse?: shared.ConnectorResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InstallConnectorResponse> = z
        .object({
            connectorResponse: shared.ConnectorResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                connectorResponse: "ConnectorResponse",
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

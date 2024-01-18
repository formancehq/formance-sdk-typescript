/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
    export type Inbound = {
        ConnectorConfig: shared.ConnectorConfig$.Inbound;
        connector: shared.Connector;
    };

    export const inboundSchema: z.ZodType<InstallConnectorRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ConnectorConfig: shared.ConnectorConfig$.inboundSchema,
            connector: shared.Connector$,
        })
        .transform((v) => {
            return {
                connectorConfig: v.ConnectorConfig,
                connector: v.connector,
            };
        });

    export type Outbound = {
        ConnectorConfig: shared.ConnectorConfig$.Outbound;
        connector: shared.Connector;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InstallConnectorRequest> = z
        .object({
            connectorConfig: shared.ConnectorConfig$.outboundSchema,
            connector: shared.Connector$,
        })
        .transform((v) => {
            return {
                ConnectorConfig: v.connectorConfig,
                connector: v.connector,
            };
        });
}

/** @internal */
export namespace InstallConnectorResponse$ {
    export type Inbound = {
        ConnectorResponse?: shared.ConnectorResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<InstallConnectorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ConnectorResponse: shared.ConnectorResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ConnectorResponse === undefined
                    ? null
                    : { connectorResponse: v.ConnectorResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ...(v.connectorResponse === undefined
                    ? null
                    : { ConnectorResponse: v.connectorResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

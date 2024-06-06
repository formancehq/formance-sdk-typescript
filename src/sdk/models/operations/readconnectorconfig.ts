/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ReadConnectorConfigRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
};

export type ReadConnectorConfigResponse = {
    /**
     * OK
     */
    connectorConfigResponse?: shared.ConnectorConfigResponse | undefined;
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
export namespace ReadConnectorConfigRequest$ {
    export const inboundSchema: z.ZodType<ReadConnectorConfigRequest, z.ZodTypeDef, unknown> =
        z.object({
            connector: shared.Connector$.inboundSchema,
        });

    export type Outbound = {
        connector: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadConnectorConfigRequest> =
        z.object({
            connector: shared.Connector$.outboundSchema,
        });
}

/** @internal */
export namespace ReadConnectorConfigResponse$ {
    export const inboundSchema: z.ZodType<ReadConnectorConfigResponse, z.ZodTypeDef, unknown> = z
        .object({
            ConnectorConfigResponse: shared.ConnectorConfigResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ConnectorConfigResponse: "connectorConfigResponse",
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ConnectorConfigResponse?: shared.ConnectorConfigResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadConnectorConfigResponse> = z
        .object({
            connectorConfigResponse: shared.ConnectorConfigResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                connectorConfigResponse: "ConnectorConfigResponse",
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

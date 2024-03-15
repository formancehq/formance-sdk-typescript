/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type UninstallConnectorRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
};

export type UninstallConnectorResponse = {
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
export namespace UninstallConnectorRequest$ {
    export type Inbound = {
        connector: shared.Connector;
    };

    export const inboundSchema: z.ZodType<UninstallConnectorRequest, z.ZodTypeDef, Inbound> = z
        .object({
            connector: shared.Connector$,
        })
        .transform((v) => {
            return {
                connector: v.connector,
            };
        });

    export type Outbound = {
        connector: shared.Connector;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UninstallConnectorRequest> = z
        .object({
            connector: shared.Connector$,
        })
        .transform((v) => {
            return {
                connector: v.connector,
            };
        });
}

/** @internal */
export namespace UninstallConnectorResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UninstallConnectorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UninstallConnectorResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

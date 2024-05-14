/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type UninstallConnectorV1Request = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The connector ID.
     */
    connectorId: string;
};

export type UninstallConnectorV1Response = {};

/** @internal */
export namespace UninstallConnectorV1Request$ {
    export const inboundSchema: z.ZodType<UninstallConnectorV1Request, z.ZodTypeDef, unknown> = z
        .object({
            connector: shared.Connector$,
            connectorId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                connectorId: v.connectorId,
            };
        });

    export type Outbound = {
        connector: shared.Connector;
        connectorId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UninstallConnectorV1Request> = z
        .object({
            connector: shared.Connector$,
            connectorId: z.string(),
        })
        .transform((v) => {
            return {
                connector: v.connector,
                connectorId: v.connectorId,
            };
        });
}

/** @internal */
export namespace UninstallConnectorV1Response$ {
    export const inboundSchema: z.ZodType<UninstallConnectorV1Response, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UninstallConnectorV1Response> =
        z.object({});
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ResetConnectorV1Request = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
    /**
     * The connector ID.
     */
    connectorId: string;
};

export type ResetConnectorV1Response = {};

/** @internal */
export namespace ResetConnectorV1Request$ {
    export const inboundSchema: z.ZodType<ResetConnectorV1Request, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResetConnectorV1Request> = z
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
export namespace ResetConnectorV1Response$ {
    export const inboundSchema: z.ZodType<ResetConnectorV1Response, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResetConnectorV1Response> =
        z.object({});
}

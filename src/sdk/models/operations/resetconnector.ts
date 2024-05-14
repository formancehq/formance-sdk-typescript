/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ResetConnectorRequest = {
    /**
     * The name of the connector.
     */
    connector: shared.Connector;
};

export type ResetConnectorResponse = {};

/** @internal */
export namespace ResetConnectorRequest$ {
    export const inboundSchema: z.ZodType<ResetConnectorRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResetConnectorRequest> = z
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
export namespace ResetConnectorResponse$ {
    export const inboundSchema: z.ZodType<ResetConnectorResponse, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResetConnectorResponse> =
        z.object({});
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type DeactivateConfigRequest = {
    /**
     * Config ID
     */
    id: string;
};

export type DeactivateConfigResponse = {
    /**
     * Config successfully deactivated.
     */
    configResponse?: shared.ConfigResponse | undefined;
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
export namespace DeactivateConfigRequest$ {
    export const inboundSchema: z.ZodType<DeactivateConfigRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeactivateConfigRequest> =
        z.object({
            id: z.string(),
        });
}

/** @internal */
export namespace DeactivateConfigResponse$ {
    export const inboundSchema: z.ZodType<DeactivateConfigResponse, z.ZodTypeDef, unknown> = z
        .object({
            ConfigResponse: shared.ConfigResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ConfigResponse: "configResponse",
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ConfigResponse?: shared.ConfigResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeactivateConfigResponse> = z
        .object({
            configResponse: shared.ConfigResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                configResponse: "ConfigResponse",
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

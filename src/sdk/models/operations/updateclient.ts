/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type UpdateClientRequest = {
    updateClientRequest?: shared.UpdateClientRequest | undefined;
    /**
     * Client ID
     */
    clientId: string;
};

export type UpdateClientResponse = {
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
    /**
     * Updated client
     */
    updateClientResponse?: shared.UpdateClientResponse | undefined;
};

/** @internal */
export namespace UpdateClientRequest$ {
    export const inboundSchema: z.ZodType<UpdateClientRequest, z.ZodTypeDef, unknown> = z
        .object({
            UpdateClientRequest: shared.UpdateClientRequest$.inboundSchema.optional(),
            clientId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                UpdateClientRequest: "updateClientRequest",
            });
        });

    export type Outbound = {
        UpdateClientRequest?: shared.UpdateClientRequest$.Outbound | undefined;
        clientId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateClientRequest> = z
        .object({
            updateClientRequest: shared.UpdateClientRequest$.outboundSchema.optional(),
            clientId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                updateClientRequest: "UpdateClientRequest",
            });
        });
}

/** @internal */
export namespace UpdateClientResponse$ {
    export const inboundSchema: z.ZodType<UpdateClientResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            UpdateClientResponse: shared.UpdateClientResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                UpdateClientResponse: "updateClientResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        UpdateClientResponse?: shared.UpdateClientResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateClientResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            updateClientResponse: shared.UpdateClientResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                updateClientResponse: "UpdateClientResponse",
            });
        });
}

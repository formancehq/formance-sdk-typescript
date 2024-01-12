/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type InsertConfigResponse = {
    /**
     * Config created successfully.
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
    /**
     * Error
     */
    webhooksErrorResponse?: errors.WebhooksErrorResponse | undefined;
};

/** @internal */
export namespace InsertConfigResponse$ {
    export type Inbound = {
        ConfigResponse?: shared.ConfigResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<InsertConfigResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ConfigResponse: shared.ConfigResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.ConfigResponse === undefined ? null : { configResponse: v.ConfigResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });

    export type Outbound = {
        ConfigResponse?: shared.ConfigResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InsertConfigResponse> = z
        .object({
            configResponse: shared.ConfigResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.configResponse === undefined ? null : { ConfigResponse: v.configResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });
}

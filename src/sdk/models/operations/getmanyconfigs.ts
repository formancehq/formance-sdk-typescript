/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetManyConfigsRequest = {
    /**
     * Optional filter by endpoint URL
     */
    endpoint?: string | undefined;
    /**
     * Optional filter by Config ID
     */
    id?: string | undefined;
};

export type GetManyConfigsResponse = {
    /**
     * OK
     */
    configsResponse?: shared.ConfigsResponse | undefined;
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
export namespace GetManyConfigsRequest$ {
    export type Inbound = {
        endpoint?: string | undefined;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetManyConfigsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            endpoint: z.string().optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endpoint === undefined ? null : { endpoint: v.endpoint }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        endpoint?: string | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetManyConfigsRequest> = z
        .object({
            endpoint: z.string().optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.endpoint === undefined ? null : { endpoint: v.endpoint }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace GetManyConfigsResponse$ {
    export type Inbound = {
        ConfigsResponse?: shared.ConfigsResponse$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetManyConfigsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ConfigsResponse: shared.ConfigsResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.ConfigsResponse === undefined
                    ? null
                    : { configsResponse: v.ConfigsResponse }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });

    export type Outbound = {
        ConfigsResponse?: shared.ConfigsResponse$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetManyConfigsResponse> = z
        .object({
            configsResponse: shared.ConfigsResponse$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.configsResponse === undefined
                    ? null
                    : { ConfigsResponse: v.configsResponse }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });
}

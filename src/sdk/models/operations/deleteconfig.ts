/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as z from "zod";

export type DeleteConfigRequest = {
    /**
     * Config ID
     */
    id: string;
};

export type DeleteConfigResponse = {
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
export namespace DeleteConfigRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<DeleteConfigRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteConfigRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteConfigResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteConfigResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        webhooksErrorResponse?: errors.WebhooksErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteConfigResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhooksErrorResponse: errors.WebhooksErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.webhooksErrorResponse === undefined
                    ? null
                    : { webhooksErrorResponse: v.webhooksErrorResponse }),
            };
        });
}

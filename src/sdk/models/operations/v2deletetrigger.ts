/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as z from "zod";

export type V2DeleteTriggerRequest = {
    /**
     * The trigger id
     */
    triggerID: string;
};

export type V2DeleteTriggerResponse = {
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
     * General error
     */
    v2Error?: errors.V2Error | undefined;
};

/** @internal */
export namespace V2DeleteTriggerRequest$ {
    export type Inbound = {
        triggerID: string;
    };

    export const inboundSchema: z.ZodType<V2DeleteTriggerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            triggerID: z.string(),
        })
        .transform((v) => {
            return {
                triggerID: v.triggerID,
            };
        });

    export type Outbound = {
        triggerID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DeleteTriggerRequest> = z
        .object({
            triggerID: z.string(),
        })
        .transform((v) => {
            return {
                triggerID: v.triggerID,
            };
        });
}

/** @internal */
export namespace V2DeleteTriggerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2Error?: errors.V2Error$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2DeleteTriggerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2Error: errors.V2Error$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2Error?: errors.V2Error$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2DeleteTriggerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2Error: errors.V2Error$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
            };
        });
}

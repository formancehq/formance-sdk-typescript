/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type V2ReadTriggerRequest = {
    /**
     * The trigger id
     */
    triggerID: string;
};

export type V2ReadTriggerResponse = {
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
    /**
     * A specific trigger
     */
    v2ReadTriggerResponse?: shared.V2ReadTriggerResponse | undefined;
};

/** @internal */
export namespace V2ReadTriggerRequest$ {
    export type Inbound = {
        triggerID: string;
    };

    export const inboundSchema: z.ZodType<V2ReadTriggerRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ReadTriggerRequest> = z
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
export namespace V2ReadTriggerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2Error?: errors.V2Error$.Inbound | undefined;
        V2ReadTriggerResponse?: shared.V2ReadTriggerResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2ReadTriggerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2Error: errors.V2Error$.inboundSchema.optional(),
            V2ReadTriggerResponse: shared.V2ReadTriggerResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
                ...(v.V2ReadTriggerResponse === undefined
                    ? null
                    : { v2ReadTriggerResponse: v.V2ReadTriggerResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2Error?: errors.V2Error$.Outbound | undefined;
        V2ReadTriggerResponse?: shared.V2ReadTriggerResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2ReadTriggerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2Error: errors.V2Error$.outboundSchema.optional(),
            v2ReadTriggerResponse: shared.V2ReadTriggerResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
                ...(v.v2ReadTriggerResponse === undefined
                    ? null
                    : { V2ReadTriggerResponse: v.v2ReadTriggerResponse }),
            };
        });
}

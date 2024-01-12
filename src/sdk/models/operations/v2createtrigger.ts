/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type V2CreateTriggerResponse = {
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
     * Created trigger
     */
    v2CreateTriggerResponse?: shared.V2CreateTriggerResponse | undefined;
    /**
     * General error
     */
    v2Error?: errors.V2Error | undefined;
};

/** @internal */
export namespace V2CreateTriggerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2CreateTriggerResponse?: shared.V2CreateTriggerResponse$.Inbound | undefined;
        V2Error?: errors.V2Error$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<V2CreateTriggerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2CreateTriggerResponse: shared.V2CreateTriggerResponse$.inboundSchema.optional(),
            V2Error: errors.V2Error$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2CreateTriggerResponse === undefined
                    ? null
                    : { v2CreateTriggerResponse: v.V2CreateTriggerResponse }),
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2CreateTriggerResponse?: shared.V2CreateTriggerResponse$.Outbound | undefined;
        V2Error?: errors.V2Error$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V2CreateTriggerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2CreateTriggerResponse: shared.V2CreateTriggerResponse$.outboundSchema.optional(),
            v2Error: errors.V2Error$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2CreateTriggerResponse === undefined
                    ? null
                    : { V2CreateTriggerResponse: v.v2CreateTriggerResponse }),
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type TestTriggerRequest = {
    requestBody?: Record<string, any> | undefined;
    /**
     * The trigger id
     */
    triggerID: string;
};

export type TestTriggerResponse = {
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
     * Test a trigger
     */
    v2TestTriggerResponse?: shared.V2TestTriggerResponse | undefined;
};

/** @internal */
export namespace TestTriggerRequest$ {
    export type Inbound = {
        RequestBody?: Record<string, any> | undefined;
        triggerID: string;
    };

    export const inboundSchema: z.ZodType<TestTriggerRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.record(z.any()).optional(),
            triggerID: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                triggerID: v.triggerID,
            };
        });

    export type Outbound = {
        RequestBody?: Record<string, any> | undefined;
        triggerID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestTriggerRequest> = z
        .object({
            requestBody: z.record(z.any()).optional(),
            triggerID: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                triggerID: v.triggerID,
            };
        });
}

/** @internal */
export namespace TestTriggerResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        V2Error?: errors.V2Error$.Inbound | undefined;
        V2TestTriggerResponse?: shared.V2TestTriggerResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<TestTriggerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            V2Error: errors.V2Error$.inboundSchema.optional(),
            V2TestTriggerResponse: shared.V2TestTriggerResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.V2Error === undefined ? null : { v2Error: v.V2Error }),
                ...(v.V2TestTriggerResponse === undefined
                    ? null
                    : { v2TestTriggerResponse: v.V2TestTriggerResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        V2Error?: errors.V2Error$.Outbound | undefined;
        V2TestTriggerResponse?: shared.V2TestTriggerResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TestTriggerResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            v2Error: errors.V2Error$.outboundSchema.optional(),
            v2TestTriggerResponse: shared.V2TestTriggerResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.v2Error === undefined ? null : { V2Error: v.v2Error }),
                ...(v.v2TestTriggerResponse === undefined
                    ? null
                    : { V2TestTriggerResponse: v.v2TestTriggerResponse }),
            };
        });
}

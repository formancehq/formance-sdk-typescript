/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ReadTriggerRequest = {
    /**
     * The trigger id
     */
    triggerID: string;
};

export type ReadTriggerResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * A specific trigger
     */
    readTriggerResponse?: shared.ReadTriggerResponse | undefined;
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
export namespace ReadTriggerRequest$ {
    export const inboundSchema: z.ZodType<ReadTriggerRequest, z.ZodTypeDef, unknown> = z.object({
        triggerID: z.string(),
    });

    export type Outbound = {
        triggerID: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadTriggerRequest> = z.object({
        triggerID: z.string(),
    });
}

/** @internal */
export namespace ReadTriggerResponse$ {
    export const inboundSchema: z.ZodType<ReadTriggerResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ReadTriggerResponse: shared.ReadTriggerResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ReadTriggerResponse: "readTriggerResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ReadTriggerResponse?: shared.ReadTriggerResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadTriggerResponse> = z
        .object({
            contentType: z.string(),
            readTriggerResponse: shared.ReadTriggerResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                readTriggerResponse: "ReadTriggerResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

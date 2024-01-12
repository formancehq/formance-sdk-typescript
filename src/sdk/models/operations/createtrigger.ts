/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type CreateTriggerResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Created trigger
     */
    createTriggerResponse?: shared.CreateTriggerResponse | undefined;
    /**
     * General error
     */
    error?: shared.ErrorT | undefined;
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
export namespace CreateTriggerResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateTriggerResponse?: shared.CreateTriggerResponse$.Inbound | undefined;
        Error?: shared.ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CreateTriggerResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateTriggerResponse: shared.CreateTriggerResponse$.inboundSchema.optional(),
            Error: shared.ErrorT$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateTriggerResponse === undefined
                    ? null
                    : { createTriggerResponse: v.CreateTriggerResponse }),
                ...(v.Error === undefined ? null : { error: v.Error }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateTriggerResponse?: shared.CreateTriggerResponse$.Outbound | undefined;
        Error?: shared.ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTriggerResponse> = z
        .object({
            contentType: z.string(),
            createTriggerResponse: shared.CreateTriggerResponse$.outboundSchema.optional(),
            error: shared.ErrorT$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createTriggerResponse === undefined
                    ? null
                    : { CreateTriggerResponse: v.createTriggerResponse }),
                ...(v.error === undefined ? null : { Error: v.error }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

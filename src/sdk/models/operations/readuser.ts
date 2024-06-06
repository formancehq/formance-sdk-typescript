/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type ReadUserRequest = {
    /**
     * User ID
     */
    userId: string;
};

export type ReadUserResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Retrieved user
     */
    readUserResponse?: shared.ReadUserResponse | undefined;
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
export namespace ReadUserRequest$ {
    export const inboundSchema: z.ZodType<ReadUserRequest, z.ZodTypeDef, unknown> = z.object({
        userId: z.string(),
    });

    export type Outbound = {
        userId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadUserRequest> = z.object({
        userId: z.string(),
    });
}

/** @internal */
export namespace ReadUserResponse$ {
    export const inboundSchema: z.ZodType<ReadUserResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ReadUserResponse: shared.ReadUserResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ReadUserResponse: "readUserResponse",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ReadUserResponse?: shared.ReadUserResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadUserResponse> = z
        .object({
            contentType: z.string(),
            readUserResponse: shared.ReadUserResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                readUserResponse: "ReadUserResponse",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}

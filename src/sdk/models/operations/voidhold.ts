/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type VoidHoldRequest = {
    holdId: string;
};

export type VoidHoldResponse = {
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
};

/** @internal */
export namespace VoidHoldRequest$ {
    export type Inbound = {
        hold_id: string;
    };

    export const inboundSchema: z.ZodType<VoidHoldRequest, z.ZodTypeDef, Inbound> = z
        .object({
            hold_id: z.string(),
        })
        .transform((v) => {
            return {
                holdId: v.hold_id,
            };
        });

    export type Outbound = {
        hold_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VoidHoldRequest> = z
        .object({
            holdId: z.string(),
        })
        .transform((v) => {
            return {
                hold_id: v.holdId,
            };
        });
}

/** @internal */
export namespace VoidHoldResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<VoidHoldResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VoidHoldResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

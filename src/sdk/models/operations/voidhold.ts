/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
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
    /**
     * Error
     */
    walletsErrorResponse?: errors.WalletsErrorResponse | undefined;
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
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<VoidHoldResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: errors.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VoidHoldResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: errors.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

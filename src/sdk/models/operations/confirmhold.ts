/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type ConfirmHoldRequest = {
    confirmHoldRequest?: shared.ConfirmHoldRequest | undefined;
    holdId: string;
};

export type ConfirmHoldResponse = {
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
    walletsErrorResponse?: shared.WalletsErrorResponse | undefined;
};

/** @internal */
export namespace ConfirmHoldRequest$ {
    export type Inbound = {
        ConfirmHoldRequest?: shared.ConfirmHoldRequest$.Inbound | undefined;
        hold_id: string;
    };

    export const inboundSchema: z.ZodType<ConfirmHoldRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ConfirmHoldRequest: shared.ConfirmHoldRequest$.inboundSchema.optional(),
            hold_id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.ConfirmHoldRequest === undefined
                    ? null
                    : { confirmHoldRequest: v.ConfirmHoldRequest }),
                holdId: v.hold_id,
            };
        });

    export type Outbound = {
        ConfirmHoldRequest?: shared.ConfirmHoldRequest$.Outbound | undefined;
        hold_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfirmHoldRequest> = z
        .object({
            confirmHoldRequest: shared.ConfirmHoldRequest$.outboundSchema.optional(),
            holdId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.confirmHoldRequest === undefined
                    ? null
                    : { ConfirmHoldRequest: v.confirmHoldRequest }),
                hold_id: v.holdId,
            };
        });
}

/** @internal */
export namespace ConfirmHoldResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: shared.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ConfirmHoldResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: shared.WalletsErrorResponse$.inboundSchema.optional(),
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
        walletsErrorResponse?: shared.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConfirmHoldResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: shared.WalletsErrorResponse$.outboundSchema.optional(),
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

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GetWalletRequest = {
    id: string;
};

export type GetWalletResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Wallet
     */
    getWalletResponse?: shared.GetWalletResponse | undefined;
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
export namespace GetWalletRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        GetWalletResponse?: shared.GetWalletResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: shared.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetWalletResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GetWalletResponse: shared.GetWalletResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: shared.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetWalletResponse === undefined
                    ? null
                    : { getWalletResponse: v.GetWalletResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        GetWalletResponse?: shared.GetWalletResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: shared.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletResponse> = z
        .object({
            contentType: z.string(),
            getWalletResponse: shared.GetWalletResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: shared.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getWalletResponse === undefined
                    ? null
                    : { GetWalletResponse: v.getWalletResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetWalletSummaryRequest = {
    id: string;
};

export type GetWalletSummaryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Wallet summary
     */
    getWalletSummaryResponse?: shared.GetWalletSummaryResponse | undefined;
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
export namespace GetWalletSummaryRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetWalletSummaryRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletSummaryRequest> = z
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
export namespace GetWalletSummaryResponse$ {
    export type Inbound = {
        ContentType: string;
        GetWalletSummaryResponse?: shared.GetWalletSummaryResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetWalletSummaryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            GetWalletSummaryResponse: shared.GetWalletSummaryResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: errors.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.GetWalletSummaryResponse === undefined
                    ? null
                    : { getWalletSummaryResponse: v.GetWalletSummaryResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        GetWalletSummaryResponse?: shared.GetWalletSummaryResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWalletSummaryResponse> = z
        .object({
            contentType: z.string(),
            getWalletSummaryResponse: shared.GetWalletSummaryResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: errors.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.getWalletSummaryResponse === undefined
                    ? null
                    : { GetWalletSummaryResponse: v.getWalletSummaryResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

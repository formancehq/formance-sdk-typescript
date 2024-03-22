/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type CreateWalletResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Wallet created
     */
    createWalletResponse?: shared.CreateWalletResponse | undefined;
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
export namespace CreateWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateWalletResponse?: shared.CreateWalletResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateWalletResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateWalletResponse: shared.CreateWalletResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: errors.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateWalletResponse === undefined
                    ? null
                    : { createWalletResponse: v.CreateWalletResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateWalletResponse?: shared.CreateWalletResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateWalletResponse> = z
        .object({
            contentType: z.string(),
            createWalletResponse: shared.CreateWalletResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: errors.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createWalletResponse === undefined
                    ? null
                    : { CreateWalletResponse: v.createWalletResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

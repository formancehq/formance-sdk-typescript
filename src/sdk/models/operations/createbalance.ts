/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type CreateBalanceRequest = {
    createBalanceRequest?: shared.CreateBalanceRequest | undefined;
    id: string;
};

export type CreateBalanceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Created balance
     */
    createBalanceResponse?: shared.CreateBalanceResponse | undefined;
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
export namespace CreateBalanceRequest$ {
    export type Inbound = {
        CreateBalanceRequest?: shared.CreateBalanceRequest$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<CreateBalanceRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CreateBalanceRequest: shared.CreateBalanceRequest$.inboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.CreateBalanceRequest === undefined
                    ? null
                    : { createBalanceRequest: v.CreateBalanceRequest }),
                id: v.id,
            };
        });

    export type Outbound = {
        CreateBalanceRequest?: shared.CreateBalanceRequest$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBalanceRequest> = z
        .object({
            createBalanceRequest: shared.CreateBalanceRequest$.outboundSchema.optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.createBalanceRequest === undefined
                    ? null
                    : { CreateBalanceRequest: v.createBalanceRequest }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace CreateBalanceResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateBalanceResponse?: shared.CreateBalanceResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateBalanceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CreateBalanceResponse: shared.CreateBalanceResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            walletsErrorResponse: errors.WalletsErrorResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateBalanceResponse === undefined
                    ? null
                    : { createBalanceResponse: v.CreateBalanceResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateBalanceResponse?: shared.CreateBalanceResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateBalanceResponse> = z
        .object({
            contentType: z.string(),
            createBalanceResponse: shared.CreateBalanceResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            walletsErrorResponse: errors.WalletsErrorResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createBalanceResponse === undefined
                    ? null
                    : { CreateBalanceResponse: v.createBalanceResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.walletsErrorResponse === undefined
                    ? null
                    : { walletsErrorResponse: v.walletsErrorResponse }),
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as z from "zod";

export type UpdateWalletRequestBody = {
    /**
     * Custom metadata to attach to this wallet.
     */
    metadata: Record<string, string>;
};

export type UpdateWalletRequest = {
    requestBody?: UpdateWalletRequestBody | undefined;
    id: string;
};

export type UpdateWalletResponse = {
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
export namespace UpdateWalletRequestBody$ {
    export type Inbound = {
        metadata: Record<string, string>;
    };

    export const inboundSchema: z.ZodType<UpdateWalletRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            metadata: z.record(z.string()),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
            };
        });

    export type Outbound = {
        metadata: Record<string, string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletRequestBody> = z
        .object({
            metadata: z.record(z.string()),
        })
        .transform((v) => {
            return {
                metadata: v.metadata,
            };
        });
}

/** @internal */
export namespace UpdateWalletRequest$ {
    export type Inbound = {
        RequestBody?: UpdateWalletRequestBody$.Inbound | undefined;
        id: string;
    };

    export const inboundSchema: z.ZodType<UpdateWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => UpdateWalletRequestBody$.inboundSchema).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                id: v.id,
            };
        });

    export type Outbound = {
        RequestBody?: UpdateWalletRequestBody$.Outbound | undefined;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletRequest> = z
        .object({
            requestBody: z.lazy(() => UpdateWalletRequestBody$.outboundSchema).optional(),
            id: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                id: v.id,
            };
        });
}

/** @internal */
export namespace UpdateWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        walletsErrorResponse?: errors.WalletsErrorResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateWalletResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWalletResponse> = z
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

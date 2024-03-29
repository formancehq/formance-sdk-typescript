/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetInfoResponse = {
    /**
     * OK
     */
    configInfoResponse?: shared.ConfigInfoResponse | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
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
export namespace GetInfoResponse$ {
    export type Inbound = {
        ConfigInfoResponse?: shared.ConfigInfoResponse$.Inbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetInfoResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ConfigInfoResponse: shared.ConfigInfoResponse$.inboundSchema.optional(),
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ConfigInfoResponse === undefined
                    ? null
                    : { configInfoResponse: v.ConfigInfoResponse }),
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ConfigInfoResponse?: shared.ConfigInfoResponse$.Outbound | undefined;
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInfoResponse> = z
        .object({
            configInfoResponse: shared.ConfigInfoResponse$.outboundSchema.optional(),
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.configInfoResponse === undefined
                    ? null
                    : { ConfigInfoResponse: v.configInfoResponse }),
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

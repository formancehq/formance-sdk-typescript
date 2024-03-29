/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as shared from "../shared";
import * as z from "zod";

export type GetMappingRequest = {
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type GetMappingResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Error
     */
    errorResponse?: errors.ErrorResponse | undefined;
    /**
     * OK
     */
    mappingResponse?: shared.MappingResponse | undefined;
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
export namespace GetMappingRequest$ {
    export type Inbound = {
        ledger: string;
    };

    export const inboundSchema: z.ZodType<GetMappingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMappingRequest> = z
        .object({
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace GetMappingResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        MappingResponse?: shared.MappingResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetMappingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ErrorResponse: errors.ErrorResponse$.inboundSchema.optional(),
            MappingResponse: shared.MappingResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorResponse === undefined ? null : { errorResponse: v.ErrorResponse }),
                ...(v.MappingResponse === undefined
                    ? null
                    : { mappingResponse: v.MappingResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Outbound | undefined;
        MappingResponse?: shared.MappingResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMappingResponse> = z
        .object({
            contentType: z.string(),
            errorResponse: errors.ErrorResponse$.outboundSchema.optional(),
            mappingResponse: shared.MappingResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorResponse === undefined ? null : { ErrorResponse: v.errorResponse }),
                ...(v.mappingResponse === undefined
                    ? null
                    : { MappingResponse: v.mappingResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}

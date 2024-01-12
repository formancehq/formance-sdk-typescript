/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../../../sdk/models/errors";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateMappingRequest = {
    mapping: shared.Mapping | null;
    /**
     * Name of the ledger.
     */
    ledger: string;
};

export type UpdateMappingResponse = {
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
export namespace UpdateMappingRequest$ {
    export type Inbound = {
        Mapping: shared.Mapping$.Inbound | null;
        ledger: string;
    };

    export const inboundSchema: z.ZodType<UpdateMappingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            Mapping: z.nullable(shared.Mapping$.inboundSchema),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                mapping: v.Mapping,
                ledger: v.ledger,
            };
        });

    export type Outbound = {
        Mapping: shared.Mapping$.Outbound | null;
        ledger: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMappingRequest> = z
        .object({
            mapping: z.nullable(shared.Mapping$.outboundSchema),
            ledger: z.string(),
        })
        .transform((v) => {
            return {
                Mapping: v.mapping,
                ledger: v.ledger,
            };
        });
}

/** @internal */
export namespace UpdateMappingResponse$ {
    export type Inbound = {
        ContentType: string;
        ErrorResponse?: errors.ErrorResponse$.Inbound | undefined;
        MappingResponse?: shared.MappingResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateMappingResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMappingResponse> = z
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

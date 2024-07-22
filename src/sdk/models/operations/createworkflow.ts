/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateWorkflowResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Created workflow
     */
    createWorkflowResponse?: shared.CreateWorkflowResponse | undefined;
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
export const CreateWorkflowResponse$inboundSchema: z.ZodType<
    CreateWorkflowResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CreateWorkflowResponse: shared.CreateWorkflowResponse$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            CreateWorkflowResponse: "createWorkflowResponse",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CreateWorkflowResponse$Outbound = {
    ContentType: string;
    CreateWorkflowResponse?: shared.CreateWorkflowResponse$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreateWorkflowResponse$outboundSchema: z.ZodType<
    CreateWorkflowResponse$Outbound,
    z.ZodTypeDef,
    CreateWorkflowResponse
> = z
    .object({
        contentType: z.string(),
        createWorkflowResponse: shared.CreateWorkflowResponse$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            createWorkflowResponse: "CreateWorkflowResponse",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWorkflowResponse$ {
    /** @deprecated use `CreateWorkflowResponse$inboundSchema` instead. */
    export const inboundSchema = CreateWorkflowResponse$inboundSchema;
    /** @deprecated use `CreateWorkflowResponse$outboundSchema` instead. */
    export const outboundSchema = CreateWorkflowResponse$outboundSchema;
    /** @deprecated use `CreateWorkflowResponse$Outbound` instead. */
    export type Outbound = CreateWorkflowResponse$Outbound;
}

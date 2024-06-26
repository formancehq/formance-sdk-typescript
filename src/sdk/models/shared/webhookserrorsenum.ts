/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum WebhooksErrorsEnum {
    Internal = "INTERNAL",
    Validation = "VALIDATION",
    NotFound = "NOT_FOUND",
}

/** @internal */
export namespace WebhooksErrorsEnum$ {
    export const inboundSchema = z.nativeEnum(WebhooksErrorsEnum);
    export const outboundSchema = inboundSchema;
}

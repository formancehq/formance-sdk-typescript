/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum ErrorsEnum {
    Internal = "INTERNAL",
    InsufficientFund = "INSUFFICIENT_FUND",
    Validation = "VALIDATION",
    Conflict = "CONFLICT",
    NoScript = "NO_SCRIPT",
    CompilationFailed = "COMPILATION_FAILED",
    MetadataOverride = "METADATA_OVERRIDE",
}

/** @internal */
export const ErrorsEnum$ = z.nativeEnum(ErrorsEnum);

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class ScriptVars extends SpeakeasyBase {}

export class Script extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "plain" })
    plain: string;

    /**
     * Reference to attach to the generated transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vars" })
    @Type(() => ScriptVars)
    vars?: ScriptVars;
}
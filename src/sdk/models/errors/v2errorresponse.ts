/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { classToPlain, Expose } from "class-transformer";

/**
 * Error
 */
export class V2ErrorResponse extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "errorCode" })
    errorCode: shared.V2ErrorsEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage: string;

    constructor(err?: V2ErrorResponse) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "V2ErrorResponse";
        Object.setPrototypeOf(this, V2ErrorResponse.prototype);
    }
}

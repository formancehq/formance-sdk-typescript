// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type ConfirmHoldRequest struct {
	ConfirmHoldRequest *components.ConfirmHoldRequest `request:"mediaType=application/json"`
	// Use an idempotency key
	IdempotencyKey *string `header:"style=simple,explode=false,name=Idempotency-Key"`
	HoldID         string  `pathParam:"style=simple,explode=false,name=hold_id"`
}

func (o *ConfirmHoldRequest) GetConfirmHoldRequest() *components.ConfirmHoldRequest {
	if o == nil {
		return nil
	}
	return o.ConfirmHoldRequest
}

func (o *ConfirmHoldRequest) GetIdempotencyKey() *string {
	if o == nil {
		return nil
	}
	return o.IdempotencyKey
}

func (o *ConfirmHoldRequest) GetHoldID() string {
	if o == nil {
		return ""
	}
	return o.HoldID
}

type ConfirmHoldResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *ConfirmHoldResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

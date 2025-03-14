// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3ReversePaymentInitiationRequest struct {
	V3ReversePaymentInitiationRequest *components.V3ReversePaymentInitiationRequest `request:"mediaType=application/json"`
	// The payment initiation ID
	PaymentInitiationID string `pathParam:"style=simple,explode=false,name=paymentInitiationID"`
}

func (o *V3ReversePaymentInitiationRequest) GetV3ReversePaymentInitiationRequest() *components.V3ReversePaymentInitiationRequest {
	if o == nil {
		return nil
	}
	return o.V3ReversePaymentInitiationRequest
}

func (o *V3ReversePaymentInitiationRequest) GetPaymentInitiationID() string {
	if o == nil {
		return ""
	}
	return o.PaymentInitiationID
}

type V3ReversePaymentInitiationResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// Accepted
	V3ReversePaymentInitiationResponse *components.V3ReversePaymentInitiationResponse
}

func (o *V3ReversePaymentInitiationResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V3ReversePaymentInitiationResponse) GetV3ReversePaymentInitiationResponse() *components.V3ReversePaymentInitiationResponse {
	if o == nil {
		return nil
	}
	return o.V3ReversePaymentInitiationResponse
}

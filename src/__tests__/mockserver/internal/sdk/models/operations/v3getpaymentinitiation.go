// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3GetPaymentInitiationRequest struct {
	// The payment initiation ID
	PaymentInitiationID string `pathParam:"style=simple,explode=false,name=paymentInitiationID"`
}

func (o *V3GetPaymentInitiationRequest) GetPaymentInitiationID() string {
	if o == nil {
		return ""
	}
	return o.PaymentInitiationID
}

type V3GetPaymentInitiationResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	V3GetPaymentInitiationResponse *components.V3GetPaymentInitiationResponse
}

func (o *V3GetPaymentInitiationResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V3GetPaymentInitiationResponse) GetV3GetPaymentInitiationResponse() *components.V3GetPaymentInitiationResponse {
	if o == nil {
		return nil
	}
	return o.V3GetPaymentInitiationResponse
}

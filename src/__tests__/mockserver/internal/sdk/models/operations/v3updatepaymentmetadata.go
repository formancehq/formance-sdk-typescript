// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3UpdatePaymentMetadataRequest struct {
	V3UpdatePaymentMetadataRequest *components.V3UpdatePaymentMetadataRequest `request:"mediaType=application/json"`
	// The payment ID
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentID"`
}

func (o *V3UpdatePaymentMetadataRequest) GetV3UpdatePaymentMetadataRequest() *components.V3UpdatePaymentMetadataRequest {
	if o == nil {
		return nil
	}
	return o.V3UpdatePaymentMetadataRequest
}

func (o *V3UpdatePaymentMetadataRequest) GetPaymentID() string {
	if o == nil {
		return ""
	}
	return o.PaymentID
}

type V3UpdatePaymentMetadataResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *V3UpdatePaymentMetadataResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3UpdateBankAccountMetadataRequest struct {
	V3UpdateBankAccountMetadataRequest *components.V3UpdateBankAccountMetadataRequest `request:"mediaType=application/json"`
	// The bank account ID
	BankAccountID string `pathParam:"style=simple,explode=false,name=bankAccountID"`
}

func (o *V3UpdateBankAccountMetadataRequest) GetV3UpdateBankAccountMetadataRequest() *components.V3UpdateBankAccountMetadataRequest {
	if o == nil {
		return nil
	}
	return o.V3UpdateBankAccountMetadataRequest
}

func (o *V3UpdateBankAccountMetadataRequest) GetBankAccountID() string {
	if o == nil {
		return ""
	}
	return o.BankAccountID
}

type V3UpdateBankAccountMetadataResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *V3UpdateBankAccountMetadataResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

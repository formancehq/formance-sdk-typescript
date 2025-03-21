// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type CreatePolicyResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	PolicyResponse *components.PolicyResponse
}

func (o *CreatePolicyResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *CreatePolicyResponse) GetPolicyResponse() *components.PolicyResponse {
	if o == nil {
		return nil
	}
	return o.PolicyResponse
}

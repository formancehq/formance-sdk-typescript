// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type V3AddAccountToPoolRequest struct {
	// The account ID
	AccountID string `pathParam:"style=simple,explode=false,name=accountID"`
	// The pool ID
	PoolID string `pathParam:"style=simple,explode=false,name=poolID"`
}

func (o *V3AddAccountToPoolRequest) GetAccountID() string {
	if o == nil {
		return ""
	}
	return o.AccountID
}

func (o *V3AddAccountToPoolRequest) GetPoolID() string {
	if o == nil {
		return ""
	}
	return o.PoolID
}

type V3AddAccountToPoolResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
}

func (o *V3AddAccountToPoolResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

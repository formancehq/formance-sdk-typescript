// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

type GetPoolBalancesRequest struct {
	// Filter balances by date.
	//
	At time.Time `queryParam:"style=form,explode=true,name=at"`
	// The pool ID.
	PoolID string `pathParam:"style=simple,explode=false,name=poolId"`
}

func (g GetPoolBalancesRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(g, "", false)
}

func (g *GetPoolBalancesRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &g, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *GetPoolBalancesRequest) GetAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.At
}

func (o *GetPoolBalancesRequest) GetPoolID() string {
	if o == nil {
		return ""
	}
	return o.PoolID
}

type GetPoolBalancesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	PoolBalancesResponse *components.PoolBalancesResponse
}

func (o *GetPoolBalancesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetPoolBalancesResponse) GetPoolBalancesResponse() *components.PoolBalancesResponse {
	if o == nil {
		return nil
	}
	return o.PoolBalancesResponse
}

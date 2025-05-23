// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

type V3GetAccountBalancesRequest struct {
	// The account ID
	AccountID string `pathParam:"style=simple,explode=false,name=accountID"`
	// The asset to filter by
	Asset *string `queryParam:"style=form,explode=true,name=asset"`
	// Parameter used in pagination requests. Set to the value of next for the next page of results. Set to the value of previous for the previous page of results. No other parameters can be set when this parameter is set.
	//
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// The start of the time range to filter by
	FromTimestamp *time.Time `queryParam:"style=form,explode=true,name=fromTimestamp"`
	// The number of items to return
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
	// The end of the time range to filter by
	ToTimestamp *time.Time `queryParam:"style=form,explode=true,name=toTimestamp"`
}

func (v V3GetAccountBalancesRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3GetAccountBalancesRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3GetAccountBalancesRequest) GetAccountID() string {
	if o == nil {
		return ""
	}
	return o.AccountID
}

func (o *V3GetAccountBalancesRequest) GetAsset() *string {
	if o == nil {
		return nil
	}
	return o.Asset
}

func (o *V3GetAccountBalancesRequest) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *V3GetAccountBalancesRequest) GetFromTimestamp() *time.Time {
	if o == nil {
		return nil
	}
	return o.FromTimestamp
}

func (o *V3GetAccountBalancesRequest) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *V3GetAccountBalancesRequest) GetToTimestamp() *time.Time {
	if o == nil {
		return nil
	}
	return o.ToTimestamp
}

type V3GetAccountBalancesResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	V3BalancesCursorResponse *components.V3BalancesCursorResponse
}

func (o *V3GetAccountBalancesResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V3GetAccountBalancesResponse) GetV3BalancesCursorResponse() *components.V3BalancesCursorResponse {
	if o == nil {
		return nil
	}
	return o.V3BalancesCursorResponse
}

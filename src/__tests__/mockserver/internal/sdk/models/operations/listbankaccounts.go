// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type ListBankAccountsRequest struct {
	// Parameter used in pagination requests. Maximum page size is set to 15.
	// Set to the value of next for the next page of results.
	// Set to the value of previous for the previous page of results.
	// No other parameters can be set when this parameter is set.
	//
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	// The maximum number of results to return per page.
	//
	PageSize *int64 `default:"15" queryParam:"style=form,explode=true,name=pageSize"`
	// Fields used to sort payments (default is date:desc).
	Sort []string `queryParam:"style=form,explode=true,name=sort"`
}

func (l ListBankAccountsRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(l, "", false)
}

func (l *ListBankAccountsRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &l, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *ListBankAccountsRequest) GetCursor() *string {
	if o == nil {
		return nil
	}
	return o.Cursor
}

func (o *ListBankAccountsRequest) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *ListBankAccountsRequest) GetSort() []string {
	if o == nil {
		return nil
	}
	return o.Sort
}

type ListBankAccountsResponse struct {
	// OK
	BankAccountsCursor *components.BankAccountsCursor
	HTTPMeta           components.HTTPMetadata `json:"-"`
}

func (o *ListBankAccountsResponse) GetBankAccountsCursor() *components.BankAccountsCursor {
	if o == nil {
		return nil
	}
	return o.BankAccountsCursor
}

func (o *ListBankAccountsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

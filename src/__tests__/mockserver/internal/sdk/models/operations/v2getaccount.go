// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
	"time"
)

type V2GetAccountRequest struct {
	// Exact address of the account. It must match the following regular expressions pattern:
	// ```
	// ^\w+(:\w+)*$
	// ```
	//
	Address string  `pathParam:"style=simple,explode=false,name=address"`
	Expand  *string `queryParam:"style=form,explode=true,name=expand"`
	// Name of the ledger.
	Ledger string     `pathParam:"style=simple,explode=false,name=ledger"`
	Pit    *time.Time `queryParam:"style=form,explode=true,name=pit"`
}

func (v V2GetAccountRequest) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V2GetAccountRequest) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V2GetAccountRequest) GetAddress() string {
	if o == nil {
		return ""
	}
	return o.Address
}

func (o *V2GetAccountRequest) GetExpand() *string {
	if o == nil {
		return nil
	}
	return o.Expand
}

func (o *V2GetAccountRequest) GetLedger() string {
	if o == nil {
		return ""
	}
	return o.Ledger
}

func (o *V2GetAccountRequest) GetPit() *time.Time {
	if o == nil {
		return nil
	}
	return o.Pit
}

type V2GetAccountResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	V2AccountResponse *components.V2AccountResponse
}

func (o *V2GetAccountResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *V2GetAccountResponse) GetV2AccountResponse() *components.V2AccountResponse {
	if o == nil {
		return nil
	}
	return o.V2AccountResponse
}

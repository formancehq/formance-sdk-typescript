// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

type V3DummypayConfig struct {
	Directory     string  `json:"directory"`
	Name          string  `json:"name"`
	PageSize      *int64  `default:"25" json:"pageSize"`
	PollingPeriod *string `default:"2m" json:"pollingPeriod"`
	Provider      *string `default:"Dummypay" json:"provider"`
}

func (v V3DummypayConfig) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3DummypayConfig) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3DummypayConfig) GetDirectory() string {
	if o == nil {
		return ""
	}
	return o.Directory
}

func (o *V3DummypayConfig) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *V3DummypayConfig) GetPageSize() *int64 {
	if o == nil {
		return nil
	}
	return o.PageSize
}

func (o *V3DummypayConfig) GetPollingPeriod() *string {
	if o == nil {
		return nil
	}
	return o.PollingPeriod
}

func (o *V3DummypayConfig) GetProvider() *string {
	if o == nil {
		return nil
	}
	return o.Provider
}

// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"math/big"
	"mockserver/internal/sdk/utils"
)

type AccountWithVolumesAndBalances struct {
	Address  string              `json:"address"`
	Balances map[string]*big.Int `json:"balances,omitempty"`
	Metadata map[string]any      `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Volumes  map[string]Volume   `json:"volumes,omitempty"`
}

func (a AccountWithVolumesAndBalances) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(a, "", false)
}

func (a *AccountWithVolumesAndBalances) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &a, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *AccountWithVolumesAndBalances) GetAddress() string {
	if o == nil {
		return ""
	}
	return o.Address
}

func (o *AccountWithVolumesAndBalances) GetBalances() map[string]*big.Int {
	if o == nil {
		return nil
	}
	return o.Balances
}

func (o *AccountWithVolumesAndBalances) GetMetadata() map[string]any {
	if o == nil {
		return nil
	}
	return o.Metadata
}

func (o *AccountWithVolumesAndBalances) GetType() *string {
	if o == nil {
		return nil
	}
	return o.Type
}

func (o *AccountWithVolumesAndBalances) GetVolumes() map[string]Volume {
	if o == nil {
		return nil
	}
	return o.Volumes
}

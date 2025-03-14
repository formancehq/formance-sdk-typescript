// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type V3Schedule struct {
	ConnectorID string    `json:"connectorID"`
	CreatedAt   time.Time `json:"createdAt"`
	ID          string    `json:"id"`
}

func (v V3Schedule) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(v, "", false)
}

func (v *V3Schedule) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &v, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *V3Schedule) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

func (o *V3Schedule) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *V3Schedule) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

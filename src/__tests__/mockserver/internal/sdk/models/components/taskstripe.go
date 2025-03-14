// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type TaskStripeDescriptor struct {
	Account string `json:"account"`
	Main    *bool  `json:"main,omitempty"`
	Name    string `json:"name"`
}

func (o *TaskStripeDescriptor) GetAccount() string {
	if o == nil {
		return ""
	}
	return o.Account
}

func (o *TaskStripeDescriptor) GetMain() *bool {
	if o == nil {
		return nil
	}
	return o.Main
}

func (o *TaskStripeDescriptor) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

type TaskStripeState struct {
}

type TaskStripe struct {
	ConnectorID string               `json:"connectorID"`
	CreatedAt   time.Time            `json:"createdAt"`
	Descriptor  TaskStripeDescriptor `json:"descriptor"`
	Error       *string              `json:"error,omitempty"`
	ID          string               `json:"id"`
	State       *TaskStripeState     `json:"state,omitempty"`
	Status      TaskStatus           `json:"status"`
	UpdatedAt   time.Time            `json:"updatedAt"`
}

func (t TaskStripe) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(t, "", false)
}

func (t *TaskStripe) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &t, "", false, true); err != nil {
		return err
	}
	return nil
}

func (o *TaskStripe) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

func (o *TaskStripe) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *TaskStripe) GetDescriptor() TaskStripeDescriptor {
	if o == nil {
		return TaskStripeDescriptor{}
	}
	return o.Descriptor
}

func (o *TaskStripe) GetError() *string {
	if o == nil {
		return nil
	}
	return o.Error
}

func (o *TaskStripe) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *TaskStripe) GetState() *TaskStripeState {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *TaskStripe) GetStatus() TaskStatus {
	if o == nil {
		return TaskStatus("")
	}
	return o.Status
}

func (o *TaskStripe) GetUpdatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.UpdatedAt
}

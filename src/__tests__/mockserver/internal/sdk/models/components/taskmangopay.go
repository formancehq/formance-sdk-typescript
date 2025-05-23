// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
	"time"
)

type TaskMangoPayDescriptor struct {
	Key    *string `json:"key,omitempty"`
	Name   *string `json:"name,omitempty"`
	UserID *string `json:"userID,omitempty"`
}

func (o *TaskMangoPayDescriptor) GetKey() *string {
	if o == nil {
		return nil
	}
	return o.Key
}

func (o *TaskMangoPayDescriptor) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *TaskMangoPayDescriptor) GetUserID() *string {
	if o == nil {
		return nil
	}
	return o.UserID
}

type TaskMangoPayState struct {
}

type TaskMangoPay struct {
	ConnectorID string                 `json:"connectorID"`
	CreatedAt   time.Time              `json:"createdAt"`
	Descriptor  TaskMangoPayDescriptor `json:"descriptor"`
	Error       *string                `json:"error,omitempty"`
	ID          string                 `json:"id"`
	State       *TaskMangoPayState     `json:"state,omitempty"`
	Status      TaskStatus             `json:"status"`
	UpdatedAt   time.Time              `json:"updatedAt"`
}

func (t TaskMangoPay) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(t, "", false)
}

func (t *TaskMangoPay) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &t, "", false, true); err != nil {
		return err
	}
	return nil
}

func (o *TaskMangoPay) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

func (o *TaskMangoPay) GetCreatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.CreatedAt
}

func (o *TaskMangoPay) GetDescriptor() TaskMangoPayDescriptor {
	if o == nil {
		return TaskMangoPayDescriptor{}
	}
	return o.Descriptor
}

func (o *TaskMangoPay) GetError() *string {
	if o == nil {
		return nil
	}
	return o.Error
}

func (o *TaskMangoPay) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *TaskMangoPay) GetState() *TaskMangoPayState {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *TaskMangoPay) GetStatus() TaskStatus {
	if o == nil {
		return TaskStatus("")
	}
	return o.Status
}

func (o *TaskMangoPay) GetUpdatedAt() time.Time {
	if o == nil {
		return time.Time{}
	}
	return o.UpdatedAt
}

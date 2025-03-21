// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type GetInstanceStageHistoryRequest struct {
	// The instance id
	InstanceID string `pathParam:"style=simple,explode=false,name=instanceID"`
	// The stage number
	Number int64 `pathParam:"style=simple,explode=false,name=number"`
}

func (o *GetInstanceStageHistoryRequest) GetInstanceID() string {
	if o == nil {
		return ""
	}
	return o.InstanceID
}

func (o *GetInstanceStageHistoryRequest) GetNumber() int64 {
	if o == nil {
		return 0
	}
	return o.Number
}

type GetInstanceStageHistoryResponse struct {
	// The workflow instance stage history
	GetWorkflowInstanceHistoryStageResponse *components.GetWorkflowInstanceHistoryStageResponse
	HTTPMeta                                components.HTTPMetadata `json:"-"`
}

func (o *GetInstanceStageHistoryResponse) GetGetWorkflowInstanceHistoryStageResponse() *components.GetWorkflowInstanceHistoryStageResponse {
	if o == nil {
		return nil
	}
	return o.GetWorkflowInstanceHistoryStageResponse
}

func (o *GetInstanceStageHistoryResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

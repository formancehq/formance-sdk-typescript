// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type TriggerData struct {
	Event      string         `json:"event"`
	Filter     *string        `json:"filter,omitempty"`
	Name       *string        `json:"name,omitempty"`
	Vars       map[string]any `json:"vars,omitempty"`
	WorkflowID string         `json:"workflowID"`
}

func (o *TriggerData) GetEvent() string {
	if o == nil {
		return ""
	}
	return o.Event
}

func (o *TriggerData) GetFilter() *string {
	if o == nil {
		return nil
	}
	return o.Filter
}

func (o *TriggerData) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *TriggerData) GetVars() map[string]any {
	if o == nil {
		return nil
	}
	return o.Vars
}

func (o *TriggerData) GetWorkflowID() string {
	if o == nil {
		return ""
	}
	return o.WorkflowID
}

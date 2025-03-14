// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V3ResetConnectorResponse struct {
	// Since this call is asynchronous, the response will contain the ID of the task that was created to reset the connector. You can use the task API to check the status of the task and get the results.
	//
	Data string `json:"data"`
}

func (o *V3ResetConnectorResponse) GetData() string {
	if o == nil {
		return ""
	}
	return o.Data
}

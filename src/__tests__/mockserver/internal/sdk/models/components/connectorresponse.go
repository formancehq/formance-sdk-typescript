// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type Data struct {
	ConnectorID string `json:"connectorID"`
}

func (o *Data) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

// ConnectorResponse - OK
type ConnectorResponse struct {
	Data Data `json:"data"`
}

func (o *ConnectorResponse) GetData() Data {
	if o == nil {
		return Data{}
	}
	return o.Data
}

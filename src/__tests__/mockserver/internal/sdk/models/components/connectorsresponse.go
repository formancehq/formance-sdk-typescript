// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type ConnectorsResponseData struct {
	ConnectorID string    `json:"connectorID"`
	Enabled     *bool     `json:"enabled,omitempty"`
	Name        string    `json:"name"`
	Provider    Connector `json:"provider"`
}

func (o *ConnectorsResponseData) GetConnectorID() string {
	if o == nil {
		return ""
	}
	return o.ConnectorID
}

func (o *ConnectorsResponseData) GetEnabled() *bool {
	if o == nil {
		return nil
	}
	return o.Enabled
}

func (o *ConnectorsResponseData) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *ConnectorsResponseData) GetProvider() Connector {
	if o == nil {
		return Connector("")
	}
	return o.Provider
}

// ConnectorsResponse - OK
type ConnectorsResponse struct {
	Data []ConnectorsResponseData `json:"data"`
}

func (o *ConnectorsResponse) GetData() []ConnectorsResponseData {
	if o == nil {
		return []ConnectorsResponseData{}
	}
	return o.Data
}

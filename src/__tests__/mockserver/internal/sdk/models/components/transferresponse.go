// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// TransferResponse - OK
type TransferResponse struct {
	ID *string `json:"id,omitempty"`
}

func (o *TransferResponse) GetID() *string {
	if o == nil {
		return nil
	}
	return o.ID
}

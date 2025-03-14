// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type V2Hold struct {
	Description string     `json:"description"`
	Destination *V2Subject `json:"destination,omitempty"`
	// The unique ID of the hold.
	ID string `json:"id"`
	// Metadata associated with the hold.
	Metadata map[string]string `json:"metadata"`
	// The ID of the wallet the hold is associated with.
	WalletID string `json:"walletID"`
}

func (o *V2Hold) GetDescription() string {
	if o == nil {
		return ""
	}
	return o.Description
}

func (o *V2Hold) GetDestination() *V2Subject {
	if o == nil {
		return nil
	}
	return o.Destination
}

func (o *V2Hold) GetDestinationAccount() *V2LedgerAccountSubject {
	if v := o.GetDestination(); v != nil {
		return v.V2LedgerAccountSubject
	}
	return nil
}

func (o *V2Hold) GetDestinationWallet() *V2WalletSubject {
	if v := o.GetDestination(); v != nil {
		return v.V2WalletSubject
	}
	return nil
}

func (o *V2Hold) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *V2Hold) GetMetadata() map[string]string {
	if o == nil {
		return map[string]string{}
	}
	return o.Metadata
}

func (o *V2Hold) GetWalletID() string {
	if o == nil {
		return ""
	}
	return o.WalletID
}

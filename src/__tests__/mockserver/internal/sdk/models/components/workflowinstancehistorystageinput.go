// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type WorkflowInstanceHistoryStageInput struct {
	AddAccountMetadata *ActivityAddAccountMetadata `json:"AddAccountMetadata,omitempty"`
	ConfirmHold        *ActivityConfirmHold        `json:"ConfirmHold,omitempty"`
	CreateTransaction  *ActivityCreateTransaction  `json:"CreateTransaction,omitempty"`
	CreditWallet       *ActivityCreditWallet       `json:"CreditWallet,omitempty"`
	DebitWallet        *ActivityDebitWallet        `json:"DebitWallet,omitempty"`
	GetAccount         *ActivityGetAccount         `json:"GetAccount,omitempty"`
	GetPayment         *ActivityGetPayment         `json:"GetPayment,omitempty"`
	GetWallet          *ActivityGetWallet          `json:"GetWallet,omitempty"`
	ListWallets        *ActivityListWallets        `json:"ListWallets,omitempty"`
	RevertTransaction  *ActivityRevertTransaction  `json:"RevertTransaction,omitempty"`
	StripeTransfer     *ActivityStripeTransfer     `json:"StripeTransfer,omitempty"`
	VoidHold           *ActivityVoidHold           `json:"VoidHold,omitempty"`
}

func (o *WorkflowInstanceHistoryStageInput) GetAddAccountMetadata() *ActivityAddAccountMetadata {
	if o == nil {
		return nil
	}
	return o.AddAccountMetadata
}

func (o *WorkflowInstanceHistoryStageInput) GetConfirmHold() *ActivityConfirmHold {
	if o == nil {
		return nil
	}
	return o.ConfirmHold
}

func (o *WorkflowInstanceHistoryStageInput) GetCreateTransaction() *ActivityCreateTransaction {
	if o == nil {
		return nil
	}
	return o.CreateTransaction
}

func (o *WorkflowInstanceHistoryStageInput) GetCreditWallet() *ActivityCreditWallet {
	if o == nil {
		return nil
	}
	return o.CreditWallet
}

func (o *WorkflowInstanceHistoryStageInput) GetDebitWallet() *ActivityDebitWallet {
	if o == nil {
		return nil
	}
	return o.DebitWallet
}

func (o *WorkflowInstanceHistoryStageInput) GetGetAccount() *ActivityGetAccount {
	if o == nil {
		return nil
	}
	return o.GetAccount
}

func (o *WorkflowInstanceHistoryStageInput) GetGetPayment() *ActivityGetPayment {
	if o == nil {
		return nil
	}
	return o.GetPayment
}

func (o *WorkflowInstanceHistoryStageInput) GetGetWallet() *ActivityGetWallet {
	if o == nil {
		return nil
	}
	return o.GetWallet
}

func (o *WorkflowInstanceHistoryStageInput) GetListWallets() *ActivityListWallets {
	if o == nil {
		return nil
	}
	return o.ListWallets
}

func (o *WorkflowInstanceHistoryStageInput) GetRevertTransaction() *ActivityRevertTransaction {
	if o == nil {
		return nil
	}
	return o.RevertTransaction
}

func (o *WorkflowInstanceHistoryStageInput) GetStripeTransfer() *ActivityStripeTransfer {
	if o == nil {
		return nil
	}
	return o.StripeTransfer
}

func (o *WorkflowInstanceHistoryStageInput) GetVoidHold() *ActivityVoidHold {
	if o == nil {
		return nil
	}
	return o.VoidHold
}

# V3ForwardPaymentServiceUserBankAccountRequest

## Example Usage

```typescript
import { V3ForwardPaymentServiceUserBankAccountRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ForwardPaymentServiceUserBankAccountRequest = {
  bankAccountID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `v3ForwardPaymentServiceUserBankAccountRequest`                                                                                     | [shared.V3ForwardPaymentServiceUserBankAccountRequest](../../../sdk/models/shared/v3forwardpaymentserviceuserbankaccountrequest.md) | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |
| `bankAccountID`                                                                                                                     | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The bank account ID                                                                                                                 |
| `paymentServiceUserID`                                                                                                              | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The payment service user ID                                                                                                         |
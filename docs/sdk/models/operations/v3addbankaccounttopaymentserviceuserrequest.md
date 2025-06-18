# V3AddBankAccountToPaymentServiceUserRequest

## Example Usage

```typescript
import { V3AddBankAccountToPaymentServiceUserRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3AddBankAccountToPaymentServiceUserRequest = {
  bankAccountID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `bankAccountID`             | *string*                    | :heavy_check_mark:          | The bank account ID         |
| `paymentServiceUserID`      | *string*                    | :heavy_check_mark:          | The payment service user ID |
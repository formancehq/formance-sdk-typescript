# V3CreateLinkForPaymentServiceUserRequest

## Example Usage

```typescript
import { V3CreateLinkForPaymentServiceUserRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3CreateLinkForPaymentServiceUserRequest = {
  connectorID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `v3PaymentServiceUserCreateLinkRequest`                                                                             | [shared.V3PaymentServiceUserCreateLinkRequest](../../../sdk/models/shared/v3paymentserviceusercreatelinkrequest.md) | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `connectorID`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The connector ID                                                                                                    |
| `paymentServiceUserID`                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The payment service user ID                                                                                         |
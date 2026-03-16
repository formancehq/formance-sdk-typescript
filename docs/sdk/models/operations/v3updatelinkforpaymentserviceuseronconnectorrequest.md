# V3UpdateLinkForPaymentServiceUserOnConnectorRequest

## Example Usage

```typescript
import { V3UpdateLinkForPaymentServiceUserOnConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3UpdateLinkForPaymentServiceUserOnConnectorRequest = {
  connectionID: "<id>",
  connectorID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `v3PaymentServiceUserUpdateLinkRequest`                                                                             | [shared.V3PaymentServiceUserUpdateLinkRequest](../../../sdk/models/shared/v3paymentserviceuserupdatelinkrequest.md) | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `connectionID`                                                                                                      | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The connection ID                                                                                                   |
| `connectorID`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The connector ID                                                                                                    |
| `paymentServiceUserID`                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The payment service user ID                                                                                         |
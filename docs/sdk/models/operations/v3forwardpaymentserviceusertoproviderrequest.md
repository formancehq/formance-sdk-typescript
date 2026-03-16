# V3ForwardPaymentServiceUserToProviderRequest

## Example Usage

```typescript
import { V3ForwardPaymentServiceUserToProviderRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ForwardPaymentServiceUserToProviderRequest = {
  connectorID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `connectorID`               | *string*                    | :heavy_check_mark:          | The connector ID            |
| `paymentServiceUserID`      | *string*                    | :heavy_check_mark:          | The payment service user ID |
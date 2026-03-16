# V3DeletePaymentServiceUserConnectionFromConnectorIDRequest

## Example Usage

```typescript
import { V3DeletePaymentServiceUserConnectionFromConnectorIDRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3DeletePaymentServiceUserConnectionFromConnectorIDRequest = {
  connectionID: "<id>",
  connectorID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `connectionID`              | *string*                    | :heavy_check_mark:          | The connection ID           |
| `connectorID`               | *string*                    | :heavy_check_mark:          | The connector ID            |
| `paymentServiceUserID`      | *string*                    | :heavy_check_mark:          | The payment service user ID |
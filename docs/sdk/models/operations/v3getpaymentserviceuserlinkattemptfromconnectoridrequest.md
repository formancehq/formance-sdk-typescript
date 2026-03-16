# V3GetPaymentServiceUserLinkAttemptFromConnectorIDRequest

## Example Usage

```typescript
import { V3GetPaymentServiceUserLinkAttemptFromConnectorIDRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetPaymentServiceUserLinkAttemptFromConnectorIDRequest = {
  attemptID: "<id>",
  connectorID: "<id>",
  paymentServiceUserID: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `attemptID`                 | *string*                    | :heavy_check_mark:          | The attempt ID              |
| `connectorID`               | *string*                    | :heavy_check_mark:          | The connector ID            |
| `paymentServiceUserID`      | *string*                    | :heavy_check_mark:          | The payment service user ID |
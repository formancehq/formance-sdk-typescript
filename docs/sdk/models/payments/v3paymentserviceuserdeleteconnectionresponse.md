# V3PaymentServiceUserDeleteConnectionResponse

## Example Usage

```typescript
import { V3PaymentServiceUserDeleteConnectionResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentServiceUserDeleteConnectionResponse = {
  data: {
    taskID: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                        | [payments.V3PaymentServiceUserDeleteConnectionResponseData](../../../sdk/models/payments/v3paymentserviceuserdeleteconnectionresponsedata.md) | :heavy_check_mark:                                                                                                                            | The task tracking the deletion, which completes asynchronously                                                                                |
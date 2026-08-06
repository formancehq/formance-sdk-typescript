# DeliveryAttemptsResponseCursor

## Example Usage

```typescript
import { DeliveryAttemptsResponseCursor } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveryAttemptsResponseCursor = {
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [webhooks.DeliveryAttempt](../../../sdk/models/webhooks/deliveryattempt.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |
| `hasMore`                                                                     | *boolean*                                                                     | :heavy_check_mark:                                                            | N/A                                                                           |
| `next`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
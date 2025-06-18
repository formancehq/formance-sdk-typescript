# ConfirmHoldRequest

## Example Usage

```typescript
import { ConfirmHoldRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ConfirmHoldRequest = {
  holdId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `confirmHoldRequest`                                                          | [shared.ConfirmHoldRequest](../../../sdk/models/shared/confirmholdrequest.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `idempotencyKey`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | Use an idempotency key                                                        |
| `holdId`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
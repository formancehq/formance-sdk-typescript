# ConfirmHoldRequest

## Example Usage

```typescript
import { ConfirmHoldRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfirmHoldRequest = {
    amount: BigInt("100"),
    final: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `amount`                                                                     | *BigInt*                                                                     | :heavy_minus_sign:                                                           | Define the amount to transfer.                                               | 100                                                                          |
| `final`                                                                      | *boolean*                                                                    | :heavy_minus_sign:                                                           | Define a final confirmation. Remaining funds will be returned to the wallet. | true                                                                         |
# Monetary

## Example Usage

```typescript
import { Monetary } from "@formance/formance-sdk/sdk/models/shared";

let value: Monetary = {
  amount: BigInt("994401"),
  asset: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `amount`                          | *BigInt*                          | :heavy_check_mark:                | The amount of the monetary value. |
| `asset`                           | *string*                          | :heavy_check_mark:                | The asset of the monetary value.  |
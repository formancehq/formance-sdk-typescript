# V2Monetary

## Example Usage

```typescript
import { V2Monetary } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Monetary = {
  amount: 768885n,
  asset: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `amount`                          | *BigInt*                          | :heavy_check_mark:                | The amount of the monetary value. |
| `asset`                           | *string*                          | :heavy_check_mark:                | The asset of the monetary value.  |
# V2Volume

## Example Usage

```typescript
import { V2Volume } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Volume = {
  balance: 80n,
  input: 100n,
  output: 20n,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `balance`                                | *BigInt*                                 | :heavy_minus_sign:                       | Net balance, equal to input minus output |
| `input`                                  | *BigInt*                                 | :heavy_check_mark:                       | Total amount credited for this asset     |
| `output`                                 | *BigInt*                                 | :heavy_check_mark:                       | Total amount debited for this asset      |
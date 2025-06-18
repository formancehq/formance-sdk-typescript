# V3ReversePaymentInitiationRequest

## Example Usage

```typescript
import { V3ReversePaymentInitiationRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ReversePaymentInitiationRequest = {
  amount: 407829n,
  asset: "<value>",
  description:
    "phooey roughly till uh-huh majestically muffled badly trial gosh",
  reference: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `amount`                 | *BigInt*                 | :heavy_check_mark:       | N/A                      |
| `asset`                  | *string*                 | :heavy_check_mark:       | N/A                      |
| `description`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `reference`              | *string*                 | :heavy_check_mark:       | N/A                      |
# V3ReversePaymentInitiationRequest

## Example Usage

```typescript
import { V3ReversePaymentInitiationRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ReversePaymentInitiationRequest = {
  amount: BigInt("901496"),
  asset: "<value>",
  description: "onto hmph orderly ouch",
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
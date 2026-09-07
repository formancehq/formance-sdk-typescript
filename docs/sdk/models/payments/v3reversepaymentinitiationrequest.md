# V3ReversePaymentInitiationRequest

## Example Usage

```typescript
import { V3ReversePaymentInitiationRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ReversePaymentInitiationRequest = {
  amount: 407829n,
  asset: "<value>",
  description:
    "phooey roughly till uh-huh majestically muffled badly trial gosh",
  reference: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `amount`                                                                 | *BigInt*                                                                 | :heavy_check_mark:                                                       | Amount to reverse, in the asset's smallest unit                          |
| `asset`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Asset the reversal is denominated in                                     |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Human-readable reason for the reversal                                   |
| `metadata`                                                               | Record<string, *string*>                                                 | :heavy_minus_sign:                                                       | Arbitrary key/value pairs attached to the resource                       |
| `reference`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Caller-supplied identifier for the reversal, used to deduplicate retries |
# ReverseTransferInitiationRequest

## Example Usage

```typescript
import { ReverseTransferInitiationRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: ReverseTransferInitiationRequest = {
  amount: 965953n,
  asset: "USD",
  description: "frankly harvest meanwhile grave upon inasmuch for",
  metadata: {},
  reference: "XXX",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `amount`                                                                 | *BigInt*                                                                 | :heavy_check_mark:                                                       | Amount to reverse, in the asset's smallest unit                          |                                                                          |
| `asset`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | Asset the reversal is denominated in                                     | USD                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Human-readable reason for the reversal                                   |                                                                          |
| `metadata`                                                               | Record<string, *string*>                                                 | :heavy_check_mark:                                                       | Arbitrary key/value pairs to attach to the reversal                      |                                                                          |
| `reference`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Caller-supplied identifier for the reversal, used to deduplicate retries | XXX                                                                      |
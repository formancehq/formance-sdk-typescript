# PaymentMetadata

Arbitrary key/value pairs attached to a payment

## Example Usage

```typescript
import { PaymentMetadata } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PaymentMetadata = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `key`                                 | *string*                              | :heavy_minus_sign:                    | Metadata value carried by the payment |
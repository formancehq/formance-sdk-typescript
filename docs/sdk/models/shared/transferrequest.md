# TransferRequest

## Example Usage

```typescript
import { TransferRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferRequest = {
  amount: 100n,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  source: "acct_1Gqj58KZcSIg2N2q",
};
```

## Fields

| Field                 | Type                  | Required              | Description           | Example               |
| --------------------- | --------------------- | --------------------- | --------------------- | --------------------- |
| `amount`              | *BigInt*              | :heavy_check_mark:    | N/A                   | 100                   |
| `asset`               | *string*              | :heavy_check_mark:    | N/A                   | USD                   |
| `destination`         | *string*              | :heavy_check_mark:    | N/A                   | acct_1Gqj58KZcSIg2N2q |
| `source`              | *string*              | :heavy_minus_sign:    | N/A                   | acct_1Gqj58KZcSIg2N2q |
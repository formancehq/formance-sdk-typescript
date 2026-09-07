# TransferRequest

## Example Usage

```typescript
import { TransferRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferRequest = {
  amount: 100n,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  source: "acct_1Gqj58KZcSIg2N2q",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `amount`                                                                        | *BigInt*                                                                        | :heavy_check_mark:                                                              | Amount to transfer, in the asset's smallest unit                                | 100                                                                             |
| `asset`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | Asset the transfer is denominated in                                            | USD                                                                             |
| `destination`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | Provider-side account receiving the funds                                       | acct_1Gqj58KZcSIg2N2q                                                           |
| `source`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Provider-side account the funds leave. Defaults to the connector's main account | acct_1Gqj58KZcSIg2N2q                                                           |
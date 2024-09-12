# GetBalancesAggregatedRequest

## Example Usage

```typescript
import { GetBalancesAggregatedRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: GetBalancesAggregatedRequest = {
  address: "users:001",
  ledger: "ledger001",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `address`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Filter balances involving given account, either as source or destination. | users:001                                                                 |
| `ledger`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | Name of the ledger.                                                       | ledger001                                                                 |
| `useInsertionDate`                                                        | *boolean*                                                                 | :heavy_minus_sign:                                                        | Use insertion date instead of effective date                              |                                                                           |
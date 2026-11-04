# AccountWithVolumesAndBalances

An account together with its volumes and net balances per asset

## Example Usage

```typescript
import { AccountWithVolumesAndBalances } from "@formance/formance-sdk/sdk/models/ledger";

let value: AccountWithVolumesAndBalances = {
  address: "users:001",
  balances: {
    "COIN": 100n,
  },
  metadata: {
    "admin": true,
    "a": {
      "nested": {
        "key": "value",
      },
    },
  },
  type: "virtual",
  volumes: {
    "USD": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
    "EUR": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account address, a colon-separated segmented path such as users:001                                        | users:001                                                                                                      |
| `balances`                                                                                                     | Record<string, *BigInt*>                                                                                       | :heavy_minus_sign:                                                                                             | Net balance per asset, equal to input minus output                                                             | {<br/>"COIN": 100<br/>}                                                                                        |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | Arbitrary key/value pairs attached to the account                                                              | {<br/>"admin": true,<br/>"a": {<br/>"nested": {<br/>"key": "value"<br/>}<br/>}<br/>}                           |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Free-form classification of the account                                                                        | virtual                                                                                                        |
| `volumes`                                                                                                      | Record<string, [ledger.Volume](../../../sdk/models/ledger/volume.md)>                                          | :heavy_minus_sign:                                                                                             | Volumes per asset for a single account                                                                         | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
# AccountWithVolumesAndBalances

## Example Usage

```typescript
import { AccountWithVolumesAndBalances } from "@formance/formance-sdk/sdk/models/shared";

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
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | users:001                                                                                                      |
| `balances`                                                                                                     | Record<string, *BigInt*>                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"COIN": 100<br/>}                                                                                        |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"admin": true,<br/>"a": {<br/>"nested": {<br/>"key": "value"<br/>}<br/>}<br/>}                           |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | virtual                                                                                                        |
| `volumes`                                                                                                      | Record<string, [shared.Volume](../../../sdk/models/shared/volume.md)>                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
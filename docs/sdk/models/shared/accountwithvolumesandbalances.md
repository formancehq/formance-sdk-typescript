# AccountWithVolumesAndBalances

## Example Usage

```typescript
import { AccountWithVolumesAndBalances } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountWithVolumesAndBalances = {
  address: "users:001",
  balances: {
    "COIN": BigInt("100"),
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
      balance: BigInt("90"),
      input: BigInt("100"),
      output: BigInt("10"),
    },
    "EUR": {
      balance: BigInt("90"),
      input: BigInt("100"),
      output: BigInt("10"),
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
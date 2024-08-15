# AccountResponse

## Example Usage

```typescript
import { AccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountResponse = {
    data: {
        address: "users:001",
        balances: {
            COIN: BigInt("100"),
        },
        metadata: {
            admin: true,
            a: {
                nested: {
                    key: "value",
                },
            },
        },
        type: "virtual",
        volumes: {
            USD: {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
            },
            EUR: {
                balance: BigInt("90"),
                input: BigInt("100"),
                output: BigInt("10"),
            },
        },
    },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.AccountWithVolumesAndBalances](../../../sdk/models/shared/accountwithvolumesandbalances.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
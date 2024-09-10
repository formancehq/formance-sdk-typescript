# V2ActivityGetAccountOutput

## Example Usage

```typescript
import { V2ActivityGetAccountOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ActivityGetAccountOutput = {
  data: {
    address: "users:001",
    effectiveVolumes: {
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
    metadata: {
      "admin": "true",
    },
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
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Account](../../../sdk/models/shared/v2account.md) | :heavy_check_mark:                                          | N/A                                                         |
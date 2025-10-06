# V2AccountResponse

## Example Usage

```typescript
import { V2AccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AccountResponse = {
  data: {
    address: "users:001",
    effectiveVolumes: {
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
    firstUsage: new Date("2023-01-01T00:00:00Z"),
    insertionDate: new Date("2023-01-01T00:00:00Z"),
    metadata: {
      "admin": "true",
    },
    updatedAt: new Date("2023-01-01T00:00:00Z"),
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
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Account](../../../sdk/models/shared/v2account.md) | :heavy_check_mark:                                          | N/A                                                         |
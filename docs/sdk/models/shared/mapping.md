# Mapping

## Example Usage

```typescript
import { Mapping } from "@formance/formance-sdk/sdk/models/shared";

let value: Mapping = {
    contracts: [
        {
            account: "users:001",
            expr: {},
        },
    ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `contracts`                                                 | [shared.Contract](../../../sdk/models/shared/contract.md)[] | :heavy_check_mark:                                          | N/A                                                         |
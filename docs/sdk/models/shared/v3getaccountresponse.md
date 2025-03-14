# V3GetAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3GetAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2024-07-30T14:26:18.054Z"),
    id: "<id>",
    provider: "<value>",
    raw: {},
    reference: "<value>",
    type: V3AccountTypeEnum.Unknown,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Account](../../../sdk/models/shared/v3account.md) | :heavy_check_mark:                                          | N/A                                                         |
# V3GetAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3GetAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2024-11-02T09:24:44.227Z"),
    id: "<id>",
    provider: "<value>",
    raw: {},
    reference: "<value>",
    type: V3AccountTypeEnum.Internal,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Account](../../../sdk/models/shared/v3account.md) | :heavy_check_mark:                                          | N/A                                                         |
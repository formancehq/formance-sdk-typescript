# V3GetAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3GetAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2023-08-20T21:26:11.367Z"),
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
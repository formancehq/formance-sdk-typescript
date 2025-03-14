# V3CreateAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3CreateAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreateAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2024-03-21T23:27:48.401Z"),
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
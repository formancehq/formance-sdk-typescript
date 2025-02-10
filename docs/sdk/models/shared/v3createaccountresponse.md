# V3CreateAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3CreateAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3CreateAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2025-09-21T12:46:13.410Z"),
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
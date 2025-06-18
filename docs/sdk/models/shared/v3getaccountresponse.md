# V3GetAccountResponse

## Example Usage

```typescript
import { V3AccountTypeEnum, V3GetAccountResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetAccountResponse = {
  data: {
    connectorID: "<value>",
    createdAt: new Date("2025-10-23T12:24:43.460Z"),
    id: "<id>",
    provider: "<value>",
    raw: {},
    reference: "<value>",
    type: V3AccountTypeEnum.External,
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V3Account](../../../sdk/models/shared/v3account.md) | :heavy_check_mark:                                          | N/A                                                         |
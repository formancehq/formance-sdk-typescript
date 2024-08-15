# Policy

## Example Usage

```typescript
import { Policy } from "@formance/formance-sdk/sdk/models/shared";

let value: Policy = {
    createdAt: new Date("2021-01-01T00:00:00.000Z"),
    id: "XXX",
    ledgerName: "default",
    ledgerQuery: {
        key: "<value>",
    },
    name: "XXX",
    paymentsPoolID: "XXX",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2021-01-01T00:00:00.000Z                                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `ledgerName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | default                                                                                       |
| `ledgerQuery`                                                                                 | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
| `paymentsPoolID`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | XXX                                                                                           |
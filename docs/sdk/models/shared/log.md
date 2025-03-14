# Log

## Example Usage

```typescript
import { Log, Type } from "@formance/formance-sdk/sdk/models/shared";

let value: Log = {
  data: {
    "key": "<value>",
  },
  date: new Date("2025-09-15T17:39:34.108Z"),
  hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
  id: 1234,
  type: Type.NewTransaction,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e                              |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1234                                                                                          |
| `type`                                                                                        | [shared.Type](../../../sdk/models/shared/type.md)                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
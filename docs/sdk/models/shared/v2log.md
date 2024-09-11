# V2Log

## Example Usage

```typescript
import { V2Log, V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Log = {
  data: {
    "key": "<value>",
  },
  date: new Date("2023-05-16T18:35:52.945Z"),
  hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
  id: BigInt("1234"),
  type: V2LogType.RevertedTransaction,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e                              |
| `id`                                                                                          | *BigInt*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1234                                                                                          |
| `type`                                                                                        | [shared.V2LogType](../../../sdk/models/shared/v2logtype.md)                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
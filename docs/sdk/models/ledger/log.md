# Log

## Example Usage

```typescript
import { Log } from "@formance/formance-sdk/sdk/models/ledger";

let value: Log = {
  data: {
    "key": "<value>",
    "key1": "<value>",
  },
  date: new Date("2026-08-09T18:26:53.213Z"),
  hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
  id: 1234,
  type: "SET_METADATA",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | The payload of the log entry, whose shape depends on the log type                             |                                                                                               |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the operation was recorded                                                     |                                                                                               |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | SHA256 hash of the log entry, chained from the previous log for integrity verification        | 9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e                              |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Unique sequential identifier for this log entry within the ledger                             | 1234                                                                                          |
| `type`                                                                                        | [ledger.LogType](../../../sdk/models/ledger/logtype.md)                                       | :heavy_check_mark:                                                                            | The type of operation this log represents                                                     |                                                                                               |
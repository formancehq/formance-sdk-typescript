# MigrationInfo

## Example Usage

```typescript
import { MigrationInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: MigrationInfo = {
  name: "migrations:001",
  version: "11",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | migrations:001                                                                                |
| `state`                                                                                       | [ledger.MigrationInfoState](../../../sdk/models/ledger/migrationinfostate.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 11                                                                                            |
# V2MigrationInfo

## Example Usage

```typescript
import { V2MigrationInfo } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2MigrationInfo = {
  name: "migrations:001",
  version: "11",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the migration was applied                                                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the migration                                                                         | migrations:001                                                                                |
| `state`                                                                                       | [ledger.V2MigrationInfoState](../../../sdk/models/ledger/v2migrationinfostate.md)             | :heavy_minus_sign:                                                                            | Current state of the migration                                                                |                                                                                               |
| `version`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sequence number of the migration                                                              | 11                                                                                            |
# V2MigrationInfo

## Example Usage

```typescript
import { V2MigrationInfo } from "@formance/formance-sdk/sdk/models/shared";

let value: V2MigrationInfo = {
  name: "migrations:001",
  version: 11,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | migrations:001                                                                                |
| `state`                                                                                       | [shared.V2MigrationInfoState](../../../sdk/models/shared/v2migrationinfostate.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `version`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 11                                                                                            |
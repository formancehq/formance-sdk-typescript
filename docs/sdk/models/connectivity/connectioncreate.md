# ConnectionCreate

## Example Usage

```typescript
import { ConnectionCreate } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionCreate = {
  configuration: {
    connector: "<value>",
    ledger: "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `configuration`                                                                                                 | [connectivity.ConnectionCreateConfiguration](../../../sdk/models/connectivity/connectioncreateconfiguration.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
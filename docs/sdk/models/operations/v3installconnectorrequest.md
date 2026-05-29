# V3InstallConnectorRequest

## Example Usage

```typescript
import { V3InstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3InstallConnectorRequest = {
  connector: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `v3ConnectorConfig`          | *payments.V3ConnectorConfig* | :heavy_minus_sign:           | N/A                          |
| `connector`                  | *string*                     | :heavy_check_mark:           | The connector to filter by   |
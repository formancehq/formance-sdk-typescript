# V3UpdateConnectorConfigRequest

## Example Usage

```typescript
import { V3UpdateConnectorConfigRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3UpdateConnectorConfigRequest = {
  connectorID: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `v3InstallConnectorRequest`        | *shared.V3InstallConnectorRequest* | :heavy_minus_sign:                 | N/A                                |
| `connectorID`                      | *string*                           | :heavy_check_mark:                 | The connector ID                   |
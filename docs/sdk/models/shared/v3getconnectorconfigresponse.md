# V3GetConnectorConfigResponse

## Example Usage

```typescript
import { V3GetConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetConnectorConfigResponse = {
  data: {
    apiKey: "<value>",
    clientID: "<id>",
    endpoint: "<value>",
    name: "<value>",
    pageSize: 25,
    pollingPeriod: "2m",
    provider: "Qonto",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `data`                             | *shared.V3InstallConnectorRequest* | :heavy_check_mark:                 | N/A                                |
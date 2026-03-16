# V3GetConnectorConfigResponse

## Example Usage

```typescript
import { V3GetConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3GetConnectorConfigResponse = {
  data: {
    clientID: "<id>",
    clientSecret: "<value>",
    configurationToken: "<value>",
    domain: "any-blossom.biz",
    endpoint: "<value>",
    maxConnectionsPerLink: 891350,
    name: "<value>",
    pageSize: 25,
    pollingPeriod: "30m",
    provider: "Powens",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `data`                             | *shared.V3InstallConnectorRequest* | :heavy_check_mark:                 | N/A                                |
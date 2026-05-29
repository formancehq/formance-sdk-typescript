# V3GetConnectorConfigResponse

## Example Usage

```typescript
import { V3GetConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3GetConnectorConfigResponse = {
  v3ConnectorConfig: {
    authEndpoint: "<value>",
    clientID: "<id>",
    clientSecret: "<value>",
    endpoint: "<value>",
    name: "<value>",
    pageSize: 25,
    pollingPeriod: "30m",
    provider: "Bankingbridge",
  },
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `v3ConnectorConfig`          | *payments.V3ConnectorConfig* | :heavy_check_mark:           | N/A                          |
# ConnectorConfigResponse

OK

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorConfigResponse = {
  data: {
    accessKey: "XXX",
    baseUrl: "https://api.example.com",
    name: "My Atlar Account",
    pageSize: 50,
    pollingPeriod: "60s",
    provider: "Atlar",
    secret: "XXX",
    transferInitiationStatusPollingPeriod: "60s",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `data`                   | *shared.ConnectorConfig* | :heavy_check_mark:       | N/A                      |
# Cursor

## Example Usage

```typescript
import { Cursor } from "@formance/formance-sdk/sdk/models/webhooks";

let value: Cursor = {
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [webhooks.WebhooksConfig](../../../sdk/models/webhooks/webhooksconfig.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |
| `hasMore`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | N/A                                                                         | false                                                                       |
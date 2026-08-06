# ResolveAlertRequest

## Example Usage

```typescript
import { ResolveAlertRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ResolveAlertRequest = {
  resolveAlertRequest: {
    by: "<value>",
  },
  alertID: "1cd15a56-1704-4c09-8b36-50bc1fc46d3c",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `resolveAlertRequest`                                                                           | [reconciliation.ResolveAlertRequest](../../../sdk/models/reconciliation/resolvealertrequest.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `alertID`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | The alert ID.                                                                                   |
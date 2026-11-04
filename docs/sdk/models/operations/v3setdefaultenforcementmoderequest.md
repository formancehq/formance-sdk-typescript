# V3SetDefaultEnforcementModeRequest

## Example Usage

```typescript
import { V3SetDefaultEnforcementModeRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3SetDefaultEnforcementModeRequest = {
  setDefaultEnforcementModeRequest: {
    enforcementMode: "AUDIT",
  },
  ledgerName: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `setDefaultEnforcementModeRequest`                                                                            | [ledgerV3.SetDefaultEnforcementModeRequest](../../../sdk/models/ledgerV3/setdefaultenforcementmoderequest.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `ledgerName`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Name of the ledger                                                                                            |
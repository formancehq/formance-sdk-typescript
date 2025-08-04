# UpdateTransferInitiationStatusRequest

## Example Usage

```typescript
import { UpdateTransferInitiationStatusRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Status } from "@formance/formance-sdk/sdk/models/shared";

let value: UpdateTransferInitiationStatusRequest = {
  updateTransferInitiationStatusRequest: {
    status: Status.Rejected,
  },
  transferId: "XXX",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `updateTransferInitiationStatusRequest`                                                                             | [shared.UpdateTransferInitiationStatusRequest](../../../sdk/models/shared/updatetransferinitiationstatusrequest.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `transferId`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The transfer ID.                                                                                                    | XXX                                                                                                                 |
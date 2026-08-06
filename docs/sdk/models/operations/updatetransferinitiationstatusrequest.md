# UpdateTransferInitiationStatusRequest

## Example Usage

```typescript
import { UpdateTransferInitiationStatusRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateTransferInitiationStatusRequest = {
  updateTransferInitiationStatusRequest: {
    status: "REJECTED",
  },
  transferId: "XXX",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `updateTransferInitiationStatusRequest`                                                                                 | [payments.UpdateTransferInitiationStatusRequest](../../../sdk/models/payments/updatetransferinitiationstatusrequest.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `transferId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The transfer ID.                                                                                                        | XXX                                                                                                                     |
# V3ApprovePaymentInitiationResponseData

## Example Usage

```typescript
import { V3ApprovePaymentInitiationResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ApprovePaymentInitiationResponseData = {
  taskID: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskID`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | Since this call is asynchronous, the response will contain the ID of the task that was created to approve the payment initiation. You can use the task API to check the status of the task and get the resulting payment ID.<br/> |
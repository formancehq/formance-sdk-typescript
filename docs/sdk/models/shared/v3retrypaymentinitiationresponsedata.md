# V3RetryPaymentInitiationResponseData

## Example Usage

```typescript
import { V3RetryPaymentInitiationResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: V3RetryPaymentInitiationResponseData = {
  taskID: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskID`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | Since this call is asynchronous, the response will contain the ID of the task that was created to retry the payment initiation to the PSP. You can use the task API to check the status of the task and get the resulting payment ID.<br/> |
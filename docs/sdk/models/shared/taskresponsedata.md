# TaskResponseData

## Example Usage

```typescript
import { PaymentStatus, TaskResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponseData = {
  connectorID: "<value>",
  createdAt: new Date("2022-01-07T19:10:28.633Z"),
  descriptor: {},
  id: "08fab792-ecf4-432f-ac28-622f4f172081",
  state: {},
  status: PaymentStatus.Dispute,
  updatedAt: new Date("2022-07-13T06:15:38.872Z"),
};
```

## Supported Types

### `shared.TaskStripe`

```typescript
const value: shared.TaskStripe = /* values here */
```

### `shared.TaskWise`

```typescript
const value: shared.TaskWise = /* values here */
```

### `shared.TaskCurrencyCloud`

```typescript
const value: shared.TaskCurrencyCloud = /* values here */
```

### `shared.TaskDummyPay`

```typescript
const value: shared.TaskDummyPay = /* values here */
```

### `shared.TaskModulr`

```typescript
const value: shared.TaskModulr = /* values here */
```

### `shared.TaskBankingCircle`

```typescript
const value: shared.TaskBankingCircle = /* values here */
```

### `shared.TaskMangoPay`

```typescript
const value: shared.TaskMangoPay = /* values here */
```

### `shared.TaskMoneycorp`

```typescript
const value: shared.TaskMoneycorp = /* values here */
```


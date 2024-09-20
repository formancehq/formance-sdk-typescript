# TaskResponseData

## Example Usage

```typescript
import { PaymentStatus, TaskResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: TaskResponseData = {
  connectorID: "<value>",
  createdAt: new Date("2022-09-18T20:38:54.808Z"),
  descriptor: {},
  id: "ea055b19-7cd4-44e2-b52d-82d3513bb6f4",
  state: {},
  status: PaymentStatus.Refunded,
  updatedAt: new Date("2024-02-27T14:44:54.934Z"),
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


# TasksCursorData

## Example Usage

```typescript
import { PaymentStatus, TasksCursorData } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorData = {
  connectorID: "<value>",
  createdAt: new Date("2024-11-29T04:56:03.588Z"),
  descriptor: {},
  id: "f785fc37-814d-44c9-8e0c-2bb89eb75dad",
  state: {},
  status: PaymentStatus.Expired,
  updatedAt: new Date("2022-08-23T08:43:29.991Z"),
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


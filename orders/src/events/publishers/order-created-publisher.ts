import { Publisher, OrderCreatedEvent, Subjects } from '@amnodejstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

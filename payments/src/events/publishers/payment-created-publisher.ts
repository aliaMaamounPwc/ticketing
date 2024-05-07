import { Publisher, PaymentCreatedEvent, Subjects } from '@amnodejstickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

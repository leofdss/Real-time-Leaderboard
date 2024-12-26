import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class LearderboardGateway {
  @SubscribeMessage('push')
  async handleEvent(
    @MessageBody() body: unknown,
    @ConnectedSocket() client: Socket,
  ): Promise<unknown> {
    client.emit('pop', body);
    return body;
  }
}

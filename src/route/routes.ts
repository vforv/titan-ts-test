import * as Fastify from 'fastify';
import { Container } from 'typedi';
import * as validator from '../validator';
import { IPingRepository } from '../model/infrastructure/service';

export interface IRouterInterface {

    registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>): void;

}

export class RouterRoute implements IRouterInterface {

    public registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>) {
        this.service(server);
    }

    private service(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.get('/service/:id', validator.PING_ID_VALIDATOR, (request, reply) => {
            const logic = Container.get<IPingRepository>('ping.logic');

            reply.send(logic.serviceMethod(request.params.id));
        });
    }
}

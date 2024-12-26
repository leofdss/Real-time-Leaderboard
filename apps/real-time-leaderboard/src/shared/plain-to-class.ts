import { ClassConstructor, plainToClass } from 'class-transformer';

export class PlainToClass {
  static plainToClass<T, V>(cls: ClassConstructor<T>, plain: V): T {
    return plainToClass(cls, plain, { strategy: 'excludeAll' });
  }
}

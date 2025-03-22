import {InjectionTokens} from "../../src";
import { ClassA, ClassB } from "./Circular";

import { CurriedFunctionWithDependencies, CurriedFunctionWithoutDependencies, LoggerInterface, MyServiceClassInterface, MyServiceInterface, MyUseCaseInterface, SayHelloType, ServiceWithoutDependencyInterface } from "./types";

export const DI: InjectionTokens = {
    DEP1: Symbol('DEP1'),
    DEP2: Symbol('DEP2'),
    LOGGER: Symbol('LOGGER'),
    MY_SERVICE: Symbol('MY_SERVICE'),
    MY_USE_CASE: Symbol('MY_USE_CASE'),
    SIMPLE_FUNCTION: Symbol('SIMPLE_FUNCTION'),
    NOT_REGISTERED_VALUE: Symbol('NOT_REGISTERED_VALUE'),
    CLASS_WITH_DEPENDENCIES: Symbol('CLASS_WITH_DEPENDENCIES'),
    CLASS_WITHOUT_DEPENDENCIES: Symbol('CLASS_WITHOUT_DEPENDENCIES'),
    HIGHER_ORDER_FUNCTION_WITH_DEPENDENCIES: Symbol('HIGHER_ORDER_FUNCTION_WITH_DEPENDENCIES'),
    HIGHER_ORDER_FUNCTION_WITHOUT_DEPENDENCIES: Symbol('HIGHER_ORDER_FUNCTION_WITHOUT_DEPENDENCIES'),
    CURRIED_FUNCTION_WITHOUT_DEPENDENCIES: Symbol('CURRIED_FUNCTION_WITHOUT_DEPENDENCIES'),
    CURRIED_FUNCTION_WITH_DEPENDENCIES: Symbol('CURRIED_FUNCTION_WITH_DEPENDENCIES'),
    CURRIED_FUNCTION_WITH_DEPENDENCIES_OBJECT: Symbol('CURRIED_FUNCTION_WITH_DEPENDENCIES_OBJECT'),
    CIRCULAR_A: Symbol('CIRCULAR_A'),
    CIRCULAR_B: Symbol('CIRCULAR_B'),
};

export type Registry = {
    DEP1: string;
    DEP2: number;
    LOGGER: LoggerInterface;
    MY_SERVICE: MyServiceInterface;
    MY_USE_CASE: MyUseCaseInterface;
    SIMPLE_FUNCTION: SayHelloType;
    NOT_REGISTERED_VALUE: any;
    CLASS_WITH_DEPENDENCIES: MyServiceClassInterface;
    CLASS_WITHOUT_DEPENDENCIES: MyServiceClassInterface;
    HIGHER_ORDER_FUNCTION_WITH_DEPENDENCIES: MyServiceInterface;
    HIGHER_ORDER_FUNCTION_WITHOUT_DEPENDENCIES: ServiceWithoutDependencyInterface;
    CURRIED_FUNCTION_WITHOUT_DEPENDENCIES: CurriedFunctionWithoutDependencies;
    CURRIED_FUNCTION_WITH_DEPENDENCIES: CurriedFunctionWithDependencies;
    CURRIED_FUNCTION_WITH_DEPENDENCIES_OBJECT: CurriedFunctionWithDependencies;
    CIRCULAR_A: ClassA;
    CIRCULAR_B: ClassB;
};
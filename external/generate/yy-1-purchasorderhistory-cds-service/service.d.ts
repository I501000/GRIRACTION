import { Yy1_PurchasorderhistoryApi } from './Yy1_PurchasorderhistoryApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import { DeSerializers, DefaultDeSerializers, Time } from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function yy1PurchasorderhistoryCdsService<BinaryT = string, BooleanT = boolean, ByteT = number, DecimalT = BigNumber, DoubleT = number, FloatT = number, Int16T = number, Int32T = number, Int64T = BigNumber, GuidT = string, SByteT = number, SingleT = number, StringT = string, AnyT = any, DateTimeOffsetT = Moment, DateTimeT = Moment, TimeT = Time>(deSerializers?: Partial<DeSerializers<BinaryT, BooleanT, ByteT, DecimalT, DoubleT, FloatT, Int16T, Int32T, Int64T, GuidT, SByteT, SingleT, StringT, AnyT, DateTimeOffsetT, DateTimeT, TimeT>>): Yy1PurchasorderhistoryCdsService<DeSerializers<BinaryT, BooleanT, ByteT, DecimalT, DoubleT, FloatT, Int16T, Int32T, Int64T, GuidT, SByteT, SingleT, StringT, AnyT, DateTimeOffsetT, DateTimeT, TimeT>>;
declare class Yy1PurchasorderhistoryCdsService<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
    private apis;
    private deSerializers;
    constructor(deSerializers: DeSerializersT);
    private initApi;
    get yy1_PurchasorderhistoryApi(): Yy1_PurchasorderhistoryApi<DeSerializersT>;
    get batch(): typeof batch;
    get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
import { Injectable } from '@angular/core';
import { OrderData } from '../data/order';

@Injectable()
export class OrderService extends OrderData {

  data = [{
    orderNumber: 11111,
    tradingCountry: 'China',
    orderAmount: '900.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'WeChat',
    settlementDate: '2024-11-25',
  }, {
    orderNumber: 1002,
    tradingCountry: 'America',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-10-28',
  }, {
    orderNumber: 1003,
    tradingCountry: 'China',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'WeChat',
    settlementDate: '2024-10-28',
  }, {
    orderNumber: 1004,
    tradingCountry: 'Korea',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'Visa',
    settlementDate: '2024-9-20',
  }, {
    orderNumber: 1005,
    tradingCountry: 'Korea',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'Visa',
    settlementDate: '2024-9-15',
  }, {
    orderNumber: 1006,
    tradingCountry: 'Japan',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Pending Settlement',
    paymentMethod: 'Visa',
    settlementDate: '2024-8-28',
  }, {
    orderNumber: 1007,
    tradingCountry: 'America',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Pending Settlement',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-8-28',
  }, {
    orderNumber: 1008,
    tradingCountry: 'Afghanistan',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-8-20',
  }, {
    orderNumber: 1009,
    tradingCountry: 'The United Arab Emirates',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-8-12',
  }, {
    orderNumber: 1010,
    tradingCountry: 'Britain',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'Visa',
    settlementDate: '2024-8-10',
  }, {
    orderNumber: 1011,
    tradingCountry: 'America',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-8-5',
  }, {
    orderNumber: 1012,
    tradingCountry: 'Canada',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'Visa',
    settlementDate: '2024-8-1',
  }, {
    orderNumber: 1013,
    tradingCountry: 'Japan',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'MasterCard',
    settlementDate: '2024-7-27',
  }, {
    orderNumber: 1014,
    tradingCountry: 'America',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'UnionPay',
    settlementDate: '2024-7-22',
  }, {
    orderNumber: 1015,
    tradingCountry: 'Krikor',
    orderAmount: '1000.00 USD',
    settlementStatus: 'Already Settled',
    paymentMethod: 'UnionPay',
    settlementDate: '2024-7-21',
  }, {
    'orderNumber': 1016,
    'tradingCountry': 'France',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2024-7-16',
  }, {
    'orderNumber': 1017,
    'tradingCountry': 'China',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'AliPay',
    'settlementDate': '2024-7-10',
  }, {
    'orderNumber': 1018,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MaterCard',
    'settlementDate': '2024-7-4',
  }, {
    'orderNumber': 1019,
    'tradingCountry': 'Japan',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2024-6-27',
  }, {
    'orderNumber': 1020,
    'tradingCountry': 'Korea',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2024-6-25',
  }, {
    'orderNumber': 1021,
    'tradingCountry': 'Germany',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Pending Settlement',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2024-6-20',
  }, {
    'orderNumber': 1022,
    'tradingCountry': 'Germany',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Pending Settlement',
    'paymentMethod': 'PayMe',
    'settlementDate': '2024-6-20',
  }, {
    'orderNumber': 1023,
    'tradingCountry': 'Spain',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Pending Settlement',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2024-6-18',
  }, {
    'orderNumber': 1024,
    'tradingCountry': 'Japan',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2024-6-12',
  }, {
    'orderNumber': 1025,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'PayMe',
    'settlementDate': '2024-6-10',
  }, {
    'orderNumber': 1026,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2024-6-5',
  }, {
    'orderNumber': 1027,
    'tradingCountry': 'Mexico',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2024-6-1',
  }, {
    'orderNumber': 1028,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2024-6-1',
  }, {
    'orderNumber': 1029,
    'tradingCountry': 'China',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2024-5-30',
  }, {
    'orderNumber': 1030,
    'tradingCountry': 'France',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'PayMe',
    'settlementDate': '2024-5-30',
  }, {
    'orderNumber': 1031,
    'tradingCountry': 'Britain',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'PayMe',
    'settlementDate': '2024-5-30',
  }, {
    'orderNumber': 1032,
    'tradingCountry': 'Afghanistan',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'WeChat',
    'settlementDate': '2024-4-27',
  }, {
    'orderNumber': 1033,
    'tradingCountry': 'Singapore',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'AliPay',
    'settlementDate': '2024-4-27',
  }, {
    'orderNumber': 1034,
    'tradingCountry': 'Iceland',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2024-3-20',
  }, {
    'orderNumber': 1035,
    'tradingCountry': 'Columbia',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'PayMe',
    'settlementDate': '2024-3-15',
  }, {
    'orderNumber': 1036,
    'tradingCountry': 'Brazil',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Pending Settlement',
    'paymentMethod': 'Visa',
    'settlementDate': '2024-3-5',
  }, {
    'orderNumber': 1037,
    'tradingCountry': 'Brazil',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2024-3-2',
  }, {
    'orderNumber': 1038,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2024-2-25',
  }, {
    'orderNumber': 1039,
    'tradingCountry': 'Spain',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2024-1-5',
  }, {
    'orderNumber': 1040,
    'tradingCountry': 'Canada',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'WeChat',
    'settlementDate': '2024-1-4',
  }, {
    'orderNumber': 1041,
    'tradingCountry': 'China',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'WeChat',
    'settlementDate': '2024-1-1',
  }, {
    'orderNumber': 1042,
    'tradingCountry': 'Japan',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-12-27',
  }, {
    'orderNumber': 1043,
    'tradingCountry': 'Egypt',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-12-20',
  }, {
    'orderNumber': 1044,
    'tradingCountry': 'Iran',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-12-20',
  }, {
    'orderNumber': 1045,
    'tradingCountry': 'India',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-27',
  }, {
    'orderNumber': 1046,
    'tradingCountry': 'Japan',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2023-11-27',
  }, {
    'orderNumber': 1047,
    'tradingCountry': 'Germany',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1048,
    'tradingCountry': 'Australia',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Pending Settlement',
    'paymentMethod': 'PayMed',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1049,
    'tradingCountry': 'South Africa',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1050,
    'tradingCountry': 'China',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1051,
    'tradingCountry': 'Italy',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1052,
    'tradingCountry': 'Canada',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1053,
    'tradingCountry': 'Korea',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1054,
    'tradingCountry': 'Singapore',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1055,
    'tradingCountry': 'Sweden',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1056,
    'tradingCountry': 'Italy',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'Visa',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1057,
    'tradingCountry': 'Australia',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1058,
    'tradingCountry': 'Congo',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'UnionPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1059,
    'tradingCountry': 'Syria',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'AliPay',
    'settlementDate': '2023-11-26',
  }, {
    'orderNumber': 1060,
    'tradingCountry': 'America',
    'orderAmount': '1000.00 USD',
    'settlementStatus': 'Already Settled',
    'paymentMethod': 'MasterCard',
    'settlementDate': '2023-11-26',
  }];

  getData() {
    return this.data;
  }
}
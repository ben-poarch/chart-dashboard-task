import { randomNumber } from "./helpers";
import { PerformanceData, Allocation } from "./types";

export const performance: PerformanceData[] = [
  {
    date: "JUL-19",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "OCT-19",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JAN-20",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "APR-20",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JUL-20",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "OCT-20",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JAN-21",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "APR-21",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JUL-21",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "OCT-21",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JAN-22",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "APR-22",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JUL-22",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "OCT-22",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JAN-23",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "APR-23",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
  {
    date: "JUL-23",
    "This Fund": randomNumber(),
    "Some benchmark": randomNumber(),
    "Some other benchmark": randomNumber(),
  },
];

export const allocationsThisYear: Allocation[] = [
  {
    name: "Receivables",
    amount: 2,
  },
  {
    name: "Consumer Loans",
    amount: 8,
  },
  {
    name: "Sports Receivables",
    amount: 32,
  },
  {
    name: "Special Situations",
    amount: 40,
  },
  {
    name: "Real Estate Loans",
    amount: 15,
  },
  {
    name: "Liquid Credit",
    amount: 3,
  },
];

export const allocationsLastYear: Allocation[] = [
  {
    name: "Receivables",
    amount: 20,
  },
  {
    name: "Consumer Loans",
    amount: 10,
  },
  {
    name: "Real Estate Loans",
    amount: 40,
  },
  {
    name: "Liquid Credit",
    amount: 30,
  },
];

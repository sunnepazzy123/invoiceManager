import currency from "currency.js";
import { ToWords } from "to-words";

const calendar = require("calendar-js");

interface ICalendar {
  year: string;
  yearAbbr: string;
  month: string;
  monthAbbr: string;
  weekdays: string[];
  weekdaysAbbr: string[];
  days: number;
  firstWeekday: number;
  lastWeekday: number;
  calendar: IMonthDays;
}

export interface ICalendarInvoice extends ICalendar {
  weeklyWorkingDays: number[][];
  weeklyHoursTotal: IWeeklyHoursTotal;
  totalMonthlyHours: number;
  dailyWages: number;
  monthlyWages: number;
}

type IWorkingDays = number[];

type IMonthDays = number[][];

interface IWeeklyHoursTotal {
  [key: string]: {
    weeklyHours: number;
    weeklyWages: number;
    wagesPerHour: number;
    weekendDate: string;
  };
}

const monthlyInvoiceDetails = (
  holidays: IWorkingDays = [1,2,3,4,5,29,30,31],
  dailyHours?: number,
  wagesInHour?: number,
  date?: string
) => {

  let currentDate;

  if(date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date('1/July/2024');
  }

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dailyWorkingHours = dailyHours || 8;
  const wagesPerHour = wagesInHour ||  125;
  const dailyWages = wagesPerHour * dailyWorkingHours;

  const kalendar: ICalendar = calendar().of(currentYear, currentMonth);
  

  const monthDays = kalendar.calendar;
  const weeklyHoursTotal: IWeeklyHoursTotal = {};

  let weeklyWorkingDays: number[][] = [];
  let totalMonthlyHours = 0;

  for (const key in monthDays) {
    const filteredPerWeek = monthDays[key].slice(1, -1); // filter sunday && saturday

    const workingDaysPerWeek = filteredPerWeek.filter((day) => {
   
      if (holidays && holidays.length >= 0 && day !== 0) {
        if (!holidays?.includes(day)) {
          return day;
        }
      }
    });

    // continue if week is empty
    if(workingDaysPerWeek.length === 0) {
      weeklyWorkingDays.push(workingDaysPerWeek);
      continue
    }
    // week not empty start here
    weeklyWorkingDays.push(workingDaysPerWeek);

    const weeklyHours = weeklyWorkingDays[key].length * dailyWorkingHours; // per weeklyHour in currency
    totalMonthlyHours = totalMonthlyHours + weeklyHours;
    const weekIndex = +key + 1;
    const weeklyWages = weeklyHours * wagesPerHour;

    const workingDaysInWeek =  weeklyWorkingDays[key];
    
    const weekendDay = workingDaysInWeek[weeklyWorkingDays[key].length - 1];

    const weekDateString = `${weekendDay}/${kalendar.monthAbbr}/${kalendar.year}`;

    weeklyHoursTotal["week" + weekIndex] = {
      weeklyHours,
      weeklyWages,
      wagesPerHour: wagesPerHour,
      weekendDate: weekDateString,
    };
  }

  const monthlyWages = wagesPerHour * totalMonthlyHours;

  console.log("monthly invoice detail estimated");

  return {
    ...kalendar,
    weeklyWorkingDays,
    weeklyHoursTotal,
    totalMonthlyHours,
    dailyWages,
    monthlyWages,
  };
};

const toWordsCustom = (currencyName: string) => {
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: "Zloty",
        plural: "Zloty",
        symbol: "pln",
        fractionalUnit: {
          name: "Grozy",
          plural: "Grozy",
          symbol: "pln",
        },
      },
    },
  });

  return toWords;
};

const currencyFormat = (amount: number) => {
  return currency(amount, { precision: 0, symbol: "" }).format();
};

export { monthlyInvoiceDetails, toWordsCustom, currencyFormat };

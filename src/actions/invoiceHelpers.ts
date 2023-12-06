import currency from "currency.js";
import { ToWords } from "to-words";

const calendar = require("calendar-js");


interface ICalendar {
  year: string,
  yearAbbr: string,
  month: string,
  monthAbbr: string,
  weekdays: string[],
  weekdaysAbbr: string[],
  days: number,
  firstWeekday: number,
  lastWeekday: number,
  calendar: IMonthDays;
}


export interface ICalendarInvoice extends ICalendar {
    weeklyWorkingDays: number[][] , 
    weeklyHoursTotal: IWeeklyHoursTotal, 
    totalMonthlyHours: number, 
    dailyWages: number, 
    monthlyWages: number
}

type IWorkingDays = number[];

type IMonthDays = number[][];

interface IWeeklyHoursTotal {
    [key: string]: { weeklyHours: number, weeklyWages: number, wagesPerHour: number, weekendDate: string},
}

const monthlyInvoiceDetails = (holidays: IWorkingDays = [1, 11, 3, 30], month?: number) => {
  const currentDate = new Date('22/Nov/2023');
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dailyWorkingHours = 8;
  const wagesPerHour = 125;
  const dailyWages = wagesPerHour * dailyWorkingHours;

  let kalendar: ICalendar;

  if(month && month <= 11 && month >= 0) {
    kalendar = calendar().of(currentYear, month);
  }else{
    kalendar = calendar().of(currentYear, currentMonth);
  }

    const monthDays = kalendar.calendar;
    const weeklyHoursTotal: IWeeklyHoursTotal = {};

    let weeklyWorkingDays: number[][] = [];
    let totalMonthlyHours = 0;

    for (const key in monthDays) {
      const filteredPerWeek = monthDays[key].slice(1, -1); // filter sunday && saturrday

      const workingDaysPerWeek = filteredPerWeek.filter((day) => {

        if(holidays && holidays.length > 0 || day !== 0) {
            if(day !== 0 && !holidays?.includes(day)) {
                return day
            }
        }

      });

      weeklyWorkingDays.push(workingDaysPerWeek);

      const weeklyHours = weeklyWorkingDays[key].length * dailyWorkingHours;
      totalMonthlyHours = totalMonthlyHours + weeklyHours;
      const weekIndex = +key + 1;
      const weeklyWages = weeklyHours * wagesPerHour

      const weekendDay = weeklyWorkingDays[key][weeklyWorkingDays[key].length - 1]

      const weekDateString = `${weekendDay}/${kalendar.monthAbbr}/${kalendar.year}`

      weeklyHoursTotal['week'+ weekIndex] = {weeklyHours, weeklyWages, wagesPerHour: wagesPerHour, weekendDate: weekDateString};
    }

    const monthlyWages = wagesPerHour * totalMonthlyHours;
    console.log("monthly invoice detail estimated")

    return {...kalendar, weeklyWorkingDays, weeklyHoursTotal, totalMonthlyHours, dailyWages, monthlyWages}

};

const toWordsCustom = (currencyName: string) => {
  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: { // can be used to override defaults for the selected locale
        name: 'Zloty',
        plural: 'Zloty',
        symbol: 'pln',
        fractionalUnit: {
          name: 'Grozy',
          plural: 'Grozy',
          symbol: 'pln',
        },
      }
    }
  });

  return toWords
}

const currencyFormat = (amount: number) => {
  return currency(amount, { precision: 0, symbol: '' }).format()

}

export {
    monthlyInvoiceDetails,
    toWordsCustom,
    currencyFormat
}
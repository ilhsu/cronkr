const cronkr = require('../lib/index');

describe('Test cronkr', () => {
  test("Check function exist", function () {
    expect(typeof cronkr.desc).toBe('function');
  });

  test("Invalid cron expression test", function () {
    expect(cronkr.desc("wrong")).toBe(null);
    expect(cronkr.desc("0 0 0 3 * 3 3 3")).toBe(null);
    expect(cronkr.desc("0 0 0 3")).toBe(null);
    expect(cronkr.desc("0 0 0 3 * 3")).toBe(null);
    expect(cronkr.desc("* * * * * *")).toBe(null);
  });


  test("Translate test", function () {
    expect(cronkr.desc("0 0 12 * * ?")).toBe("매일 12시 0분 0초");
    expect(cronkr.desc("0 15 10 ? * *")).toBe("매일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 * * ?")).toBe("매일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 * * ? *")).toBe("매일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 * * ? 2005")).toBe("2005년 매일 10시 15분 0초");
    expect(cronkr.desc("0 * 14 * * ?")).toBe("매일 14시 매분 0초");
    expect(cronkr.desc("0 0/5 14 * * ?")).toBe("매일 14시 0,5,10,15,…분 0초");
    expect(cronkr.desc("0 0/5 14,18 * * ?")).toBe("매일 14,18시 0,5,10,15,…분 0초");
    expect(cronkr.desc("0 0-5 14 * * ?")).toBe("매일 14시 0-5분 0초");
    expect(cronkr.desc("0 10,44 14 ? 3 WED")).toBe("3월 수요일 14시 10,44분 0초");
    expect(cronkr.desc("0 15 10 ? * MON-FRI")).toBe("매월 월요일-금요일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 15 * ?")).toBe("매월 15일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 L * ?")).toBe("매월 마지막일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 L JAN-JUN ?")).toBe("1-6월 마지막일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 ? * 6L")).toBe("매월 마지막 금요일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 ? * 6L 2002-2005")).toBe("2002-2005년 매월 마지막 금요일 10시 15분 0초");
    expect(cronkr.desc("0 15 10 ? * 6#3")).toBe("매월 세번째 금요일 10시 15분 0초");
    expect(cronkr.desc("0 0 12 1/5 * ?")).toBe("매월 1,6,11,16,…일 12시 0분 0초"); // ?
    expect(cronkr.desc("0 11 11 11 11 ?")).toBe("11월 11일 11시 11분 0초");
    expect(cronkr.desc("0 11 11 ? 11 2")).toBe("11월 월요일 11시 11분 0초");
    expect(cronkr.desc("0 11 11 LW 11 ?")).toBe("11월 마지막 평일 11시 11분 0초");
    expect(cronkr.desc("0 11 11 31W 11 ?")).toBe("11월 31일에서 가장 가까운 평일 11시 11분 0초"); // ?
    expect(cronkr.desc("* * * * * ?")).toBe("매초");
    expect(cronkr.desc("0 0/2 * * * ?")).toBe("매시 0,2,4,6,…분 0초");
    expect(cronkr.desc("* 0/2 * * * ?")).toBe("매시 0,2,4,6,…분 매초");
  });
});

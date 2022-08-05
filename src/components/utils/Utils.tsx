
function randomData() {
    function t(t: number, e: number) {
        return t > e || t < 0 ? 0 : Math.floor(Math.random() * (e - t + 1) + t)
    }

    function e() {
        return Math.random().toString(36).slice(-5)
    }
    const n = [];
    for (let o = 0; o < t(1, 10); o++) {
        const o = [];
        for (let n = 0; n < t(1, 10); n++) {
            const n = [];
            for (let o = 0; o < t(1, 10); o++) {
                const o = [];
                for (let n = 0; n < t(5, 15); n++) o.push({
                    title: e(),
                    number: t(1, 1e7)
                });
                n.push({
                    title: e(),
                    subTitle: e(),
                    dateStart: Date.now(),
                    dateEnd: Date.now() + 6e5,
                    data: o
                })
            }
            o.push({
                title: e(),
                items: n
            })
        }
        n.push({
            title: e(),
            items: o
        })
    }
    return n
}

function formatDate(timeStamp: number): string {
  const day = new Date(timeStamp);
  const yyyy = day.getFullYear();
  let mm = day.getMonth() + 1; // Months start at 0!
  let dd = day.getDate();
  let mmStr = String(mm);
  let ddStr = String(dd);

  if (dd < 10) ddStr = '0' + ddStr;
  if (mm < 10) mmStr = '0' + mmStr;

  return ddStr + '.' + mmStr + '.' + String(yyyy);
}

export {randomData, formatDate}

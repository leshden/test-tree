
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

export {randomData}

export const treeData = [
  {
    key: "0",
    label: "Documents",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    children: [
      {
        key: "2-0",
        label: "Document 1-1",
        children: [
          {
            key: "2-0-0",
            label: "Document-0-1.doc",
          },
          {
            key: "2-0-1",
            label: "Document-0-2.doc",
          },
        ],
      },
      {
        key: "2-1",
        label: "Document 1-1",
        children: [
          {
            key: "2-1-0",
            label: "Document-0-1.doc",
          },
          {
            key: "2-1-1",
            label: "Document-0-2.doc",
          },
        ],
      },
    ],
  },
];

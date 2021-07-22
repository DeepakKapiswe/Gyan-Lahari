import dcopy from "deep-copy";

function makeSubscriberCell(subscriber) {
    const a = subscriber
    a.subStartVol = a.currPlan ? a.currPlan.substartvol : a.subscriptions[0].substartvol
    a.subEndVol = a.currPlan ? a.currPlan.subendvol : a.subscriptions[0].subendvol
    return (
        {
            margin: [8, 9, 0, 0], // sets gap between each row
            lineHeight: 0.85,
            // background:(a.subStartVol*1 > 60 ? '#eeeebb' : ''), // to set color can be used
            decorationStyle: 'dashed',
            stack: [
                'SC:' + a.subId +
                ' DC:' + a.subDistId +
                ' V(' + a.subStartVol + '-' + a.subEndVol +
                ')'
                , a.subName
                , (a.subAbout === ("" || null) ? "" : a.subAbout)
                , (a.subAdd1 === ("" || null) ? "" : a.subAdd1)
                , (a.subAdd2 === ("" || null) ? "" : a.subAdd2)
                , (a.subPost === ("" || null) ? "" : a.subPost)
                , (a.subCity === ("" || null) ? "" : a.subCity)
                , (a.subState === ("" || null) ? "" : a.subState)
                , (a.subPincode === ("" || null) ? "" : a.subPincode)
                , (a.subPhone === ("" || null) ? "" : 'Mob: ' + a.subPhone)
            ]
        }
    )

}


export default function makePdfSubscriberListData(data) {
    const arr = []
    const dataArr = dcopy(data); // deep copy for safer operations ahead 
    while (dataArr.length > 0) { // remove first three elements of Data Array
        const a1 = dataArr.shift();
        const a2 = dataArr.shift();
        const a3 = dataArr.shift();
        arr.push(
            {
                unbreakable: true,
                columns: [
                    makeSubscriberCell(a1),
                    a2 && makeSubscriberCell(a2),
                    a3 && makeSubscriberCell(a3),
                ]
            })
        dataArr.slice(3);
    }
    return (
        {
            defaultStyle: {
                font: 'NotoSans',
                fontSize: 13,
            },

            content: arr,
            pageMargins: [15, 20, 7, 5],
            pageBreakBefore(currentNode) {
                return currentNode.pageNumbers.length > 1 && currentNode.unbreakable;
            },
            background: function (page) {
                return {
                    fontSize: 10,
                    alignment: 'right',
                    stack: ['Page No: ' + page]
                }
            }
        }
    );
}

export const options = {
    allowShowMiniToolBar: false, // 工具栏
    isMoveByParentNode: false, // 是否在拖动节点后让子节点跟随
    defaultNodeBorderWidth: 0,
    defaultNodeColor: "rgba(238, 178, 94, 1)",
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    defaultLineShape: 1,
    layouts: [
        {
            label: "自动布局",
            layoutName: "force",
            layoutClassName: "seeks-layout-force",
        },
    ],
    defaultJunctionPoint: "border",
    defaultLineWidth: 1,  //默认的线条粗细（像素
    // 这里可以参考"Graph 图谱"中的参数进行设置
    defaultNodeWidth: 60, //	默认的节点宽度	
    defaultNodeHeight: 60,
    defaultNodeBorderWidth: 0, //默认的节点边框粗细（像素）
    defaultFocusRootNode: false, //默认为根节点添加一个被选中的样式

    // "defaultLineMarker": {
    //     "markerWidth": "0",
    //     "markerHeight": "0",
    //     "refX": "0",
    //     "refY": "0",
    //     "data": "M2,2 L10,6 L2,10 L6,6 L2,2"
    // },  //默认的线条箭头样式

    defaultShowLineLabel: false, //默认是否显示连线文字
}
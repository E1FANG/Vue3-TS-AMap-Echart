import { graphic } from 'echarts/core'

import { initEchartGraphicShape } from '@/config/chart/utils'
initEchartGraphicShape()

const defaultColor = {
  top: 'rgba(154,255,169,1)',
  right: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(74,188,97,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ]),
  left: new graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: 'rgba(111,233,136,1)'
    },
    {
      offset: 1,
      color: 'rgba(110,198,3,0)'
    }
  ])
}

export function renderItemFnGenerator (options = {}) {
  const { color = defaultColor, offset = 0 } = options
  return (params, api) => {
    const location = api.coord([api.value(0), api.value(1)])
    return {
      type: 'group',
      children: [
        {
          type: 'CubeLeft',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.left
          }
        },
        {
          type: 'CubeRight',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.right
          }
        },
        {
          type: 'CubeTop',
          shape: {
            api,
            offset,
            xValue: api.value(0),
            yValue: api.value(1),
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: color.top
          }
        }
      ]
    }
  }
}
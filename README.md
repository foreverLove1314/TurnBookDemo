详情页-新建图表
==============
#### 描述
#### URL  

```
POST /env/lab/grid/add
```  
#### 参数
| 参数名  | 类型   | 描述                  |
| ------- | ------ | --------------------- |
| list_id | string | 文档id,必填           |
| img     | string | 缩略图路径            |
| type    | string | 图表类型              |
| sort    | int    | 排序，由大到小，默认0 |

```
联合分布图，仅增加type:Joinplot,其余不变  
```  
重新生成图表-保存数据源及参数
==========================  
#### 描述
#### URL
```
POST /env/lab/source/save
```  
#### 返回  
```javascript
{
    "msg": "创建成功",
}
```  
#### POST参数  

| 参数名  | 类型   | 描述              |
| ------- | ------ | ----------------- |
| grid_id | string | 图表id,必填       |
| source  | string | 数据源数组,必填   |
| params  | string | 图表参数数组,必填 |

#### source数组单个元素定义,按照顺序排序  
```
[{
	"name": "数据源1",
	"env_no": "625000001602",
	"start_time": "1569254400",
	"end_time": "1571846400"
}]
```


| 参数名     | 类型   | 描述            |
| ---------- | ------ | --------------- |
| name       | string | 数据源名称,必填 |
| env_no     | string | 选择的环境编号  |
| start_time | int    | 开始时间戳      |
| end_time   | int    | 结束时间戳      |

#### params数组定义
```
{
	"params":{
        "customYaxis":[{
            "param": "temperature",
            "y": "auto",//根据实际选择,自定义就为''
            "min": "0",
            "max": "100"
        }, {
            "param": "humidity",
            "y": "auto",
            "min": "0",
            "max": "100"
        }],
        "classThreshold":[{
            "param": "temperature",
            "range": "auto",
            "rangeNumberMin":"",
            "rangeNumberMax":"",
            "min": "0",
            "max": "100"
        }, {
            "param": "humidity",
            "range": "auto",
            "rangeNumberMin":"",
            "rangeNumberMax":"",
            "min": "0",
            "max": "100"
        }]
    }
}
```
| 参数名         | 类型  | 描述         |
| -------------- | ----- | ------------ |
| customYaxis    | array | 自定义Y轴    |
| classThreshold | array | 达标分类阈值 |
##### customYaxis数组与原来的params一样
##### classThreshold数组定义
| 参数名         | 类型   | 描述                                   |
| -------------- | ------ | -------------------------------------- |
| param          | string | 参数                                   |
| range          | string | 总共有五个选择的阈值范围               |
| rangeNumberMin | string | 当选择自定义分位数时，此项必填，最小值 |
| rangeNumberMax | string | 当选择自定义分位数时，此项必填，最大值 |
数据源列表
========  
#### 描述
根据图表id获取图表信息和数据源列表  
#### URL  
```
POST /env/lab/source/data_list
```  
##### 联合分布图参数 返回  
```
{
	"total": 1,
	"rows": [{
		"source_id": "1",
		"type": "Joinplot",
		"name": "数据源1",
		"env_no": "625000001602",
		"parameter": "temperature",
		"start_time": "1569254400",
		"end_time": "1571846400"
	}],
	"info": {
		"grid_id": "17",
		"list_id": "13",
		"uid": "1",
		"name": "折线图",
		"img": "images\/line-simple.png",
		"type": "Joinplot",
		"create_time": "1571306338",
		"last_time": "1571306338",
		"sort": "0",
        "params":{
            "customYaxis":[{
                "param": "temperature",
                "name": "温度",
                "unit": "℃",
                "y": "auto",
                "min": "0",
                "max": "100"
            }, {
                "param": "humidity",
                "name": "相对湿度",
                "unit": "%",
                "y": "auto",
                "min": "0",
                "max": "100"
            }],
            "classThreshold":[{
                "param": "temperature",
                "range": "auto",
                "rangeNumberMin":"",
                "rangeNumberMax":"",
                "min": "0",
                "max": "100"
            }, {
                "param": "humidity",
                "range": "auto",
                "rangeNumberMin":"",
                "rangeNumberMax":"",
                "min": "0",
                "max": "100"
            }]
        }
	}
}
```  
图表列表
=======  

#### 联合分布图图表数据  
#### URL
```
POST /env/lab/grid/data_list
```  
### 返回
```
{
	"total": 2,
	"rows": [{
		"grid_id": "42",
		"name": "折线图",
		"img": "images\/line-simple.png",
		"type": "line",
		"params":{
            "customYaxis":[{
                "param": "temperature",
                "name": "温度",
                "unit": "℃",
                "y": "auto",
                "min": "0",
                "max": "100"
            }, {
                "param": "humidity",
                "name": "相对湿度",
                "unit": "%",
                "y": "auto",
                "min": "0",
                "max": "100"
            }],
            "classThreshold":[{
                "param": "temperature",
                "range": "auto",
                "rangeNumberMin":"",
                "rangeNumberMax":"",
                "min": "0",
                "max": "100"
            }, {
                "param": "humidity",
                "range": "auto",
                "rangeNumberMin":"",
                "rangeNumberMax":"",
                "min": "0",
                "max": "100"
            }]
        },
		"source": [{
			"source_id": "1",
			"name": "数据源1",
			"env_no": "6250000025",
			"data":{
                "humidity":{
                    "x":[
                        "0-10",
                        "10-20",
                        "20-30",
                        "30-40",
                        "40-50",
                        "50-60",
                        "60-70",
                        "70-80",
                        "80-90",
                        "90-100"
                    ],
                    "series":[2267, 1622, 1420, 1226, 1182, 1060, 982, 874, 849, 796]
                },
                "temperature":{
                    "y":[
                        "0-10",
                        "10-20",
                        "20-30",
                        "30-40",
                        "40-50",
                        "50-60",
                        "60-70",
                        "70-80",
                        "80-90",
                        "90-100"
                    ]，
                    "series":[2267, 1622, 1420, 1226, 1182, 1060, 982, 874, 849, 796]
                },
                "heatmap":{
                    "series":[
                        [0, 0,200],
                        [0, 1, 350],
                        [0, 2, 100],
                        [0, 3, 400],
                        [0, 4, 200],
                        [0, 5, 500],
                        [0, 6, 1400],
                        [0, 7, 3500],
                        [0, 8, 220],
                        [0, 9, 5600],
                        [0, 10, 700],
                        [0, 11,900],
                        [0, 12, 6500],
                        [0, 13, 4000]
                    ]
                }
            },
			"humidity_max":"44",
			"humidity_min":"0",
			"temperature_man":"30",
			"temperature_min":"10",
		}]
	}],
	"info": {
		"list_id": "15",
		"uid": "1",
		"name": "2019年温湿度文档",
		"img": null,
		"create_time": "1571362882",
		"last_time": "1571379007",
		"sort": "0",
		"create_date": "2019-10-18 09:41:22",
		"last_date": "2019-10-18 14:10:07"
	},
	"active":1   //当前选中图表
}
```  








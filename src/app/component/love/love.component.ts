import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'love',
    pipes: [],
    encapsulation: ViewEncapsulation.None,
    providers: [AppService],
    styles: [require('./love.scss')],
    template: require('./love.html')
})
export class Love {
    isFullScreen: boolean;

    constructor(public appService: AppService) {


    }

    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

    public ngAfterViewInit(): void {
        var map = new BMap.Map("map", {});                        // 创建Map实例
        map.centerAndZoom(new BMap.Point(105.000, 38.000), 5);     // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom();                        //启用滚轮放大缩小
        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
            var points = [];  // 添加海量点数据
            points.push(new BMap.Point(118.77807441, 32.0572355));
            var options = {
                size: BMAP_POINT_SIZE_SMALL,
                shape: BMAP_POINT_SHAPE_STAR,
                color: '#d340c3'
            }
            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
            pointCollection.addEventListener('click', function (e) {
                var gc = new BMap.Geocoder();
                gc.getLocation(new BMap.Point(e.point.lng, e.point.lat), function (rs) {
                    var addComp = rs.addressComponents;
                    alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });
            });
            map.addOverlay(pointCollection);  // 添加Overlay
        } else {
            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
        }
    }


}

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import * as ol from 'openlayers';

@Component({
    selector: 'map',
    templateUrl: 'map.component.html'
})
export class MapComponent {
    @ViewChild('mapElement') mapElement: ElementRef;

    public map: any;

    constructor() {
        let osm_layer: any = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

        this.map = new ol.Map({
            layers: [osm_layer],
            view: new ol.View({
                center: ol.proj.transform([0,0], 'EPSG:4326', 'EPSG:3857'),
                zoom: 2
            })
        });        
    }

    ngAfterViewInit() {
        this.map.setTarget(this.mapElement.nativeElement.id);
    }
}
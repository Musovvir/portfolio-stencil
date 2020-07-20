import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import { SHeaderItems } from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-header',
  styleUrl: 'cnt-flexy-view-viskhan-promo-header.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoHeader implements ComponentInterface {
  /**
   * Данные для Header
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Header
   */
  @Prop() SHeaderItems: SHeaderItems[] = [];

  /**
   * Клик по Musovvir
   */
  @Event() clickHeaderMusovvir: EventEmitter;

  /**
   * Клик по Developer
   */
  @Event() clickHeaderDeveloper: EventEmitter;

  /**
   * Клик по Info
   */
  @Event() clickHeaderInfo: EventEmitter;

  /**
   * Клик по MyLink
   */
  @Event() clickHeaderMyLink: EventEmitter;

  render() {
    return (
      <div class='header'>
        <div class='container-fluid'>
          <div class="row justify-content-between mt-3">
            <div class="col-md-4">
              <div class="my-block">
                <div class="musovvir" onClick={() => this.clickHeaderMusovvir.emit("Musovvir")}>
                  MUSOVVIR
                </div>
                <div class="developer" onClick={() => this.clickHeaderDeveloper.emit("Developer")}>
                  DEVELOPER
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="item" onClick={() => this.clickHeaderInfo.emit("Info")}>
                <div class="marker">
                  <i class={this.payload[0].marker} aria-hidden="true"/>
                </div>
                <div class="my-text">
                  <div class="addr">
                    <b>
                      {this.payload[0].addr}
                    </b>
                  </div>
                  <div class="address">
                    {this.payload[0].address}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="item" onClick={() => this.clickHeaderInfo.emit("Info")}>
                <div class="marker">
                  <i class={this.payload[0].telMarker} aria-hidden="true"/>
                </div>
                <div class="my-text">
                  <div class="tel">
                    <b>
                      {this.payload[0].tel}
                    </b>
                  </div>
                  <div class="telephone">
                    {this.payload[0].telephone}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="item" onClick={() => this.clickHeaderInfo.emit("Info")}>
                <div class="marker">
                  <i class={this.payload[0].timeMarker} aria-hidden="true"/>
                </div>
                <div class="my-text">
                  <div class="tel">
                    <b>
                      {this.payload[0].time}
                    </b>
                  </div>
                  <div class="telephone">
                    {this.payload[0].timeWork}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <hr/>
            </div>
            <div class="col-8">
              <nav class="nav">
                <div class="my-link" onClick={() => this.clickHeaderMyLink.emit("MyLink")}>
                  {this.payload[1].home}
                </div>
                <div class="my-link" onClick={() => this.clickHeaderMyLink.emit("MyLink")}>
                  {this.payload[1].about}
                </div>
                <div class="my-link" onClick={() => this.clickHeaderMyLink.emit("MyLink")}>
                  {this.payload[1].contacts}
                </div>
              </nav>
            </div>
            <div class="col-4 justify-content-end">
              <div class='search'>
                <i class={this.payload[1].search} aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

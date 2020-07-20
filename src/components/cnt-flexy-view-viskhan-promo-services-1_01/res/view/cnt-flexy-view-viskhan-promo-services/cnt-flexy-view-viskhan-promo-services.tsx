import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SServicesItems} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-services',
  styleUrl: 'cnt-flexy-view-viskhan-promo-services.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoServices implements ComponentInterface {

  /**
   * Данные для Services
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Services
   */
  @Prop() SServicesItems: SServicesItems[] = [];

  /**
   * Клик по MyTitl
   */
  @Event() clickServiceMyTitl: EventEmitter;

  /**
   * Клик по Titl
   */
  @Event() clickServiceTitl: EventEmitter;

  /**
   * Клик по Icon
   */
  @Event() clickServiceIcon: EventEmitter;

  render() {
    return (
      <div class='services'>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="my-titl" onClick={() => this.clickServiceMyTitl.emit("MyTitl")}>
                {this.payload[0].titl}
              </div>
            </div>
            <div class='col-md-4 mt-3' data-aos="flip-up">
              <div class="my-block">
                <div class="icon" onClick={() => this.clickServiceIcon.emit("Icon")}>
                  <i class={this.payload[1].icon} aria-hidden="true"/>
                </div>
                <div class="titl" onClick={() => this.clickServiceTitl.emit("Icon")}>
                  {this.payload[1].titl}
                </div>
              </div>
            </div>
            <div class='col-md-4 mt-3' data-aos="flip-up">
              <div class="my-block">
                <div class="icon" onClick={() => this.clickServiceIcon.emit("Icon")}>
                  <i class={this.payload[2].icon} aria-hidden="true"/>
                </div>
                <div class="titl" onClick={() => this.clickServiceTitl.emit("Icon")}>
                  {this.payload[2].titl}
                </div>
              </div>
            </div>
            <div class='col-md-4 mt-3' data-aos="flip-up">
              <div class="my-block">
                <div class="icon" onClick={() => this.clickServiceIcon.emit("Icon")}>
                  <i class={this.payload[3].icon} aria-hidden="true"/>
                </div>
                <div class="titl" onClick={() => this.clickServiceTitl.emit("Icon")}>
                  {this.payload[3].titl}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

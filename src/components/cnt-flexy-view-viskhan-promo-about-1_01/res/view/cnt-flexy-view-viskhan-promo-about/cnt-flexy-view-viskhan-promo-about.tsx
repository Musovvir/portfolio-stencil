import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SAboutItems} from "./interface/common.interface";
import {StorageViskhanPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-about',
  styleUrl: 'cnt-flexy-view-viskhan-promo-about.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoAbout implements ComponentInterface {

  /**
   * Данные для About
   */
  @Prop() payload: any;

  /**
   * Интерфейс для About
   */
  @Prop() SHeaderItems: SAboutItems[] = [];

  /**
   * Клик по Me
   */
  @Event() clickAboutMe: EventEmitter;

  /**
   * Клик по Titl
   */
  @Event() clickAboutTitl: EventEmitter;

  /**
   * Клик по Text
   */
  @Event() clickAboutText: EventEmitter;

  /**
   * Клик по Musovvir
   */
  @Event() clickAboutMusovvir: EventEmitter;

  componentDidRender() {
    setTimeout (
      () => {
        // @ts-ignore
        AOS.init();
      },
      150
    )
  }

  render() {
    return (
      <div class='about'>
        <div class="container">
          <div class="row">
            <div class="col-md-5" data-aos="zoom-in">
              <div class="image" style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[0].image + ")" }}
                   onClick={() => this.clickAboutMe.emit("Me")}>

              </div>
            </div>
            <div class="col-md-7">
              <div class="info">
                <div class="titl" onClick={() => this.clickAboutTitl.emit("Titl")}>
                  {this.payload[0].titl}
                </div>
                <div class="text" onClick={() => this.clickAboutText.emit("Text")}>
                  <p>{this.payload[0].text}</p>
                </div>
                <div class="musovvir" onClick={() => this.clickAboutMusovvir.emit("Musovvir")}>
                  {this.payload[0].musovvir}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

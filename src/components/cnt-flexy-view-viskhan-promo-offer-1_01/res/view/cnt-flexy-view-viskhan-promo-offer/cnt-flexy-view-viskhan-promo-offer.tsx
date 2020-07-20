import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SOfferItems} from "./interface/common.interface";
import {StorageViskhanPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-offer',
  styleUrl: 'cnt-flexy-view-viskhan-promo-offer.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoOffer implements ComponentInterface {

  /**
   * Данные для Offer
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Offer
   */
  @Prop() SHeaderItems: SOfferItems[] = [];

  /**
   * Временный префикс для Image
   */
  @Prop() pathToAssets: string;

  /**
   * Клик по Image
   */
  @Event() clickOfferImage: EventEmitter;

  /**
   * Клик по Titl
   */
  @Event() clickOfferTitl: EventEmitter;

  /**
   * Клик по Button
   */
  @Event() clickOfferButton: EventEmitter;

  /**
   * Клик по MyTitl
   */
  @Event() clickOfferMyTitl: EventEmitter;

  /**
   * Клик по MyText
   */
  @Event() clickOfferMyText: EventEmitter;

  /**
   * Клик по MyLine
   */
  @Event() clickOfferMyLine: EventEmitter;

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
      <div class='offer'>
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="my-titl" onClick={() => this.clickOfferMyTitl.emit("MyTitl")}>
                {this.payload[0].titl}
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="my-text" onClick={() => this.clickOfferMyText.emit("MyText")}>
                {this.payload[0].text}
              </div>
            </div>
            <div class="col-12 text-center">
              <div class="my-line" onClick={() => this.clickOfferMyLine.emit("MyLine")}>
                {this.payload[0].line}
              </div>
            </div>
            <div class="col-md-4 text-center" data-aos="fade-right">
              <div class="my-work">
                <div class="image"
                     onClick={() => this.clickOfferImage.emit("Image")}
                     style={{
                       backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[1].image + ")",
                     }}>
                </div>
                <div class="titl" onClick={() => this.clickOfferTitl.emit("Titl")}>
                  {this.payload[1].titl}
                </div>
                <div>
                  <a href={this.payload[1].url}>
                    <button class="my-button" onClick={() => this.clickOfferButton.emit("Button")}>
                      {this.payload[1].button}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center" data-aos="fade-up">
              <div class="my-work">
                <div class="image"
                     onClick={() => this.clickOfferImage.emit("Image")}
                     style={{
                       backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[2].image + ")",
                     }}>
                </div>
                <div class="titl" onClick={() => this.clickOfferTitl.emit("Titl")}>
                  {this.payload[2].titl}
                </div>
                <div>
                  <a href={this.payload[2].url}>
                    <button class="my-button" onClick={() => this.clickOfferButton.emit("Button")}>
                      {this.payload[2].button}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-center" data-aos="fade-left">
              <div class="my-work">
                <div class="image"
                     onClick={() => this.clickOfferImage.emit("Image")}
                     style={{
                       backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[3].image + ")",
                     }}>
                </div>
                <div class="titl" onClick={() => this.clickOfferTitl.emit("Titl")}>
                  {this.payload[3].titl}
                </div>
                <div>
                  <a href={this.payload[3].url}>
                    <button class="my-button" onClick={() => this.clickOfferButton.emit("Button")}>
                      {this.payload[3].button}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

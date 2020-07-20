import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SCarouselItems} from "./interface/common.interface";
import {StorageViskhanPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-carousel',
  styleUrl: 'cnt-flexy-view-viskhan-promo-carousel.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoCarousel implements ComponentInterface {

  /**
   * Данные для Carousel
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Carousel
   */
  @Prop() SHeaderItems: SCarouselItems[] = [];

  /**
   * Клик по Titl
   */
  @Event() clickCarousel: EventEmitter;


  render() {
    return (
      <div class='carousel'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-12'>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="d-block w-100"
                         style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[0].image_1 + ")" }}
                         onClick={() => this.clickCarousel.emit("Carousel")}>
                      <div class='titl'>
                        {this.payload[0].titl}
                      </div>
                      <div class='text'>
                        {this.payload[0].text}
                      </div>
                      <div class='my-button'>
                        <button class='my-button'>{this.payload[0].button}</button>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="d-block w-100"
                         style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[0].image_2 + ")" }}
                         onClick={() => this.clickCarousel.emit("Carousel")}>
                      <div class='titl'>
                        {this.payload[0].titl}
                      </div>
                      <div>
                        <div class='text'>
                          {this.payload[0].text}
                        </div>
                        <div class='my-button'>
                          <button class='my-button'>{this.payload[0].button}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

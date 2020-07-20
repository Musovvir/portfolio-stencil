import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import { SSkillsItems } from './interface/common.interface';
import {StorageViskhanPromo} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-skills',
  styleUrl: 'cnt-flexy-view-viskhan-promo-skills.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoSkills implements ComponentInterface {

  /**
   * Данные для Skills
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Offer
   */
  @Prop() SSkillsItems: SSkillsItems[] = [];

  /**
   * Клик по Titl
   */
  @Event() clickSkillsTitl: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageHtml: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageCss: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageJs: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageWp: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageAngular: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageStencil: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageReact: EventEmitter;

  /**
   * Клик по Image
   */
  @Event() clickSkillsImageBs: EventEmitter;

  /**
   * Клик по Percent
   */
  @Event() clickSkillsPercent: EventEmitter;

  render() {
    return (
      <div class='skills'>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="titl" onClick={() => this.clickSkillsTitl.emit("MyTitl")}>
                {this.payload[0].titl}
              </div>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-md-2 text-center" data-aos="fade-down-right">
              <div class="image-html"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[1].image + ")" }}
                   onClick={() => this.clickSkillsImageHtml.emit("HTML")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="html">

                  </div>
                  {this.payload[1].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-down">
              <div class="image-css"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[2].image + ")" }}
                   onClick={() => this.clickSkillsImageCss.emit("CSS")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="css">

                  </div>
                  {this.payload[2].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-down">
              <div class="image-js"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[3].image + ")" }}
                   onClick={() => this.clickSkillsImageJs.emit("JS")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="js">

                  </div>
                  {this.payload[3].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-down-left">
                <div class="image-wp"
                     style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[4].image + ")" }}
                     onClick={() => this.clickSkillsImageWp.emit("Wordpress")}>

                </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="wordpress">

                  </div>
                  {this.payload[4].percent}
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between" data-aos="fade-up-right">
            <div class="col-md-2 text-center">
              <div class="image-angular"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[5].image + ")" }}
                   onClick={() => this.clickSkillsImageAngular.emit("Angular")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="angular">

                  </div>
                  {this.payload[5].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-up">
              <div class="image-stencil"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[6].image + ")" }}
                   onClick={() => this.clickSkillsImageStencil.emit("Stencil")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="stencil">

                  </div>
                  {this.payload[6].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-up">
              <div class="image-react"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[7].image + ")" }}
                   onClick={() => this.clickSkillsImageReact.emit("React")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="react">

                  </div>
                  {this.payload[7].percent}
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center" data-aos="fade-up-left">
              <div class="image-bootstrap"
                   style={{ backgroundImage: "url(" + StorageViskhanPromo.prefix + this.payload[8].image + ")" }}
                   onClick={() => this.clickSkillsImageBs.emit("Bootstrap")}>

              </div>
              <div class="my-block" onClick={() => this.clickSkillsPercent.emit("Percent")}>
                <div class="my-item">
                  <div class="bootstrap">

                  </div>
                  {this.payload[8].percent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

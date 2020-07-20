import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import { SFooterItems } from './interface/common.interface';

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-footer',
  styleUrl: 'cnt-flexy-view-viskhan-promo-footer.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoFooter implements ComponentInterface {

  /**
   * Даныне для Footer
   */
  @Prop() payload: any;

  /**
   * Интерфейс для Footer
   */
  @Prop() SFooterItems: SFooterItems[] = [];

  /**
   * Клик по Telephone
   */
  @Event() clickFooterTelephone: EventEmitter;

  /**
   * Клик по Email
   */
  @Event() clickFooterEmail: EventEmitter;

  /**
   * Клик по VK
   */
  @Event() clickFooterVK: EventEmitter;

  /**
   * Клик по Instagram
   */
  @Event() clickFooterInstagram: EventEmitter;

  /**
   * Клик по Facebook
   */
  @Event() clickFooterFacebook: EventEmitter;

  /**
   * Клик по Youtube
   */
  @Event() clickFooterYoutube: EventEmitter;

  /**
   * Клик по Twitter
   */
  @Event() clickFooterTwitter: EventEmitter;

  render() {
    return (
      <div class='footer'>
        <div class="container">
          <div class="row">
            <div class="col-2" onClick={() => this.clickFooterTelephone.emit("Telephone")}>
              <div class="telephone">
                <div class="tel">
                  {this.payload[0].tel}
                </div>
                <div class="number">
                  {this.payload[0].number}
                </div>
              </div>
            </div>
            <div class="col-2" onClick={() => this.clickFooterEmail.emit("Email")}>
              <div class="e-mail">
                <div class="eMail">
                  {this.payload[0].eMail}
                </div>
                <div class="mail">
                  {this.payload[0].mail}
                </div>
              </div>
            </div>
            <div class="col-md-8 mt-3">
              <div class="row justify-content-end">
                <div class="col-1">
                  <div class="vk" onClick={() => this.clickFooterVK.emit("VK")}>
                    <i class={this.payload[0].vk} aria-hidden="true" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="instagram" onClick={() => this.clickFooterInstagram.emit("Instagram")}>
                    <i class={this.payload[0].instagram} aria-hidden="true" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="facebook" onClick={() => this.clickFooterFacebook.emit("Facebook")}>
                    <i class={this.payload[0].facebook} aria-hidden="true" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="youtube" onClick={() => this.clickFooterYoutube.emit("Youtube")}>
                    <i class={this.payload[0].youtube} aria-hidden="true" />
                  </div>
                </div>
                <div class="col-1">
                  <div class="twitter" onClick={() => this.clickFooterTwitter.emit("Twitter")}>
                    <i class={this.payload[0].twitter} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

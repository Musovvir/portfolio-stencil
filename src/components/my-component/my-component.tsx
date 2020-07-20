import { Component, h } from '@stencil/core';
import {forAbout, forCarousel, forFooter, forHeader, forOffer, forServices, forSkills} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true
})
export class MyComponent {

  render() {
    return <div>
      <cnt-flexy-view-viskhan-promo-header-1_01
        payload={forHeader} />

      <cnt-flexy-view-viskhan-promo-carousel-1_01
        payload={forCarousel}
        pathToAssets={this.testPathToAssets}
      />

      <cnt-flexy-view-viskhan-promo-about-1_01
        payload={forAbout}
        pathToAssets={this.testPathToAssets}
      />

      <cnt-flexy-view-viskhan-promo-skills-1_01
        payload={forSkills}
        pathToAssets={this.testPathToAssets}
      />

      <cnt-flexy-view-viskhan-promo-services-1_01
        payload={forServices}
      />

      <cnt-flexy-view-viskhan-promo-offer-1_01
        payload={forOffer}
        pathToAssets={this.testPathToAssets}
      />

      <cnt-flexy-view-viskhan-promo-footer-1_01
        payload={forFooter}
      />
    </div>;
  }

  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "https://cdn.ramman.net/flexy-view/viskhan/promo/1.01/assets/";

}

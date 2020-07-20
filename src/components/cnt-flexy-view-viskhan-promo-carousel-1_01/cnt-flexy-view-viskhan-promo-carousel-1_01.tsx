import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-carousel-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-carousel-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoCarousel1_01 implements ComponentInterface {

  /**
   * Данные для Carousel
   */
  @Prop() payload: any;

  /**
   * Временный префикс для Image
   */
  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageViskhanPromo.prefix = this.pathToAssets;
  }

  render() {

    /**
     * клик по элементам компонента
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <div>
        <cnt-flexy-view-viskhan-promo-carousel
          payload={this.payload}
          onClickCarousel={(item) => clicker(item)}
        />
      </div>
    );
  }

}

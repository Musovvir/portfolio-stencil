import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-offer-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-offer-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoOffer1_01 implements ComponentInterface {

  /**
   * Данные для Offer
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
      <cnt-flexy-view-viskhan-promo-offer
        payload={this.payload}
        onClickOfferMyTitl={(item) => clicker(item)}
        onClickOfferMyText={(item) => clicker(item)}
        onClickOfferMyLine={(item) => clicker(item)}
        onClickOfferImage={(item) => clicker(item)}
        onClickOfferTitl={(item) => clicker(item)}
        onClickOfferButton={(item) => clicker(item)}
      />
    );
  }

}

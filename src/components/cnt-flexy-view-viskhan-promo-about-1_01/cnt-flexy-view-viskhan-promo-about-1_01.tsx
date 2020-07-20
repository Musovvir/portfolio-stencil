import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-about-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-about-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoAbout1_01 implements ComponentInterface {

  /**
   * Данные для About
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
        <cnt-flexy-view-viskhan-promo-about
          payload={this.payload}
          onClickAboutMe={(item) => clicker(item)}
          onClickAboutTitl={(item) => clicker(item)}
          onClickAboutText={(item) => clicker(item)}
          onClickAboutMusovvir={(item) => clicker(item)}
        />
    );
  }

}

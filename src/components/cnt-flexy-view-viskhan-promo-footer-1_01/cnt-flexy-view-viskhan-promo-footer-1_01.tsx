import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-footer-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-footer-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoFooter1_01 implements ComponentInterface {

  /**
   * Даныне для Footer
   */
  @Prop() payload: any;

  render() {

    /**
     * клик по элементам компонента
     */
    const clicker = (item) => {
      console.log(item);
    };
    return (
      <cnt-flexy-view-viskhan-promo-footer
        payload={this.payload}
        onClickFooterTelephone={(item) => clicker(item)}
        onClickFooterEmail={(item) => clicker(item)}
        onClickFooterVK={(item) => clicker(item)}
        onClickFooterInstagram={(item) => clicker(item)}
        onClickFooterFacebook={(item) => clicker(item)}
        onClickFooterYoutube={(item) => clicker(item)}
        onClickFooterTwitter={(item) => clicker(item)}
      />
    );
  }

}

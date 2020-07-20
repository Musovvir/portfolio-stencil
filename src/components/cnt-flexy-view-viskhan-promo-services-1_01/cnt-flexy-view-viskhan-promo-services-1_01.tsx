import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-services-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-services-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoServices1_01 implements ComponentInterface {

  /**
   * Данные для Services
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
      <div>
        <cnt-flexy-view-viskhan-promo-services
          payload={this.payload}
          onClickServiceMyTitl={(item) => clicker(item)}
          onClickServiceTitl={(item) => clicker(item)}
          onClickServiceIcon={(item) => clicker(item)}
        />
      </div>
    );
  }

}

import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-header-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-header-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoHeader1_01 implements ComponentInterface {

  /**
   * Данные для Header
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
        <cnt-flexy-view-viskhan-promo-header
          payload={this.payload}
          onClickHeaderMusovvir={(item) => clicker(item)}
          onClickHeaderDeveloper={(item) => clicker(item)}
          onClickHeaderInfo={(item) => clicker(item)}
          onClickHeaderMyLink={(item) => clicker(item)}
        />
      </div>
    );
  }

}

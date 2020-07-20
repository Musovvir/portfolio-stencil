import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageViskhanPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-viskhan-promo-skills-1_01',
  styleUrl: 'cnt-flexy-view-viskhan-promo-skills-1_01.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewViskhanPromoSkills1_01 implements ComponentInterface {

  /**
   * Данные для Skills
   */
  @Prop() payload: any;


  /**
   * Префикс для Image
   */
  @Prop() pathToAssets: any;

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
        <cnt-flexy-view-viskhan-promo-skills
          payload={this.payload}
          onClickSkillsTitl={(item) => clicker(item)}
          onClickSkillsImageHtml={(item) => clicker(item)}
          onClickSkillsImageCss={(item) => clicker(item)}
          onClickSkillsImageJs={(item) => clicker(item)}
          onClickSkillsImageWp={(item) => clicker(item)}
          onClickSkillsImageAngular={(item) => clicker(item)}
          onClickSkillsImageReact={(item) => clicker(item)}
          onClickSkillsImageStencil={(item) => clicker(item)}
          onClickSkillsImageBs={(item) => clicker(item)}
          onClickSkillsPercent={(item) => clicker(item)}
        />
    );
  }

}

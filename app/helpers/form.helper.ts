import { eLoginFormKey } from '~/shared/enums'

export const formHelper = {
  getDefaultValuesLogin: () => {
    return {
      [eLoginFormKey.Username]: '',
      [eLoginFormKey.Password]: ''
    }
  }
}

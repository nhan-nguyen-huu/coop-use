import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'

export default function DemoPage() {
  // Translate
  const { t } = useTranslation()
  // Enum
  // const { getTranslateEnum } = useTransferEnum()
  // Api
  // const { data: dataUserProfile } = useProfileApi()
  return (
    <section className='flex flex-col gap-5 p-5'>
      <p>{t('common.appName')}</p>
      {/* <p>{getTranslateEnum('mode', eMode, 'VIEW')}</p> */}
      <Button onClick={() => toast.success('Welcome coop use')} className='self-start'>
        App
      </Button>
    </section>
  )
}

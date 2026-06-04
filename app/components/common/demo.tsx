import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Button } from '~/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { type LoginFormSchema, formHelper, getLoginSchema } from '~/helpers'
import { eLoginFormKey } from '~/shared/enums'

export default function DemoPage() {
  // Translate
  const { t } = useTranslation()
  // Enum
  // const { getTranslateEnum } = useTransferEnum()
  // Api
  // const { data: dataUserProfile } = useProfileApi()
  // Form
  const formSchema = getLoginSchema(t)
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formHelper.getDefaultValuesLogin(),
    mode: 'all'
  })
  const onSubmit = () => {}
  return (
    <section className='flex flex-col gap-5 p-5 w-full'>
      <p>{t('common.appName')}</p>
      {/* <p>{getTranslateEnum('mode', eMode, 'VIEW')}</p> */}
      <Button onClick={() => toast.success('Welcome coop use')} className='self-start'>
        App
      </Button>
      <section className='w-full max-w-100 mx-auto'>
        <form id='login-form' onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <FieldGroup className='flex flex-col gap-4'>
            <Controller
              name={eLoginFormKey.Username}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='gap-2'>
                  <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder='User name'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name={eLoginFormKey.Password}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='gap-2'>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder='Password'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
          <Field orientation='horizontal'>
            <Button type='button' variant='outline' onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type='submit'>Submit</Button>
          </Field>
        </form>
      </section>
    </section>
  )
}

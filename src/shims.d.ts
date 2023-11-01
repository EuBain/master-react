/** unocss属性化css添加的ts类型 */
import { AttributifyAttributes,AttributifyNames} from '@unocss/preset-attributify'

// 添加属性化前缀
type Prefix = 'u-'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes, Partial<Record<AttributifyNames<Prefix>, string>> {}
}

// declare module '@/redux/store'
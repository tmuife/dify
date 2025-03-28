import {
  useEffect,
  useRef,
} from 'react'

import { useTranslation } from 'react-i18next'
import { useMarketplace } from './hooks'
import { getLocaleOnClient } from '@/i18n'

type MarketplaceProps = {
  searchPluginText: string
  filterPluginTags: string[]
  onMarketplaceScroll: () => void
}
const Marketplace = ({
  searchPluginText,
  filterPluginTags,
  onMarketplaceScroll,
}: MarketplaceProps) => {
  const locale = getLocaleOnClient()
  const { t } = useTranslation()

  const {
    isLoading,
    marketplaceCollections,
    marketplaceCollectionPluginsMap,
    plugins,
    handleScroll,
    page,
  } = useMarketplace(searchPluginText, filterPluginTags)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container)
      container.addEventListener('scroll', handleScroll)

    return () => {
      if (container)
        container.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      ref={containerRef}
      className='sticky bottom-[-442px] flex h-[530px] shrink-0 grow flex-col overflow-y-auto bg-background-default-subtle px-12 py-2 pt-0'
    >

    </div>
  )
}

export default Marketplace

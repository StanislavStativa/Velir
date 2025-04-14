import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { Default as ImageWrapper } from '@/components/image/ImageWrapper.dev';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { VerticalImageAccordionProps } from './vertical-image-accordion.props';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonBase as Button } from '@/components/button-component/ButtonComponent';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

{
  /* 
    Jira Ticket Information:
    - Key: SCDS-64
    - Summary: Vertical Image Accordion
    - URL: https://velir.atlassian.net/browse/SCDS-64
  */
}

export const Default: React.FC<VerticalImageAccordionProps> = ({ fields, isPageEditing }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isExpanding, setIsExpanding] = useState(false);
  const { sitecoreContext } = useSitecoreContext();
  const isEditMode = isPageEditing || sitecoreContext?.pageEditing || false;

  if (!fields?.data?.datasource) {
    return <NoDataFallback componentName="VerticalImageAccordion" />;
  }

  const handleClick = (index: number) => {
    setIsExpanding(true);
    setActiveIndex(index);
    // Reset expanding state after animation completes
    setTimeout(() => setIsExpanding(false), 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    }
  };

  const { title, items } = fields.data.datasource;

  // When in editor mode, render all items stacked
  if (isEditMode) {
    return (
      <div
        className="@container bg-primary rounded-default text-primary-foreground relative mx-auto my-6 max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        role="region"
        aria-label={title?.jsonValue?.value || 'Image Accordion'}
      >
        {title?.jsonValue && (
          <Text
            tag="h2"
            field={title.jsonValue}
            className="font-heading text-primary-foreground @lg:text-6xl mb-16 text-4xl font-light tracking-tight"
          />
        )}

        <div className="flex flex-col gap-14">
          {items?.results.map((item, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg">
              <div
                className="@md:h-[513px] relative h-[300px]"
                role="img"
                aria-label={item?.image?.jsonValue?.value?.alt?.toString() || `Image ${index + 1}`}
              >
                {(isEditMode || item?.image?.jsonValue?.value?.src) && (
                  <ImageWrapper
                    image={item.image.jsonValue}
                    className="rounded-default h-full w-full object-cover"
                    wrapperClass="h-full w-full"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="flex flex-col py-6">
                {item.title && (
                  <Text
                    tag="h3"
                    field={item.title.jsonValue}
                    className="font-accent text-primary-foreground text-2xl font-medium"
                    id={`tab-${index}`}
                  />
                )}

                {item.description && (
                  <Text
                    tag="p"
                    field={item.description.jsonValue}
                    className="text-primary-foreground mt-2"
                  />
                )}

                {item.cta?.jsonValue && (
                  <Button
                    buttonLink={item.cta.jsonValue}
                    variant="secondary"
                    className="font-heading mt-4 inline-flex w-fit items-center justify-center px-8 py-2.5 text-sm font-medium"
                    aria-label={`Learn more about ${item.title?.jsonValue?.value || ''}`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Normal interactive mode
  return (
    <div
      className="@container bg-primary rounded-default text-primary-foreground relative mx-auto my-6 max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      role="region"
      aria-label={title?.jsonValue?.value || 'Image Accordion'}
    >
      {title?.jsonValue && (
        <Text
          tag="h2"
          field={title.jsonValue}
          className="font-heading text-primary-foreground @lg:text-6xl mb-16 text-4xl font-light tracking-tight"
        />
      )}

      <div className="@md:flex-row flex flex-col gap-14" role="tablist" aria-orientation="vertical">
        {items?.results.map((item, index) => (
          <motion.div
            key={index}
            className={cn(
              'group flex flex-col overflow-hidden rounded-lg transition-all duration-500',
              'h-[120px] cursor-pointer',
              activeIndex === index && 'h-auto',
              '@md:h-auto',
              activeIndex === index ? '@md:flex-1' : '@md:w-[170px] @md:flex-none'
            )}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`panel-${index}`}
            aria-expanded={activeIndex === index}
            tabIndex={0}
            initial={false}
          >
            {/* Image Container */}
            <div
              className={cn(
                'relative transition-all duration-500',
                'h-[120px]',
                activeIndex === index && 'h-[300px]',
                '@md:h-[513px]'
              )}
              role="img"
              aria-label={item?.image?.jsonValue?.value?.alt?.toString() || `Image ${index + 1}`}
            >
              {(isEditMode || item?.image?.jsonValue?.value?.src) && (
                <ImageWrapper
                  image={item.image.jsonValue}
                  className="rounded-default h-full w-full object-cover"
                  wrapperClass="h-full w-full"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Content section */}
            <div
              className={cn(
                'flex flex-col py-6',
                '@md:h-auto @md:overflow-visible',
                '@md:opacity-100'
              )}
              role="tabpanel"
              id={`panel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={activeIndex !== index}
            >
              {/* Title handling */}
              <div
                className={cn(
                  'transition-opacity duration-300',
                  activeIndex === index ? 'block' : 'hidden',
                  '@md:block',
                  '@md:opacity-100',
                  activeIndex === index && isExpanding && '@md:opacity-0'
                )}
              >
                {item.title && (
                  <Text
                    tag="h3"
                    field={item.title.jsonValue}
                    className="font-accent text-primary-foreground text-2xl font-medium"
                    id={`tab-${index}`}
                  />
                )}
              </div>

              {/* Description and CTA */}
              <AnimatePresence>
                {activeIndex === index && !isExpanding && (
                  <motion.div
                    className="flex flex-col gap-4 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                      opacity: { delay: 0.2 },
                    }}
                  >
                    {item.description && (
                      <Text
                        tag="p"
                        field={item.description.jsonValue}
                        className="text-primary-foreground mt-2"
                      />
                    )}
                    {item.cta?.jsonValue && (
                      <Button
                        buttonLink={item.cta.jsonValue}
                        variant="secondary"
                        className="font-heading mt-4 inline-flex w-fit items-center justify-center px-8 py-2.5 text-sm font-medium"
                        aria-label={`Learn more about ${item.title?.jsonValue?.value || ''}`}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

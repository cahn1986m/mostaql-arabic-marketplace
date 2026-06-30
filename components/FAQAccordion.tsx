import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((faq, index) => (
        <Accordion.Item key={faq.question} value={`item-${index}`} className="overflow-hidden rounded-3xl border border-border bg-white">
          <Accordion.Header className="flex items-center justify-between px-5 py-4">
            <Accordion.Trigger className="flex w-full items-center justify-between text-right text-sm font-semibold text-text transition hover:text-primary">
              {faq.question}
              <ChevronDown size={18} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="border-t border-border px-5 py-4 text-sm text-muted">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

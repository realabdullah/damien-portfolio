"use client";

import { LayoutGroup } from "motion/react";
import { faqOne, faqTwo } from "../data/constants";
import Accordion from "../ui/Accordion";
import SectionContent from "../ui/SectionContent";

export default function FAQs() {
  return (
    <div>
      <SectionContent
        title="FAQ’s"
        description="Frequently Asked Questions"
        borderless
      />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:border-r border-[#1C1C21]">
          {faqOne.map((faq) => (
            <Accordion
              key={faq.id}
              title={faq.question}
              description={faq.answer}
              shouldOpen={faq.id === 1}
            />
          ))}
        </div>

        <div>
          <LayoutGroup>
            {faqTwo.map((faq) => (
              <Accordion
                key={faq.id}
                title={faq.question}
                description={faq.answer}
                shouldOpen={faq.id === 7}
              />
            ))}
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
}
